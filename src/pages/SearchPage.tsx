import { useSearchRents } from "@/api/RentApi";
import SearchResultCard from "@/components/SearchResultCard";
import SearchResultInfor from "@/components/SearchResultInfor";
import { useParams } from "react-router-dom";

const SearchPage = () => {
  const {city} = useParams()
  const {results, isLoading} = useSearchRents(city)
  if(isLoading){
    <span>loading....</span>
  }

  if(!results?.data || !city){
    return <span>No results found</span>
  }


  return(
  <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] ">

    <div id="machines-list" >find your machines hear:)

    </div>
    <div id="main-content" className="flex flex-col gap-5">

        <SearchResultInfor total={results.pagination.total} city={city} />
        {results.data.map((rent)=>(
        <SearchResultCard rent={rent} />
        ))}
    </div>
  </div>
  )  
}

export default SearchPage;