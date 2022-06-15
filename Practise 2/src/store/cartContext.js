import { createContext } from "react";

// Create context for managing the cart state
export const CartContext = createContext(
    {
    items:[],
    totalAmount:0,
    removeItem: (item)=>{},
    addItem: (id)=>{}
}
);

export default CartContext