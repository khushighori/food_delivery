import { configureStore } from "@reduxjs/toolkit";
import cardSlice from "./cardslice"

export const store=configureStore({
    reducer:{
        card:cardSlice
    }
})
