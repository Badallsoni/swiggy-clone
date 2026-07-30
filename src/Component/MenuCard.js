import { useState } from "react";
import RestInfo from "./RestInfo";
export default function MenuCard({menuItems,foodselected}){
const[isopen,setIsopen]=useState(true)


if ("categories" in menuItems) {
  return (
    <div className="w-full">
      <p className="text-2xl font-bold m-4">{menuItems.title}</p>

      <div>
        {
          menuItems?.categories?.map((items) => (
            <MenuCard
              key={items?.title}
              menuItems={items}
              foodselected={foodselected}
            />
          ))
        }
      </div>
    </div>
  );
}

if(!isopen)
{
  return(
    <div>
  
  <div className="w-full">
    <div className="justify-between flex w-full">
    <p className="text-2xl font-bold mb-4">{menuItems.title}</p>
<button className="text-3xl mr-10 font-bold" onClick={() => setIsopen(!isopen)}> {isopen ? '^' : '˅'}
</button>
</div>
    <div className="h-5 bg-gray-400 my-2"></div>
  </div>
  </div>
)
}

if(foodselected==='veg'){
 return(
    
  
  <div className="w-full">
    <div className="justify-between flex w-full">
    <p className="text-2xl font-bold mb-4">{menuItems.title}</p>
<button className="text-3xl mr-10 font-bold" onClick={() => setIsopen(!isopen)}> {isopen ? '^' : '˅'}
</button>
</div>

    <div>
      {
        menuItems?.itemCards?.filter((food) => "isVeg" in food?.card?.info).map((items) => (
          <RestInfo
            key={items?.card?.info?.id}
            restData={items?.card?.info}
          />
        ))
      }
    </div>
  </div>
  
);
}
if(foodselected==='nonveg'){
 return(
    
  
  <div className="w-full">
    <div className="justify-between flex w-full">
    <p className="text-2xl font-bold mb-4">{menuItems.title}</p>
<button className="text-3xl mr-10 font-bold" onClick={() => setIsopen(!isopen)}> {isopen ? '^' : '˅'}
</button>
</div>

    <div>
      {
        menuItems?.itemCards?.filter((food) => !("isVeg" in food?.card?.info)).map((items) => (
          <RestInfo
            key={items?.card?.info?.id}
            restData={items?.card?.info}
          />
        ))
      }
    </div>
  </div>
  
);
}

   return(
    
  
  <div className="w-full">
    <div className="justify-between flex w-full">
    <p className="text-2xl font-bold mb-4">{menuItems.title}</p>
<button className="text-3xl mr-10 font-bold" onClick={() => setIsopen(!isopen)}> {isopen ? '^' : '˅'}
</button>
</div>

    <div>
      {
        menuItems?.itemCards?.map((items) => (
          <RestInfo
            key={items?.card?.info?.id}
            restData={items?.card?.info}
          />
        ))
      }
    </div>
  </div>
  
);
   
  
}