import { configureStore, createReducer, createSlice } from "@reduxjs/toolkit";
import ProductSlice from "./ProductsSlice/ProductSlice";
import FavouriteSlice from "./FavouriteSlice/FavouriteSlice";
import storage from 'redux-persist/lib/storage';
import { persistReducer,persistStore} from 'redux-persist';
import { combineReducers } from "@reduxjs/toolkit";




const persistConfig = {
    key: 'root',
    storage,
    version:1,

}

const reducer = combineReducers({
        product: ProductSlice,
    favourite:FavouriteSlice

})

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware({serializableCheck:false})
});

export const persistor=persistStore(store)