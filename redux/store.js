import { configureStore } from "@reduxjs/toolkit"
import authReducer from "./authReducer.js";

const store = configureStore({
    reducer: {
        auth: authReducer,
    },
});



export default store;