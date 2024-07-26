import SearchBar, { SearchForm } from "@/components/SearchBar";
import { useNavigate } from "react-router-dom";
// import hero from "../assets/hero.jpg"

const BookPage = () => {
  const navigate = useNavigate();

  const handleSearchSubmit = (searchFormValues: SearchForm) => {
    navigate({
      pathname: `/search/${searchFormValues.searchQuery}`,
    });
  };

  return (
    <div  className="flex flex-col gap-12 bg-cover bg-center"
    
    
    >
   
      <div className="md:px-32 bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
        <h1 className="text-5xl font-bold tracking-tight text-green-600">
          Machines for your choice
        </h1>
        <span className="text-xl">
          Rent your machine today By Searching in the towns below
          
        </span>
      </div>

      <SearchBar
        placeHolder="search by town or town"
        onsubmit={handleSearchSubmit}
      />

      <div className="flex flex-row gap-4">
        
        <div className="flex flex-col gap-4 w-full">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-white rounded-lg shadow-md">
              <h3 className="text-lg font-bold">Farmec,Eldoret</h3>
              <p>Ukulima Grounds</p>
              <p className="text-green-600">500 Ksh per day</p>
              <p className="text-green-600">Available</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-md">
              <h3 className="text-lg font-bold">Farmec,Nakuru</h3>
              <p>Arizona Grounds</p>
              <p className="text-green-600">800 ksh per day</p>
              <p className="text-green-600">Active</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-md">
              <h3 className="text-lg font-bold">Farmec,Moiben</h3>
              <p>Plaza Grounds</p>
              <p className="text-green-600">500 per day</p>
              <p className="text-green-600">Available</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-md">
              <h3 className="text-lg font-bold">Farmec,Kapsabet</h3>
              <p>Koibatek Grounds</p>
              <p className="text-green-600">500 ksh per day</p>
              <p className="text-green-600">Available</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-md">
              <h3 className="text-lg font-bold">Farmec,Kisumu</h3>
              <p>Otoyo Grounds</p>
              <p className="text-green-600">1000 per day</p>
              <p className="text-green-600">Available</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-md">
              <h3 className="text-lg font-bold">Farmec,Kitale</h3>
              <p>Opposite Kitale prison</p>
              <p className="text-green-600">1000 per day</p>
              <p className="text-green-600">Available</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookPage;
