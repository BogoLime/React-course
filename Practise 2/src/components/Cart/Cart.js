import styles from "./Cart.module.css"
import CartItem from "./CartItem"
import Button from "../UI/Button"
import CartContext from "../../store/cartContext"
import { useContext } from "react"

function Cart (props){
    const CartCtx = useContext(CartContext)

    function onReduceQty (id) {
        CartCtx.removeItem(id)
    }

    function onIncreaseQty (item){
        CartCtx.addItem({...item, qty:1})
    }

    return (<ul className={styles["cart-items"]}>
        {CartCtx.items.map( item => <CartItem 
        name={item.name} 
        price={item.price} 
        qty={item.qty} 
        key={item.id}
        onReduceQty = {onReduceQty.bind(null,item.id)}
        onIncreaseQty = {onIncreaseQty.bind(null,item)}>
        </CartItem>)}
        <li className={styles.total}>
            <p>Total Amount</p>
            <p>$ {CartCtx.totalAmount}</p>
        </li>
        <li className={styles.actions}>
            <Button text="Close" className={styles["button--alt"]} onClick = {() => props.setCartIsShown(false)}></Button>
            <Button className={styles.button} text="Order"></Button>
        </li>
    </ul>)
}

export default Cart