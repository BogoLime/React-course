import styles from "./Header.module.css"
import mealImage from "../../assets/meals.jpg"
import HeaderCartButton from "./HeaderCartButton"
import React from "react"

function Header (props){

    return (<React.Fragment>
                <header className={styles.header}>
                    <h1>{props.title}</h1>
                    <HeaderCartButton setCartIsShown={props.setCartIsShown}></HeaderCartButton>
                </header>
                <div className={styles["main-image"]}>
                    <img src={mealImage} alt="Meal"></img>
                </div>
            </React.Fragment>)
}

export default Header