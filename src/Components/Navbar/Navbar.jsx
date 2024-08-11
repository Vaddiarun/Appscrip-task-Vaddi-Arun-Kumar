import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaChevronDown } from "react-icons/fa";
import { PiLineVerticalThin } from "react-icons/pi";
import { Link } from "react-router-dom";
import Favourite from "../../Pages/Favourite/Favourite";
import FavouriteSlice from "../../Redux/FavouriteSlice/FavouriteSlice";
import { useSelector } from "react-redux";
import { RxCross2 } from "react-icons/rx";

export default function Navbar() {
  const { favourite } = useSelector((state) => state.favourite);
  const [showhambergercontent, setshowhambergercontent] = useState(false);
  const handlehambergerforsmalldevices = () => {
    setshowhambergercontent(!showhambergercontent);
  };
  return (
    <div>
      <div className="flex justify-between items-center m-3 ">
        <div className="flex lg:mt-6">
          <button onClick={handlehambergerforsmalldevices}>
            {showhambergercontent ? (
              <RxCross2 className="lg:hidden w-7 h-7 mr-2" />
            ) : (
              <RxHamburgerMenu className="lg:hidden w-7 h-7 mr-2" />
            )}
          </button>

          <Link to="/">
            <img
              className="w-7 h-7 lg:ml-4"
              src="https://i.pinimg.com/736x/49/8f/d7/498fd7108856cff2dcb5fc21cbcd4b78.jpg"
              alt="logo"
            />
          </Link>
        </div>
        <div className="lg:mt-6">
          <h1 className="md:text-4xl font-bold lg:ml-28 lg:mb-8 lg:mt-2">
            LOGO
          </h1>
        </div>
        <div className="flex justify-center items-center gap-2 lg:gap-5">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.58268 17.5003C13.9549 17.5003 17.4993 13.9559 17.4993 9.58366C17.4993 5.2114 13.9549 1.66699 9.58268 1.66699C5.21043 1.66699 1.66602 5.2114 1.66602 9.58366C1.66602 13.9559 5.21043 17.5003 9.58268 17.5003Z"
              stroke="#292D32"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M18.3327 18.3337L16.666 16.667"
              stroke="#292D32"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          {/* favourite icon */}
          <div className="relative">
            <Link to="/favourite">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.517 17.3423C10.2337 17.4423 9.76699 17.4423 9.48366 17.3423C7.06699 16.5173 1.66699 13.0757 1.66699 7.24232C1.66699 4.66732 3.74199 2.58398 6.30033 2.58398C7.81699 2.58398 9.15866 3.31732 10.0003 4.45065C10.842 3.31732 12.192 2.58398 13.7003 2.58398C16.2587 2.58398 18.3337 4.66732 18.3337 7.24232C18.3337 13.0757 12.9337 16.5173 10.517 17.3423Z"
                  stroke="#292D32"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
            {favourite.length > 0 && (
              <div className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {favourite.length}
              </div>
            )}
          </div>
          <Link to="/cart">
            {" "}
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.99611 5.41699H12.9961C15.8295 5.41699 16.1128 6.74199 16.3045 8.35866L17.0545 14.6087C17.2961 16.6587 16.6628 18.3337 13.7461 18.3337H6.25445C3.32945 18.3337 2.69611 16.6587 2.94611 14.6087L3.69612 8.35866C3.87945 6.74199 4.16278 5.41699 6.99611 5.41699Z"
                stroke="#292D32"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6.66406 6.66699V3.75033C6.66406 2.50033 7.4974 1.66699 8.7474 1.66699H11.2474C12.4974 1.66699 13.3307 2.50033 13.3307 3.75033V6.66699"
                stroke="#292D32"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M17.0057 14.1914H6.66406"
                stroke="#292D32"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>{" "}
          </Link>
          <svg
            className="hidden lg:flex"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.1625 10.87C12.0625 10.86 11.9425 10.86 11.8325 10.87C9.4525 10.79 7.5625 8.84 7.5625 6.44C7.5625 3.99 9.5425 2 12.0025 2C14.4525 2 16.4425 3.99 16.4425 6.44C16.4325 8.84 14.5425 10.79 12.1625 10.87Z"
              stroke="#292D32"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M7.15875 14.56C4.73875 16.18 4.73875 18.82 7.15875 20.43C9.90875 22.27 14.4188 22.27 17.1688 20.43C19.5888 18.81 19.5888 16.17 17.1688 14.56C14.4288 12.73 9.91875 12.73 7.15875 14.56Z"
              stroke="#292D32"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <div className="hidden lg:flex ml-2 flex justify-center items-center">
            <h2>ENG</h2>
            <FaChevronDown />
          </div>
        </div>
      </div>
      {showhambergercontent ? (
        <div className="bg-neutral-300">
          <ul className=" text-black text-start">
            <Link to="/">SHOP</Link>
            <li>SKILLS</li>
            <li>STORIES</li>
            <li>ABOUT</li>
            <Link to="/footer">
              {" "}
              <li>Contact Us</li>
            </Link>
          </ul>
        </div>
      ) : (
        ""
      )}
      <div className="flex lg:hidden justify-start items-center">
        <h2>
          <Link to="/">HOME</Link>
        </h2>
        <PiLineVerticalThin />
        <h1>Shop</h1>
      </div>
      <HeaderNavlinks />
      <hr className="mt-2" />
    </div>
  );
}

const HeaderNavlinks = () => {
  return (
    <>
      <div className="hidden lg:flex justify-center items-center">
        <ul className="flex justify-center items-center gap-20 mt-2 text-black font-bold">
          <Link to="/">SHOP</Link>
          <li>SKILLS</li>
          <li>STORIES</li>
          <li>ABOUT</li>
          <Link to="/footer">
            {" "}
            <li>Contact Us</li>
          </Link>
        </ul>
      </div>
      <hr className="mt-3" />

      <div className="text-center">
        <h1
          className="text-2xl mb-2 lg:text-5xl lg:mt-7"
          style={{ fontFamily: "Simplon Norm" }}
        >
          DISCOVER OUR PRODUCTS
        </h1>
        <p className="text-md mb-1 mt-4" style={{ fontFamily: "Simplon Norm" }}>
          Lorem ipsum dolor sit amet consectetur. <br className="lg:hidden" />
          Amet est posuere rhoncus scelerisque.
          <br className="hidden lg:flex" /> Dolor integer scelerisque nibh amet
          mi ut elementum dolor.
        </p>
      </div>
    </>
  );
};
