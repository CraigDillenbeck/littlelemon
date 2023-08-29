import MarioAndAdrianA from "../Assets/Images/Mario and Adrian A.jpg";
import MarioAndAdrianB from "../Assets/Images/Mario and Adrian b.jpg";

const AboutHomePage = () => {
  return (
    <section className="p-5 grid md:grid-cols-2">
      <div className="grid justify-center md:content-center md:pt-8">
        <h1 className="text-2xl justify-center">Little Lemon</h1>
        <h2 className="text-xl">Chicago</h2>
        <p className="py-4">
          Founded by Mario and Adrian in 2019, the Little Lemon Restaurant in Chicago, IL 
          is at the forefront of offering delightful and bright Mediterranean cuisine. 
          Classic recipes are celebrated with authenticity and a slight modern twist. 
          Mario and Adrian proudly support small, independent farms for all of their ingredients.  
        </p>
      </div>
      <div className="grid">
        <div className="py-3 md:relative md:pl-8">
          <img src={MarioAndAdrianA} className="py-2 rounded-[16px] md:w-[230px]" alt="Mario and Adrian portrait" />
          <img src={MarioAndAdrianB} className="py-2 rounded-[16px] md:w-[150px] md:absolute md:h-[200px] md:object-cover md:left-56 md:top-16" alt="Mario and Adrian portrait" />
        </div>
      </div>
    </section>
  );
}

export default AboutHomePage;