import CartContext from "./cartContext";
import { useReducer } from "react";

const reducer = (state,action) => {
    if (action.type === "ADD_ITEM"){
        const itemExists = state.items.findIndex((el) => el.id === action.item.id)
        let updatedItems;
        if (itemExists !== -1){
            const item = state.items[itemExists]
            item.qty = item.qty + action.item.qty
            state.items[itemExists] = item
            updatedItems = [...state.items]
        }else{
            updatedItems = state.items.concat(action.item)
        }

        let updatedAmount = state.totalAmount + action.item.qty * action.item.price

        updatedAmount = +updatedAmount.toFixed(2)

        return {
            items: updatedItems,
            totalAmount: updatedAmount
        }
    } else if(action.type === "REMOVE_ITEM" ){
        const itemExists = state.items.findIndex((el) => el.id === action.id)

        if( itemExists === -1 ) return state

        const item = state.items[itemExists]
        let updatedItems;
        let updatedAmount

        if(state.items[itemExists].qty === 1){
            const updatedState = state.items.filter (el => el.id !== item.id)
            updatedItems = [...updatedState]
        }else{
            item.qty -= 1
            state.items[itemExists] = item
            updatedItems = [...state.items]
        }

        updatedAmount = state.totalAmount - item.price
        updatedAmount = +updatedAmount.toFixed(2)
        
        return {
            items: updatedItems,
            totalAmount: updatedAmount
        }
        

    }
}

const initialState = {
    items:[],
    totalAmount:0
}

function CartProvider(props){
    const [cartState, dispatchCartState] = useReducer(reducer,initialState)

    function removeItem(id){
        dispatchCartState({type:"REMOVE_ITEM",id})
    }

    function addItem(item){
        dispatchCartState({type:"ADD_ITEM",item})
    }

    const CartCtx =  {
        items:cartState.items,
        totalAmount:cartState.totalAmount,
        removeItem,
        addItem
    }
    

    return (<CartContext.Provider value={CartCtx}>
                {props.children}
            </CartContext.Provider>)
}

export default CartProvider