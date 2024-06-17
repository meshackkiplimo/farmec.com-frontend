import { useParams } from "react-router-dom";

const SearchPage = () => {
  const {city} = useParams()

  return(
    <span>user searched for {city} </span>
  )  
}

export default SearchPage;