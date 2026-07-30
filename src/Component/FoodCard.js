export default function FoodCard({fooddata}){
 return(

  <>
  <a href={fooddata?.action?.link}>
  <img className="w-40 h-50 mt-20 gap-3" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+fooddata?.imageId}></img>
  </a>
  </>
 )
}