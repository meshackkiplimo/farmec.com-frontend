import  free from "../assets/free.jpg"
import machine from "../assets/machine.jpg"
import bonus from "../assets/bonus.jpg"

const ServicesPage = () => {
  const services = [
    {
      title: "Free Delivery",
      description:
        "We will be able to provide free delivery contrywide to farmers",
      imageUrl:free,
    },
    {
      title: "Machine Maintenance",
      description:
        "We will bea ble to do regular checks and repairs in our machines to ease the burden from farmers through our Engineers ",
        imageUrl:machine,
    },
    {
      title: "Bonuses",
      description:
        "we will give out bonuses to the farmers who rent out in our platform most of the times",
        imageUrl:bonus,

    },
  ];

  return (
    <div className=" space-y-10 bg-green-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-center mb-8">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="space-y-10 bg-gray-50 p-10 rounded-lg">
               <img src={service.imageUrl} alt={service.title} className="w-full h-60 object-cover rounded transition-transform transform hover:scale-105 hover:shadow-lg duration-300 cursor-pointer hover:bg-green-200" />
              <div className="text-left p-2">
                <h2 className="text-xl font-bold mb-2">{service.title}</h2>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
