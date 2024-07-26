import harvestor from "../assets/harvestor.jpg"
import massey from "../assets/massey.jpg"
import plough from "../assets/plough.jpg"
import ford from "../assets/ford.jpg"
import trailer from "../assets/trailer.jpg"
import boom from "../assets/boom.jpg"
import deer from "../assets/deer.jpg"
import arrow from "../assets/arrow.jpg"
import seed from "../assets/seed.jpg"
import sheller from "../assets/sheller.jpg"
import cutter from "../assets/cutter.jpg"
import pickup from "../assets/pickup.jpg"
const RentPage = () => {
  const machines = [
    {
      title: 'Massey Tractor',
      description: 'High-performance tractor for all your farming needs.',
      imageUrl: massey,
    },
    {
      title: 'Combine Harvester',
      description: 'Efficient combine harvester for large-scale crop harvesting.',
      imageUrl:harvestor,
    },
    {
      title: 'Plow',
      description: 'Durable plow for effective soil preparation.',
      imageUrl: plough,
    },
    {
        title: 'Ford 6600 Tractor',
        description: 'High-performance tractor for all your farming needs.',
        imageUrl: ford,
      },
      {
        title: 'Trailer',
        description: 'High performance and multipurpose trailer for all jobs.',
        imageUrl:trailer,
      },
      {
        title: 'Boom Sprayer',
        description: 'High Durable sprayer .',
        imageUrl: boom,
      },
      {
        title: 'Seed Planter',
        description: 'High-performance planter for all your farming needs.',
        imageUrl: seed,
      },
      {
        title: 'Disc Arrow',
        description: "pressure seeder best for large scale farming",
        imageUrl:arrow,
      },
      {
        title: 'Jhon Deer Tractor',
        description: 'Durable Tractor for effective farm acivities.',
        imageUrl: deer,
      },
      
      {
        title: 'Thrasher',
        description: 'Durable sheeller dor maize farmers.',
        imageUrl: sheller,
      },
      {
        title: 'Grass cutter',
        description: 'star grass cutter .',
        imageUrl: cutter,
      },
      
      {
        title: 'pick up Truck',
        description: 'made to make transportation easier.',
        imageUrl: pickup,
      },
  ];

  return (
    <div className="space-y-10 bg-green-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-center mb-8">Take a Look at The Quality Of our Machines Available</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {machines.map((machine, index) => (
            <div key={index} className="space-y-10 bg-gray-50 p-10 rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg duration-300 cursor-pointer hover:bg-green-200 ">
              <img src={machine.imageUrl} alt={machine.title} className="w-full h-48 object-cover rounded-t-lg" />
              <div className="text-left p-2">
                <h2 className="text-xl font-bold mb-2">{machine.title}</h2>
                <p className="text-black-600">{machine.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RentPage;
