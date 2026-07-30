import { useState } from "react";
import { useEffect } from "react";
import RestCard from "./RestCard";
import Shimmer from "./Shimmer";

export default function Restaurant(){
  const [RestData,setRestData]=useState([])
  useEffect(() => {

  async function fetchData() {

    const proxyServer = "https://cors-anywhere.herokuapp.com/";

    const swiggyApi =
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999";

    const response = await fetch(proxyServer + swiggyApi);
    const data = await response.json();
    console.log(data);

    setRestData(  data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
  }

  fetchData();

}, []);
// Shimmer Effect
if (RestData.length == 0)
  return (
   <Shimmer></Shimmer>
  );

return (
  <div className="flex flex-wrap w-[80%] mx-auto mt-20 gap-5">
    {
      RestData.map((restInfo) => (
        <RestCard
          key={restInfo.info.id}
          restInfo={restInfo}
        ></RestCard>
      ))
    }
  </div>
);

}