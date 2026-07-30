import { Grocerycards } from "../../utils/Grocery"
import GroceryCard from "./GroceryCard"
export default function GroceryOption(){
  return(
    <div className="mt-20 w-[90%] container mx-auto  relative">
     <div className="mb-2"><h1 className="ml-40 font-bold text-2xl ">Shop Grocries on Instamart</h1></div> 
    <div className="w-[90%] container mx-auto flex flex-nowrap overflow-x-auto mt-20 gap-3">
    {
      Grocerycards.map((fooddata)=><GroceryCard key={fooddata.id} fooddata={fooddata}></GroceryCard>)
    }
    
    </div>
    </div>
  )
}