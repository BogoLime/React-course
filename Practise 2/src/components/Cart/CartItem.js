import styles from "./CartItem.module.css"
import Button from "../UI/Button"
import { Fragment } from "react/cjs/react.production.min"

function CartItem(props){

    return (
    <Fragment>
        <li className={styles["cart-item"]}>
            <div>
                <h2>{props.name}</h2>
                <div className={styles.summary}>
                    <span className={styles.price}>{`${props.price}`}</span>
                    <span className={styles.amount}> {props.qty}</span>
                </div>
            </div>
            <div className={styles.actions}>
                <Button text=" - " onClick = {props.onReduceQty}></Button>
                <Button text="+" onClick = {props.onIncreaseQty}></Button>
            </div>
        </li>
    </Fragment>
    )
}

export default CartItem