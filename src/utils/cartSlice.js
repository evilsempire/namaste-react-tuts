import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state,action) => {
            console.log(action.payload);
            state.items.push(action.payload)
        },
        removeItem: () => {

        },
        clearCart: (state) => {
            state.items.length = 0; 
        }
    }
});

export const {addItem, removeItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer;