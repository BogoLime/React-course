import Card from "../UI/Card";
import MealItem from "./MealItem";
import styles from "./AvailableMeals.module.css"

function AvailableMeals (props){
return (
        <Card className={styles.meals}>
            <ul className={styles.meal}>
            {
                props.mealList.map(meal => <MealItem name={meal.name} description={meal.description} price ={meal.price} key={meal.id} id={meal.id}></MealItem>)
                }
            </ul>
        </Card>
)
}

export default AvailableMeals