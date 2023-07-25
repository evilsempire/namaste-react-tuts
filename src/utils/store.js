import cartSlice from "./cartSlice";

const { configureStore, combineReducers } = require("@reduxjs/toolkit");

const reducer = combineReducers({
    cart: cartSlice
})
const store = configureStore({
    reducer
});

export default store;