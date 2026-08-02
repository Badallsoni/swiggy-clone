import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="font-serif bg-[#ff5200] overflow-hidden">

      {/* Navbar */}
      <div className="flex justify-between items-center container mx-auto px-4 md:px-8 py-5 md:py-8">

        <img
          className="w-28 md:w-40 h-auto"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/static-assets/images/swiggy_logo_white.png"
          alt="Swiggy"
        />

        <div className="font-serif text-white text-base font-bold flex gap-4 lg:gap-15 items-center">

          <a
            className="hidden lg:block"
            target="_blank"
            rel="noreferrer"
            href="https://www.swiggy.com/corporate/"
          >
            Swiggy Corporate
          </a>

          <a
            className="hidden lg:block"
            target="_blank"
            rel="noreferrer"
            href="https://partner.swiggy.com/food/login"
          >
            Partner with Us
          </a>

          <a
            className="hidden md:block border border-white rounded-2xl py-2 md:py-3 px-3 md:px-4"
            target="_blank"
            rel="noreferrer"
            href="https://www.swiggy.com/"
          >
            Get The App
          </a>

          <a
            className="border border-black rounded-2xl bg-black py-2 md:py-3 px-3 md:px-4"
            href="https://www.swiggy.com/"
          >
            Sign in
          </a>

        </div>
      </div>


      {/* Hero Section */}
      <div className="pt-10 md:pt-16 pb-8 relative">

        {/* Burger */}
        <img
          className="
            hidden md:block
            h-60 lg:h-90
            w-52 lg:w-80
            object-contain
            absolute top-0 left-0
          "
          src="https://pngimg.com/uploads/burger_sandwich/burger_sandwich_PNG4135.png"
          alt=""
        />

        {/* Pizza */}
        <img
          className="
            hidden md:block
            h-64 lg:h-100
            w-52 lg:w-80
            object-contain
            absolute top-0 right-0
          "
          src="https://static.vecteezy.com/system/resources/previews/021/311/734/original/pizza-transparent-background-png.png"
          alt=""
        />


        {/* Heading */}
        <div
          className="
            text-3xl
            md:text-4xl
            lg:text-5xl
            text-white
            font-bold
            w-[90%]
            md:max-w-[60%]
            mx-auto
            text-center
            relative
            z-10
          "
        >
          Order Food and Groceries. Discover best restaurants. Swiggy it.
        </div>


        {/* Search Inputs */}
        <div
          className="
            w-[90%]
            md:max-w-[70%]
            mx-auto
            flex
            flex-col
            md:flex-row
            gap-4
            md:gap-10
            mt-6
            relative
            z-10
          "
        >

          <input
            placeholder="Delhi, India"
            className="
              bg-white
              w-full
              md:w-[40%]
              text-base
              md:text-xl
              px-6
              py-3
              rounded-2xl
              outline-none
            "
          />

          <input
            placeholder="Search for restaurants and items"
            className="
              bg-white
              w-full
              md:w-[60%]
              text-base
              md:text-xl
              px-6
              py-3
              rounded-2xl
              outline-none
            "
          />

        </div>
      </div>


      {/* Promotional Cards */}
      <div
        className="
          w-[90%]
          max-w-6xl
          mx-auto
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
          gap-6
          mt-10
          md:mt-20
          py-6
        "
      >

        <Link to="/restaurant">
          <img
            className="w-full aspect-[4/3] object-cover rounded-4xl"
            src="https://cdn.growthjockey.com/blogs/swiggy-mall-offering-integrates-with-instamart-69b3b2-480x359.jpeg"
            alt="Swiggy restaurants"
          />
        </Link>


        <a
          href="https://www.swiggy.com/restaurants"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="w-full aspect-[4/3] object-cover rounded-4xl"
            src="https://mir-s3-cdn-cf.behance.net/projects/404/1d31dc85845197.Y3JvcCw4NjIsNjc1LDE0Myww.jpg"
            alt="Swiggy"
          />
        </a>


        <a
          href="https://www.swiggy.com/restaurants"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="w-full aspect-[4/3] object-cover rounded-4xl"
            src="https://www.entertales.com/wp-content/uploads/2024/11/Swiggy-IPO-Details.jpg"
            alt="Swiggy"
          />
        </a>


        <a
          href="https://www.swiggy.com/restaurants"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="w-full aspect-[4/3] object-cover rounded-4xl"
            src="https://images.goodreturns.in/img/2025/01/swiggy-1736326958.jpg"
            alt="Swiggy"
          />
        </a>

      </div>

    </header>
  );
}