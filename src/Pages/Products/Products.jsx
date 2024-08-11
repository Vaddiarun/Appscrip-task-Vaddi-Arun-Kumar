import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { featchProducts } from "../../Redux/ProductsSlice/ProductSlice";
import { FaChevronDown } from "react-icons/fa";
import { PiLineVertical } from "react-icons/pi";
import { RiArrowLeftSLine } from "react-icons/ri";
import { RiArrowRightSLine } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import { addFavourite } from "../../Redux/FavouriteSlice/FavouriteSlice";

export default function Products() {
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(featchProducts());
  }, []);

  const [clickedItemId, setClickedItemId] = useState(null);

  const handleButtonClick = (id) => {
    setClickedItemId(id);
    dispatch(addFavourite(id));
  };

  const [show, setshow] = useState(false);
  const showandhideFilter = () => {
    setshow(!show);
  };

  const [showIdleFor, setshowIdleFor] = useState(false);

  const handleToggleBtn = () => {
    setshowIdleFor(!showIdleFor);
  };

  const [smallDfilter, setsmallDfilter] = useState(false);
  const handlefilterinSmalldevice = () => {
    setsmallDfilter(!smallDfilter);
  };

  return (
    <>
      <div>
        <div>
          <div>
            <div className="hidden lg:flex">
              <hr className="mb-3" />
              <div className="flex justify-start items-center gap-10">
                <h1 className="ml-4">3425 ITEMS</h1>
                <PiLineVertical />
                <button onClick={showandhideFilter}>
                  {show ? (
                    <h1 className="flex items-center justify-center gap-5 text-[#888792] underline">
                      <RiArrowLeftSLine />
                      HIDE FILTER
                    </h1>
                  ) : (
                    <h1 className="flex items-center justify-center gap-5 text-[#888792] underline">
                      <RiArrowRightSLine />
                      SHOW FILTER
                    </h1>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:hidden">
          <hr className="mb-3" />
          <div className="flex justify-center items-center gap-10">
            <div>
              <button
                onClick={handlefilterinSmalldevice}
                className="text-sm hover:text-blue-800  underline"
              >
                FILTER
              </button>
            </div>
            <PiLineVertical />
            <div className="flex items-center justify-center">
              <select className="ml-2 p-2 border-none  rounded-md focus:outline-none focus:ring-2 ">
                <option
                  value="item1"
                  className="flex flex-col justify-end items-end"
                >
                  {" "}
                  <h1 className="flex items-center space-x-2 text-lg font-bold ">
                    RECOMMENDED
                    <FaChevronDown />
                  </h1>
                </option>
                <option value="item2">NEWEST FIRST</option>
                <option value="item3">POPILAR</option>
                <option value="item4">PRICE:HIGH TO LOW</option>
                <option value="item5">PRICE:LOW TO HIGH</option>
              </select>
            </div>
          </div>
          <hr className="mt-3" />
          {smallDfilter && (
            <>
              <div className="mt-2 p-4 bg-gray-100 rounded-lg shadow-lg">
                <h1 className="text-sm cursor-pointer text-[#BFC8CD] underline mb-2">
                  Unselect all
                </h1>

                <div className="flex items-center mb-2">
                  <input type="checkbox" id="men" className="mr-2" />
                  <label htmlFor="men" className="text-sm">
                    Men
                  </label>
                </div>

                <div className="flex items-center mb-2">
                  <input type="checkbox" id="women" className="mr-2" />
                  <label htmlFor="women" className="text-sm">
                    Women
                  </label>
                </div>

                <div className="flex items-center">
                  <input type="checkbox" id="baby-kids" className="mr-2" />
                  <label htmlFor="baby-kids" className="text-sm">
                    Baby & Kids
                  </label>
                </div>
                <hr />
                <div>
                  <div className="flex justify-between items-center">
                    <h1 className="font-semibold text-sm">OCCASION</h1>
                    <IoIosArrowDown className="text-sm" />
                  </div>
                  <h3>ALL</h3>
                </div>
                <hr />
                <div>
                  <div className="flex justify-between items-center">
                    <h1 className="font-semibold text-sm">WORK</h1>
                    <IoIosArrowDown className="text-sm" />
                  </div>
                  <h3>ALL</h3>
                </div>
                <hr />
                <div>
                  <div className="flex justify-between items-center">
                    <h1 className="font-semibold text-sm">FABRIC</h1>
                    <IoIosArrowDown className="text-sm" />
                  </div>
                  <h3>ALL</h3>
                </div>
                <hr />
                <div>
                  <div className="flex justify-between items-center">
                    <h1 className="font-semibold text-sm">SEGMENT</h1>
                    <IoIosArrowDown className="text-sm" />
                  </div>
                  <h3>ALL</h3>
                </div>
              </div>
            </>
          )}
        </div>
        <div className="flex ">
          <div className="hidden lg:flex">
            {show ? (
              <>
                <div className="hidden lg:flex flex-col bg-white  min-h-svh ml-3 mt-2">
                  <div className="flex justify-center items-start gap-2 mt-4">
                    <input
                      type="checkbox"
                      id="customizable"
                      className="w-5 h-5"
                    />
                    <label htmlFor="customizable" className="inline">
                      CUSTOMIZABLE
                    </label>
                  </div>
                  <hr />
                  <div>
                    <button
                      onClick={handleToggleBtn}
                      className="flex flex-col justify-between items-start w-full p-2 border rounded-md border-none"
                    >
                      <div className="flex justify-between items-center w-full">
                        <h1 className="font-semibold">IDEAL FOR</h1>
                        <IoIosArrowDown className="text-sm" />
                      </div>
                      {showIdleFor && (
                        <>
                          <div className="mt-2">
                            <h1 className="text-sm text-[#BFC8CD] underlinecursor-pointer">
                              Unselect all
                            </h1>
                            <div className="flex items-center mt-2">
                              <input
                                type="checkbox"
                                id="men"
                                className="mr-2"
                              />
                              <label htmlFor="men" className="text-sm">
                                Men
                              </label>
                            </div>
                            <div className="flex items-center mt-2">
                              <input
                                type="checkbox"
                                id="men"
                                className="mr-2"
                              />
                              <label htmlFor="men" className="text-sm">
                                Women
                              </label>
                            </div>
                            <div className="flex items-center mt-2">
                              <input
                                type="checkbox"
                                id="men"
                                className="mr-2"
                              />
                              <label htmlFor="men" className="text-sm">
                                Baby&Kids
                              </label>
                            </div>
                          </div>
                        </>
                      )}
                    </button>
                    <h3>ALL</h3>
                  </div>
                  <hr />
                  <div>
                    <div className="flex justify-between items-center">
                      <h1 className="font-semibold">OCCASION</h1>
                      <IoIosArrowDown className="text-sm" />
                    </div>
                    <h3>ALL</h3>
                  </div>
                  <hr />
                  <div>
                    <div className="flex justify-between items-center">
                      <h1 className="font-semibold">WORK</h1>
                      <IoIosArrowDown className="text-sm" />
                    </div>
                    <h3>ALL</h3>
                  </div>
                  <hr />
                  <div>
                    <div className="flex justify-between items-center">
                      <h1 className="font-semibold">FABRIC</h1>
                      <IoIosArrowDown className="text-sm" />
                    </div>
                    <h3>ALL</h3>
                  </div>
                  <hr />
                  <div>
                    <div className="flex justify-between items-center">
                      <h1 className="font-semibold">SEGMENT</h1>
                      <IoIosArrowDown className="text-sm" />
                    </div>
                    <h3>ALL</h3>
                  </div>
                  <hr />
                  <div>
                    <div className="flex justify-between items-center">
                      <h1 className="font-semibold">SUITABLE FOR</h1>
                      <IoIosArrowDown className="text-sm" />
                    </div>
                    <h3>ALL</h3>
                  </div>
                  <hr />
                  <div>
                    <div className="flex justify-between items-center">
                      <h1 className="font-semibold">RAW METERIALS</h1>
                      <IoIosArrowDown className="text-sm" />
                    </div>
                    <h3>ALL</h3>
                  </div>
                  <hr />
                  <div>
                    <div className="flex justify-between items-center">
                      <h1 className="font-semibold">PATTERN</h1>
                      <IoIosArrowDown className="text-sm" />
                    </div>
                    <h3>ALL</h3>
                  </div>
                </div>
              </>
            ) : (
              ""
            )}
          </div>
          <div className="bg-white max-w-full lg:max-w-7xl xl:max-w-[1800px] lg:ml-14 mx-auto">
            <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
              {product.map((items) => (
                <li
                  key={items.id}
                  className="flex flex-col items-center justify-center p-4 "
                >
                  <img
                    className="w-[100px] mb-2"
                    src={items.image}
                    alt={items.title}
                  />
                  <div className="flex flex-col items-center">
                    <h1 className="text-[#252020] font-bold text-lg mb-2">
                      {items.title}
                    </h1>
                    <div className="flex gap-4 justify-center items-start text-start">
                      <p className="text-[#888792] text-sm mb-2 text-start">
                        <span className="underline text-start">Sign in</span> or
                        Create an account to see Pricing
                      </p>
                      <button
                        className="cursor-pointer"
                        onClick={() => handleButtonClick(items.id)}
                      >
                        {clickedItemId !== items.id ? (
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="text-red-600"
                          >
                            <path
                              d="M12.62 20.8096C12.28 20.9296 11.72 20.9296 11.38 20.8096C8.48 19.8196 2 15.6896 2 8.68961C2 5.59961 4.49 3.09961 7.56 3.09961C9.38 3.09961 10.99 3.97961 12 5.33961C13.01 3.97961 14.63 3.09961 16.44 3.09961C19.51 3.09961 22 5.59961 22 8.68961C22 15.6896 15.52 19.8196 12.62 20.8096Z"
                              stroke="#292D32"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        ) : (
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12.62 20.8096C12.28 20.9296 11.72 20.9296 11.38 20.8096C8.48 19.8196 2 15.6896 2 8.68961C2 5.59961 4.49 3.09961 7.56 3.09961C9.38 3.09961 10.99 3.97961 12 5.33961C13.01 3.97961 14.63 3.09961 16.44 3.09961C19.51 3.09961 22 5.59961 22 8.68961C22 15.6896 15.52 19.8196 12.62 20.8096Z"
                              fill="#EB4C6B"
                            />
                          </svg>
                        )}
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
