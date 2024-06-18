import { useSearchRents } from "@/api/RentApi";
import SearchBar, { SearchForm } from "@/components/SearchBar";
import SearchResultCard from "@/components/SearchResultCard";
import SearchResultInfor from "@/components/SearchResultInfor";
import { useState } from "react";
import { useParams } from "react-router-dom";

export type SearchState = {
  searchQuery: string;

}

const SearchPage = () => {
  const {city} = useParams()
  const [searchState,setSearchState] = useState<SearchState>({
    searchQuery:  ""
  })
  const {results, isLoading} = useSearchRents(searchState,city)

  const setSearchQuery = (searchFormData:SearchForm) =>{
    setSearchState((prevState)=> ({
      ...prevState,
      searchQuery: searchFormData.searchQuery,


    }));
  }
    const resetSearch = () =>{
      
      setSearchState((prevState)=> ({
        ...prevState,
        searchQuery: "",
  
  
      }));
    }

    

  
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
      <SearchBar 
      searchQuery = {searchState.searchQuery}
      onsubmit={setSearchQuery} 
      placeHolder="search by Machine oor Rent Name" 
      onReset = {resetSearch}
      
      />

        <SearchResultInfor total={results.pagination.total} city={city} />
        {results.data.map((rent)=>(
        <SearchResultCard rent={rent} />
        ))}
    </div>
  </div>
  )  
}


export default SearchPage;