import { Link } from "react-router-dom"

type Props = {
  total:number
  town:string
}

const SearchResultInfo = ({total,town}: Props) => {
    return(
        <div className="etx-xl font-bold flex flex-col gap-3 justify -between lg:items-center lg:flex-row">
           <span>

            {total} Rents found in {town}
            <Link to="/" className="ml-1 text-sm font-semibold underline cursor-pointer text-blue-500" >Change Location</Link>
           </span>
           insert sort dropdown here
        </div>
    )
  
}

export default SearchResultInfo;