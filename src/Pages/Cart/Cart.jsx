import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFavourite } from "../../Redux/FavouriteSlice/FavouriteSlice";

export default function Favourite() {
  const { favourite } = useSelector((state) => state.favourite);
  const { product } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  const handleRemove = (items) => {
    console.log(items);
    dispatch(removeFavourite(items));
  };

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <h1 className="text-[30px] mb-10">Your Favourites</h1>

      {favourite.length === 0 ? (
        <div className="flex flex-col justify-center items-center">
          <img
            src="https://i.pinimg.com/736x/2e/ac/fa/2eacfa305d7715bdcd86bb4956209038.jpg"
            alt="No items in your favourites"
            className="w-48 h-48 object-cover mb-4"
          />
          <p>No items in your favourites.</p>
        </div>
      ) : (
        favourite.map((favId) => {
          const item = product.find((prod) => prod.id === favId);

          return item ? (
            <div
              key={item.id}
              className="bg-yellow-20 w-[500px]  mb-10 flex flex-col items-center justify-center p-4 rounded-lg shadow-md"
            >
              <img
                className="w-[100px] mb-2"
                src={item.image}
                alt={item.title}
              />
              <div className="flex flex-col items-center">
                <h1 className="text-[#252020] font-bold text-lg mb-2">
                  {item.title}
                </h1>
                <button
                  onClick={() => handleRemove(item.id)}
                  className="bg-red-700 text-white w-[100px] rounded-xl mb-4 py-2"
                >
                  Remove
                </button>
              </div>
            </div>
          ) : null;
        })
      )}
    </div>
  );
}
