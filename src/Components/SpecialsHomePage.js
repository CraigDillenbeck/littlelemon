import greeksalad from "../Assets/Images/greek salad.jpg";
import bruscetta from "../Assets/Images/bruscetta.svg";
import lemondessert from "../Assets/Images/lemon dessert.jpg";
import {LuBike} from "react-icons/lu";

const SpecialsHomePage = () => {
  return (
    <div className="px-5">
      <section className="grid justify-center pt-4 md:flex md:justify-between md:pt-24 md:pb-6">
        <h1 className="text-2xl grid align-middle md:text-3xl md:pr-4">This weeks specials!</h1>
        <div className="flex justify-center md:pl-4">
          <button className="grid bg-[#F4CE14] hover:bg-[#BA9D0F] p-3 rounded-2xl">Online Menu</button>
        </div>
      </section>

      <section className="grid py-4 justify-items-center md:grid-cols-3 gap-5">
        <div className="grid w-[216px] bg-[#d9d9d9] rounded-t-[16px]">
          <div className="h-[148px]">
            <img src={greeksalad} className="h-36 rounded-t-[16px]" alt="greek salad"/>
          </div>
          <div className="px-2 grid grid-cols-2">
            <h3 className="grid">Greek Salad</h3>
            <h3 className="grid text-red-600 justify-items-end">$12.99</h3>
          </div>
          <div>
            <p className="p-2 text-xs">
              The famous greek salad of crispy lettuce, peppers, olives and Chicago Style, 
              feta cheese, garnished with crunchy garlic and rosemary croutons.
            </p>
          </div>
          <div>
            <div className="flex p-2">
              <p>Order a Delivery</p>
              <LuBike className="flex ml-3 h-4 justify-items-end"/>
            </div>
          </div>
        </div>

        <div className="grid w-[216px] bg-[#d9d9d9] rounded-t-[16px]">
          <div>
            <img src={bruscetta} className="h-36 rounded-t-[16px]" alt="greek salad"/>
          </div>
          <div className="px-2 grid grid-cols-2">
            <h3 className="grid">Bruscetta</h3>
            <h3 className="grid text-red-600 justify-items-end">$5.99</h3>
          </div>
          <div>
            <p className="p-2 text-xs">
              Our Bruschetta is made from grilled bread that has been smeared with garlic and 
              seasoned with salt and olive oil.
            </p>
          </div>
          <div>
            <div className="flex p-2">
              <p>Order a Delivery</p>
              <LuBike className="flex ml-3 h-4 justify-items-end"/>
            </div>
          </div>
        </div>

        <div className="grid w-[216px] bg-[#d9d9d9] rounded-t-[16px]">
          <div>
            <img src={lemondessert} className="object-cover overflow-hidden h-[144px] w-[216px] rounded-t-[16px]" alt="greek salad"/>
          </div>
          <div className="px-2 grid grid-cols-2">
            <h3 className="grid">Greek Salad</h3>
            <h3 className="grid text-red-600 justify-items-end">$12.99</h3>
          </div>
          <div>
            <p className="p-2 text-xs">
            This delightful lemon dessert is an incredible balance of sweetness and tart and will be a 
            lovely finish to your meal.
            </p>
          </div>
          <div>
            <div className="flex p-2">
              <p>Order a Delivery</p>
              <LuBike className="flex ml-3 h-4 justify-items-end"/>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
}

export default SpecialsHomePage;