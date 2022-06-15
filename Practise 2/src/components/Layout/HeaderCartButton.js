import styles from "./HeaderCartButton.module.css"
import CartIcon from "../Cart/CartIcon"

import CartContext from "../../store/cartContext"
import { useContext } from "react"
import { useState } from "react"
import { useEffect } from "react"



function HeaderCartButton(props){
    const [btnShouldBump, setBtnShouldBump] = useState(false)
    const CartCtx= useContext(CartContext)

    const ItemCount = CartCtx.items.reduce((a,b)=>{
        return a + b.qty
    } ,0)

    const {items} = CartCtx

    useEffect(() => {
        if (items.length === 0) return 
        setBtnShouldBump(true)

        const timer = setTimeout (()=>{
            setBtnShouldBump(false)
        },200)

        return ()=>{
            clearTimeout(timer)
        }
    },[items])

    return (<button className={`${styles.button} ${btnShouldBump ? styles.bump : ""} `} onClick={props.setCartIsShown}>
        <span className={styles.icon}>
            <CartIcon></CartIcon>
        </span>
        <span> Your Cart</span>
        <span className={styles.badge}>
            {ItemCount}
        </span>
    </button>)
}

export default HeaderCartButton