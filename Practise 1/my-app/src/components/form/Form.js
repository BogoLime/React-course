import styles from "./Form.module.css"
import {useState} from "react"
import { Button } from "../UI/Button"

export function Form (props){
    const [username,setUserName] =useState('')
    const[age,setAge]=useState('')
    

    function usernameHandler(e){
        setUserName(e.target.value)
    }
    function ageHandler(e){
        setAge(e.target.value)
    }
    function addUser(e){
        e.preventDefault()
        if (username.trim().length === 0 || age.trim().length === 0) return
        if(parseInt(age) <= 0){
            props.manageUsers.modifyIsValid(false)
            return
        }
        const id = Math.floor(Math.random() * 150000)
        props.manageUsers.addUser({username,age,id})
        setUserName("")
        setAge("")
    }

    return (<form>
        <label htmlFor="username" >Username</label>
        <input id ="username" value ={username} onChange = {usernameHandler}></input>
        <label htmlFor="age">Age(Years)</label>
        <input id="age" value = {age} onChange = {ageHandler} type="number"></input>
        <Button  onClick= {addUser}> Add User</Button>
    </form>)
}