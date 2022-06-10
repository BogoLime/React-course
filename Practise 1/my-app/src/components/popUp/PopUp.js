
import styles from "./PopUp.module.css"
import { Button } from "../UI/Button"

export function PopUp(props){

    // Switching the state back to valid - which hides the pop-up.
    const hideWindow = () =>{props.modifyIsValid(true)}
    
    return (<div className={`${styles.wrapper } ${ props.valid ? styles.hidden : ""}`}>
        <div className={styles.box}>
            <h3>{props.title}</h3>
            <Button className={styles.button} onClick={hideWindow}>Close</Button>
        </div>
    </div>)
}
