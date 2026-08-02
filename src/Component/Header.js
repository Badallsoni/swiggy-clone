import { Link } from "react-router-dom";
export default function Header() {
  return (
    <header className="font-serif bg-[#ff5200]">
      <div className="flex justify-between container mx-auto py-8">
        <img
          className="w-40 h-12"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/static-assets/images/swiggy_logo_white.png"
        />
        <div className="font-serif text-white text-base font-bold flex gap-15 items-center">
          <a target="_blank" href="https://www.swiggy.com/corporate/">Swiggy Corporate</a>
           <a target="_blank" href="https://partner.swiggy.com/food/login">Partner with Us</a>
            <a target="_blank" className="border border-white rounded-2xl py-3 px-4">Get The App</a>
             <a target="_blank" className="border border-black rounded-2xl bg-black py-3 px-4">Sign in</a>
        </div>
        
      </div>

      <div className="pt-16 pb-8 relative" >
        <img className="h-90 w-80 absolute top-0 left-0"  src="https://pngimg.com/uploads/burger_sandwich/burger_sandwich_PNG4135.png"/>
        <img className="h-100 w-80 absolute top-0 right-0 "   src="https://static.vecteezy.com/system/resources/previews/021/311/734/original/pizza-transparent-background-png.png"></img>
        <div className="text-5xl text-white font-bold max-w-[60%] container mx-auto text-center">Order Food and Groceries. Discover best restaurents.Swiggy it. </div>
        <div className="max-w-[70%] container mx-auto flex gap-10 justify-baseline mr-20 mt-4 ">
        <input placeholder="Delhi,India" className="max-w-[40%] bg-white w-[40%] text-xl px-6 py-2 rounded-2xl "></input>
        <input placeholder="Search for restaurants and items for more" className=" bg-white w-[55%]  text-xl px-6 py-2 mr-50 rounded-2xl" ></input>   

        </div>

      </div>
      <div className="max-w-[80%] container mx-auto flex mt-30 mr-40 gap-6 py-6" >
       <Link to="/restaurant">
          <img className="rounded-4xl"  src="https://cdn.growthjockey.com/blogs/swiggy-mall-offering-integrates-with-instamart-69b3b2-480x359.jpeg"></img>
       </Link>

         <a href="https://www.swiggy.com/restaurants" >
          <img className="rounded-4xl w-120 h-53"  src="https://mir-s3-cdn-cf.behance.net/projects/404/1d31dc85845197.Y3JvcCw4NjIsNjc1LDE0Myww.jpg"></img>
        </a>

         <a href="https://www.swiggy.com/restaurants" >
          <img className="rounded-4xl w-120 h-53  "  src="https://www.entertales.com/wp-content/uploads/2024/11/Swiggy-IPO-Details.jpg "></img>
        </a>
       
 <a href="https://www.swiggy.com/restaurants" >
          <img  className="rounded-4xl w-120 h-53" src="https://images.goodreturns.in/img/2025/01/swiggy-1736326958.jpg"></img>
        </a>
      </div>
    </header>
  );
}