export default function GroceryCard({fooddata}){
 return(

  <div className="flex-none">
  <a href={fooddata?.action?.link}>
  <img className="w-60 h-50 " src={"https://media-assets.swiggy.com/swiggy/image/upload/"+fooddata?.imageId}></img>
  </a>
  <h2 className="text-center font-bold">{fooddata?.action?.text}</h2>
  </div>
 )
}