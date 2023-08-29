import restaurantfood from "../Assets/Images/restaurantfood.jpg"

const HeroHomePage = () => {

  return (
    <div className="grid grid-cols-3 h-80 bg-[#495E57] px-5">
      <div className="col-span-2 z-10 self-center">
        <h1 className="text-4xl text-[#F4CE14]">Little Lemon</h1>
        <h2 className="text-3xl text-white">Chicago</h2>
        <p className="text-white py-2">We are family owned Mediterranean Restaurant, focused on traditional recipes served with a modern trait.</p>
        <button className="bg-[#F4CE14] py-3 px-5 rounded-2xl">Reserve A Table</button>
      </div>
      <div className="absolute right-[20px] z-0 opacity-70 md:opacity-100 md:mt-4 md:flex md:rounded-2xl md:overflow-clip md:static md:h-[370px] lg:static lg:overflow-clip">
        <img src={restaurantfood} alt="chef holding bruscetta" className="h-80 md:overflow-visible md:h-[420px] lg:overflow-visible lg:object-cover"/>
      </div>
    </div>
  )
}

export default HeroHomePage;