import styles from "./UserRecord.module.css"

export function UserRecord(props){
    const deleteUser = () => {props.onClick(props.user.id)}
    return <h2 className={styles.purple} onClick={deleteUser}> {props.user.username}( {props.user.age} years old ) <span className={styles.span}>*click to delete</span></h2>
}