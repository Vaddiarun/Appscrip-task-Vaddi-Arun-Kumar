import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    favourite: [],
};

const FavouriteSlice = createSlice({
    name: "favourite",
    initialState,
    reducers: {
        addFavourite: (state, action) => {
            state.favourite = [...state.favourite, action.payload];
        },
        removeFavourite: (state, action) => {
               console.log(action.payload);
            state.favourite = state.favourite.filter((item) => item !== action.payload);
         
            
        },
    },
});

export const { addFavourite, removeFavourite } = FavouriteSlice.actions; // Exporting action creators
export default FavouriteSlice.reducer; // Exporting the reducer
