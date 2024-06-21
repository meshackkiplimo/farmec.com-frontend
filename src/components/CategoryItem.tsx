import { CategoryItem  as CategoryItemType} from "../types";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";


type Props = {
  categoryItem: CategoryItemType;
}

const CategoryItem = ({categoryItem}: Props) => {
    return(
        <Card className="cursor-pointer" >

            <CardHeader>
                <CardTitle >
                {categoryItem.name} 

                </CardTitle>
            </CardHeader>
            <CardContent className="font-bold">

                ${(categoryItem.price / 100).toFixed(2)}
                
            </CardContent>

            
        </Card>
    )
  
}

export default CategoryItem;