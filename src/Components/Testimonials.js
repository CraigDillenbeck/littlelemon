import jenny from "../Assets/Images/jenny.jpg";
import alex from "../Assets/Images/alex.jpg";
import margaret from "../Assets/Images/margaret.jpg";
import thomas from "../Assets/Images/thomas.jpg";
import {AiOutlineStar} from "react-icons/ai";

const Testimonials = () => {
  return (
    <section className="bg-[#e8e8e8] px-5 mt-10">
      <h1 className="text-2xl pt-4 pb-2 flex justify-center">Testimonials</h1>

      <section className="pt-2 pb-6 grid justify-items-center min-[420px]:grid-cols-2 md:grid-cols-4">

        <section className="p-4 mb-4 w-[160px] bg-white rounded-[16px] grid">
          <div className="flex justify-center">
            <img src={jenny} className="flex h-[100px] w-[100px] object-cover rounded-full" alt="jenny portrait" />
          </div>
          <p className="text-xs justify-center pt-2">“Having been to the Mediterranean before, this food is amazing!“</p>
          <div className="flex">
            <AiOutlineStar className="h-8"/>
            <AiOutlineStar className="h-8" />
            <AiOutlineStar className="h-8" />
            <AiOutlineStar className="h-8" />
          </div>
        </section>

        <section className="p-4 mb-4 w-[160px] bg-white rounded-[16px] grid">
          <div className="flex justify-center">
            <img src={alex} className="flex h-[100px] w-[100px] object-cover rounded-full" alt="alex portrait" />
          </div>
          <p className="text-xs justify-center pt-2">“The staff is always so welcoming - and the food is fantastic!“</p>
          <div className="flex">
            <AiOutlineStar className="h-8"/>
            <AiOutlineStar className="h-8" />
            <AiOutlineStar className="h-8" />
            <AiOutlineStar className="h-8" />
          </div>
        </section>

        <section className="p-4 mb-4 w-[160px] bg-white rounded-[16px] grid">
          <div className="flex justify-center">
            <img src={margaret} className="flex h-[100px] w-[100px] object-cover rounded-full" alt="margaret portrait" />
          </div>
          <p className="text-xs justify-center pt-2">“I am always ordering this food to take home from work, its so affordable and delicious!”</p>
          <div className="flex">
            <AiOutlineStar className="h-8"/>
            <AiOutlineStar className="h-8" />
            <AiOutlineStar className="h-8" />
            <AiOutlineStar className="h-8" />
          </div>
        </section>

        <section className="p-4 mb-4 w-[160px] bg-white rounded-[16px] grid">
          <div className="flex justify-center">
            <img src={thomas} className="flex h-[100px] w-[100px] object-cover rounded-full" alt="thomas portrait" />
          </div>
          <p className="text-xs justify-center pt-2">“My friends and I are always meeting here and we always start with the bruschetta!”</p>
          <div className="flex">
            <AiOutlineStar className="h-8"/>
            <AiOutlineStar className="h-8" />
            <AiOutlineStar className="h-8" />
            <AiOutlineStar className="h-8" />
          </div>
        </section>

      </section>
    </section>
  );
}

export default Testimonials;