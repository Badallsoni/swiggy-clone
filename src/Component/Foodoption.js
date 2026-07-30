import FoodCard from "./FoodCard"
import { imageGridCards } from "../../utils/Fooddata"

export default function Foodoption() {
  return (
<>
<div className="w-[80%] container mx-auto flex flex-wrap">
{
  imageGridCards.map((fooddata)=><FoodCard key={fooddata.id} fooddata={fooddata}></FoodCard>)
}

</div>
</>

  )
}  