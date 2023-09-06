/* From Yazdun 'react-fcc-forms' */

/*-------------------------------------------------------------------
|  🐼 Input Validators
|
|  🐯 Purpose: THIS FILE CONTAINS ALL THE VALIDATORS OBJECTS
|
|  🐸 Returns:  -
*-------------------------------------------------------------------*/

export const name_validation = {
  name: 'name',
  label: 'name',
  type: 'text',
  id: 'name',
  placeholder: 'Jane',
  validation: {
    required: {
      value: true,
      message: 'required',
    },
    minLength: {
      value: 2,
      message: 'name must be between 2 and 20 characters',
    },
    maxLength: {
      value: 20,
      message: 'no more than 20 characters',
    },
  },
}

export const date_validation = {
  name: 'date',
  label: 'date',
  type: 'date',
  id: 'date',
  placeholder: new Date().toLocaleDateString(),
  validation: {
    required: {
      value: true,
      message: 'required',
    }
  },
}

export const guests_validation = {
  name: 'guests',
  label: 'guests',
  type: 'number',
  id: 'guests',
  placeholder: 'enter number of guests',
  validation: {
    required: {
      value: true,
      message: 'required',
    },
    minValue: {
      value: 2,
      message: 'cannot reserve a table with only one guest'
    },
    maxValue: {
      value: 12,
      message: "cannot resever a table with more than 12 guests"
    }
  },
}

export const email_validation = {
  name: 'email',
  label: 'email address',
  type: 'email',
  id: 'email',
  placeholder: 'jane@email.com',
  validation: {
    required: {
      value: true,
      message: 'required',
    },
    pattern: {
      value:
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message: 'email not valid',
    },
  },
}