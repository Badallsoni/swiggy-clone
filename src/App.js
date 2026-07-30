import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./Component/Home";
import Restaurant from "./Component/Restaurant";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RestaurantMenu from "./Component/RestaurantMenu";
import SecondaryHome from "./Component/SecondaryHome";
import { store } from "./Component/stores";
import { Provider } from "react-redux";
import Checkout from "./Component/Checkout";

function App() {
    return (
        <>
        <Provider store={store}>
        <BrowserRouter>
        <Routes>
         <Route path="/" element={<Home></Home>}></Route>  
         <Route element={<SecondaryHome></SecondaryHome>} >
          <Route path="/restaurant" element={<Restaurant></Restaurant>}></Route>   
           <Route path="/city/Delhi/:id" element={<RestaurantMenu></RestaurantMenu>}></Route>   
           </Route>
           <Route path="/Checkout" element={<Checkout></Checkout>}></Route>
        </Routes>
        </BrowserRouter>
        </Provider>
        </>
    );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App/>);



