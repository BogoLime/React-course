import styles from "./MealItem.module.css"
import MealForm from "./MealForm"

function MealItem (props){
    return (<li className={styles.meal}>
        <div>
            <h3>{props.name}</h3>
            <li className={styles.description}>{props.description}</li>
            <li className={styles.price}>{`${props.price}`}</li>
        </div>
       <div>
        <MealForm id={props.id} name= {props.name} price={props.price}></MealForm>
       </div>
    </li>)
}

export default MealItem