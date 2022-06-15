import styles from "./MealForm.module.css"
import Button from "../UI/Button"
import Input from "../UI/Input"

import CartContext from "../../store/cartContext"
import { useContext } from "react"
import { useRef } from "react"
import { useState } from "react"

function MealForm (props){
    const [isValid,setIsValid] = useState(true)
    const CartCtx = useContext(CartContext)
    // Input value
    const inputRef = useRef()

    function addToCartHandler (e){
        e.preventDefault()

        if(inputRef.current.value.trim().length !== 0 
            && +inputRef.current.value > 0 
            && +inputRef.current.value < 6){
                setIsValid(true)
            }else{
                setIsValid(false)
                return
            }

        CartCtx.addItem({
        id:props.id,
        name:props.name,
        qty:+inputRef.current.value,
        price:props.price
    })}

    return (<form className={styles.form}>
        <Input labelText="Amount" input={{ 
            id:"amount"+ `${props.id}`,
            type:"number",
            min:"1",
            max:"5",
            ref:inputRef
        }}></Input>
        <Button text="+ Add" className={styles.button} onClick = {addToCartHandler}></Button>
        {!isValid && <p>Enter a valid amount between 1 and 5</p>}
    </form>)
}

export default MealForm