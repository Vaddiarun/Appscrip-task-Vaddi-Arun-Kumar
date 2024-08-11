
import { createAsyncThunk, createSlice, isRejectedWithValue } from "@reduxjs/toolkit"


export const featchProducts = createAsyncThunk("getproducts", async (data, { isRejectedWithValue }) => {
     console.log(data)
    const responce = await fetch("https://fakestoreapi.com/products")
   
    try {
        const data1 = await responce.json()
        console.log(data1)
        return data1

    } catch (error) {
        return isRejectedWithValue(error)
    }
})

const initialState = {
    product: [],
    loading:false
}

const productSlice = createSlice({
    name: "product",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(featchProducts.pending, (state, action) => {
                state.loading = true
            })
            .addCase(featchProducts.fulfilled, (state, action) => {
                state.loading = false
                state.product = action.payload
            })
            .addCase(featchProducts.rejected, (state, action) => {
                state.loading = false
            })
    }
})


export default productSlice.reducer