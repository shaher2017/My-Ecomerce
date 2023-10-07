import { createSlice } from "@reduxjs/toolkit";

export const cartitem = createSlice({
    name: "cart_items",
    initialState:[],
    reducers: {
        addItem: (state, action) => {
            if (!state.some((item) => item.id === action.payload.id)) {
                return [
                  ...state,
                  {
                    id: action.payload.id,
                    title: action.payload.title,
                    brand: action.payload.brand,
                    image: action.payload.thumbnail,
                    price: action.payload.price,
                    quantity: 1,
                    stock: action.payload.stock,
                  },
                ];
              }
              return state;
        },

        deleteItem: (state, action) => {
        return(state.filter(item=>item.id !== action.payload.id));
        },
        resetItems: ()=>{
            console.log("there");
            return [];
        },

        increaseQuantity:(state,action)=>{
            return state.map((item) =>
            item.id === action.payload.id && item.quantity < item.stock
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
        },
        decreaseQuantity: (state, action) => {
            return state.map((item) =>
              item.id === action.payload.id && item.quantity > 1
                ? { ...item, quantity: item.quantity - 1 }
                : item
            );
          },
    },
});
export const {addItem, deleteItem,resetItems,increaseQuantity,decreaseQuantity} = cartitem.actions;
export default cartitem.reducer;
