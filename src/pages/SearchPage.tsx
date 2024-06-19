import { useSearchRents } from "@/api/RentApi";
import MachineFilter from "@/components/MachineFilter";
import PaginationSelector from "@/components/PaginationSelector";
import SearchBar, { SearchForm } from "@/components/SearchBar";
import SearchResultCard from "@/components/SearchResultCard";
import SearchResultInfor from "@/components/SearchResultInfor";
import { useState } from "react";
import { useParams } from "react-router-dom";
// import { SearchState } from '@/pages/SearchPage';

export type SearchState = {
  searchQuery: string;
  page:number;
  selectedMachines: string[];

}

const SearchPage = () => {
  const {city} = useParams()
  const [searchState,setSearchState] = useState<SearchState>({
    searchQuery:  "",
    page:1,
    selectedMachines:[],
  })
  const [isExpanded,setIsExpanded] = useState<boolean>(false)
  const {results, isLoading} = useSearchRents(searchState,city)
  const setSelectedMachines = (selectedMachines:string[]) =>{
    setSearchState((prevState)=>({
      ...prevState,
      selectedMachines,
      page:1
    }))
  }

  const setPage = (page:number) =>{
    setSearchState((prevState)=>({
      
      ...prevState,page}))
    

  }

  const setSearchQuery = (searchFormData:SearchForm) =>{
    setSearchState((prevState)=> ({
      ...prevState,
      searchQuery: searchFormData.searchQuery,
      page:1,


    }));
  }
    const resetSearch = () =>{
      
      setSearchState((prevState)=> ({
        ...prevState,
        searchQuery: "",
        page:1,
  
  
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

    <div id="machines-list" >
      <MachineFilter 
        selectedMachines={searchState.selectedMachines}
        onChange={setSelectedMachines}
        isExpanded={isExpanded}
        onExpandedClick={()=>setIsExpanded((prevIsExpanded)=> !prevIsExpanded)}
      
      />
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
        <PaginationSelector 
         page={results.pagination.page}
         pages={results.pagination.pages} 
         onPageChange={setPage}
        
        />
    </div>
  </div>
  )  
}


export default SearchPage;