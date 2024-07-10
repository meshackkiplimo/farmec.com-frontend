
import SearchBar, { SearchForm } from "@/components/SearchBar"
import { useNavigate } from "react-router-dom"



const HomePage = () => {
  const navigate = useNavigate()
  
  const handleSearchSubmit =(searchFormValues:SearchForm)=>{
    navigate({
      pathname:`/search/${searchFormValues.searchQuery}`,


    })

  }
  return (

    <div className="flex flex-col gap-12">

        <div className="md:px-32 bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
           <h1 className="text-5xl font-bold tracking-tight text-green-600" > Machines for your choice</h1>
           <span className="text-xl" >Rent your machine today</span>

        </div>
         <SearchBar placeHolder="search by city or town" onsubmit={handleSearchSubmit}/>
         <div className="grid md:grid-cols-2 gap-5">
          {/* <img src={landingImage} /> */}
          <div className="flex flex-col items-center justify-center gap-4 text-center" >

            <span className="font-bold text-3xl tracking-tighter">Book your favorite machine anytime</span>
            <span>We have a variety of machines that suites all farmers</span>
            {/* <img src={appDownloadImage} /> */}
          </div>

         </div>
    </div>

  )
}

export default HomePage;