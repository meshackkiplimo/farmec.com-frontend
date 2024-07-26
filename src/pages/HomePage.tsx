import eldoret from "../assets/eldoret.jpg"
import moiben from "../assets/moiben.jpg"
import kitale from "../assets/kitale.jpg"
import nakuru from "../assets/nakuru.jpg"
import kapsabet from "../assets/kapsabet.jpg"
import kisumu from "../assets/kisumu.jpg"

const HomePage = () => {
  const rentalCities = [
    {
      name: "Farmec, Eldoret",
      location: "Ukulima Grounds",
      price: "500 Ksh per day",
      status: "Available",
      imageUrl: eldoret, // Replace with actual image URL
    },
    {
      name: "Farmec, Nakuru",
      location: "Arizona Grounds",
      price: "800 Ksh per day",
      status: "Active",
      imageUrl:nakuru, // Replace with actual image URL
    },
    {
      name: "Farmec, Moiben",
      location: "Plaza Grounds",
      price: "500 per day",
      status: "Available",
      imageUrl: moiben, // Replace with actual image URL
    },
    {
      name: "Farmec, Kapsabet",
      location: "Koibatek Grounds",
      price: "500 Ksh per day",
      status: "Available",
      imageUrl: kapsabet, // Replace with actual image URL
    },
    {
      name: "Farmec, Kisumu",
      location: "Otoyo Grounds",
      price: "1000 per day",
      status: "Available",
      imageUrl: kisumu,// Replace with actual image URL
    },
    {
      name: "Farmec, Kitale",
      location: "Opposite Kitale prison",
      price: "1000 per day",
      status: "Available",
      imageUrl: kitale // Replace with actual image URL
    },
  ];

  return (
    <div className="flex flex-col gap-12">
      <div className="md:px-32 bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
    /
        <h1 className="text-5xl font-bold tracking-tight text-green-600">
          Machines for your choice
        </h1>
        <span className="text-xl">
          Rent your machine today by searching in the towns below
        </span>
      </div>

      <div className="flex flex-row gap-4">
        <div className="flex flex-col gap-4 w-full">
          <div className="grid md:grid-cols-3 gap-4">
            {rentalCities.map((city, index) => (
              <div key={index} className="p-4 bg-white rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg duration-300 cursor-pointer hover:bg-green-200">
                <img
                  src={city.imageUrl}
                  alt={city.name}
                  className="w-full h-40 object-cover rounded mb-4"
                />
                <h3 className="text-lg font-bold">{city.name}</h3>
                <p>{city.location}</p>
                <p className="text-green-600">{city.price}</p>
                <p className="text-green-600">{city.status}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
