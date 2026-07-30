import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import MenuCard from "./MenuCard";
export default function RestaurantMenu(){
  const[selected,setselected]=useState(null);

  let {id}=useParams();

 const [RestData,setRestData]=useState([])
  useEffect(() => {

  async function fetchData() {

    const proxyServer = "https://cors-anywhere.herokuapp.com/";

    const swiggyAPI =
      `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}`;

    const response = await fetch(proxyServer + swiggyAPI);

    const data = await response.json();

    const tempData = data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

const filterData = tempData.filter(
  (items) => 'title' in items?.card?.card
);

setRestData(filterData);
  }

  fetchData();

}, []);

console.log(RestData);

return(
<> <div className="ml-38 mb-10 mt-20">
  <button
  className={`text-2xl px-4 py-2 mr-10 border rounded-2xl ${
    selected === "veg" ? "bg-green-600" : "bg-gray-300"
  }`}
  onClick={() => setselected(selected === "veg" ? null : "veg")}
>
  Veg
</button>

<button
  className={`text-2xl px-4 py-2 mr-10 border rounded-2xl ${
    selected === "nonveg" ? "bg-red-600" : "bg-gray-300"
  }`}
  onClick={() => setselected(selected === "nonveg" ? null : "nonveg")}
>
  Non-Veg
</button></div>
 <div className="w-[80%] mx-auto">
    {
      RestData.map((menuItems) => (
        <MenuCard
          key={menuItems?.card?.card.title}
          menuItems={menuItems?.card?.card}
          foodselected={selected}
        />
      ))
    }
  </div> 
  </>  
);
}