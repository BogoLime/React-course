import styles from "./Modal.module.css"
import ReactDom from "react-dom"
import React from "react"
import Cart from "../Cart/Cart"

function Backdrop (props ){

    return (<div onClick= {() => props.setCartIsShown(false)} className={styles.backdrop}>

    </div>)
}

function ModalWindow (props){
    return (<div className={styles.modal}>
        {props.children}
    </div>)
}

const modalsDiv = document.querySelector(".modals") 

function Modal (props){
    return (
        <React.Fragment>
            {ReactDom.createPortal(
                <Backdrop setCartIsShown = {props.setCartIsShown}></Backdrop>,
                modalsDiv
            )}
            {ReactDom.createPortal(
                <ModalWindow>
                    <Cart setCartIsShown = {props.setCartIsShown}></Cart>
                </ModalWindow>,
                modalsDiv
            )}
        </React.Fragment>

    )
}

export default Modal