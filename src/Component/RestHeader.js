import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Checkout from "./Checkout";

export default function RestHeader() {

const counter=useSelector(state=>state.cartslice.count)

  return (
    <div className="container mx-auto py-4 px-8 bg-gray-200 text-5xl flex justify-between items-center">
      <div className="">
        <p className="bg-orange-600 leading-relaxed rounded-4xl">Swiggy</p>
      </div>

      <div>
        <Link to="/Checkout">
        <p>Cart{`(${counter})`}</p>
        </Link>
      </div>
    </div>
  );
}