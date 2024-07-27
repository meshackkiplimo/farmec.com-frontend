import kisumu from "../assets/kisumu.jpg";


const Hero = () => {
  return (
    <div className="relative w-full h-[50vh]">
      <img src={kisumu} className="w-full h-full object-cover" />
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 p-6 text-white font-bold text-3xl animate-slide-in ">
      
        <h1>Hello Farmer Welcome!</h1> 
        <p>Higher Quality Machines at Fair price.</p>
      </div>
    </div>
  );
};

export default Hero;
