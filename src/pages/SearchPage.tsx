import { useSearchRents } from "@/api/RentApi";
import { useParams } from "react-router-dom";

const SearchPage = () => {
  const {city} = useParams()
  const {results} = useSearchRents(city)


  return(
    <span>user searched for {city}  <span>
        {results?.data.map((rent)=> <span>

            found - {rent.rentName},{rent.city}
        </span> )}
        </span> </span>
  )  
}

export default SearchPage;