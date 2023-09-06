/* From Yazdun 'react-fcc-forms' */

import cn from 'classnames';
import { findInputError, isFormInvalid } from '../utils';
import { useFormContext } from 'react-hook-form';
import { AnimatePresence, motion } from 'framer-motion';
import { MdError } from 'react-icons/md';

export const Input = ({
  name,
  label,
  type,
  id,
  placeholder,
  validation,
}) => {
  const {
    register,
    formState: {errors},
  } = useFormContext()

  const inputErrors =  findInputError(errors, name);
  const isInvalid  = isFormInvalid(inputErrors);

  const input_tailwind = 'bg-[#d9d9d9] p-3 font-medium rounded-md w-full border border-slate-300 placeholder:opacity-90';

  return (
    <div className="my-6">
      <label htmlFor={id}>
        <h2 className="text-xl font-semibold capitalize">{label}</h2>
      </label>
      <AnimatePresence mode="wait" initial={false}>
        {isInvalid && (
          <InputError
            message={inputErrors.error.message}
            key={inputErrors.error.message}
          />
        )}
      </AnimatePresence>
      <input 
        id={id}
        type={type}
        className={cn(input_tailwind)}
        placeholder={placeholder}
        {...register(name, validation)}
      />
    </div>
  )
}

const InputError = ({ message }) => {
  return (
    <motion.p
      className="flex items-center gap-1 px-2 font-semibold text-red-500 bg-red-100 rounded-md"
      {...framer_error}
    >
      <MdError />
      {message}
    </motion.p>
  )
}

const framer_error = {
  initial: { opacity: 0, y:10 },
  animate: { opacity: 1, y: 0},
  exit: { opacity: 0, y: 10},
  transition: { duration: 0.2 },
}