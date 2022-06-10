
// Using css scoped for each component
import styles from "./App.module.css"

import { Card } from './components/card/Card';
import {Form} from "./components/form/Form"
import { useState } from 'react';
import {UserRecord} from './components/userRecord/UserRecord';
import {PopUp} from './components/popUp/PopUp';

function App() {
  // Simulating a database where users are stored
  const usersDB = [];

  const [users,setUsers] = useState(usersDB)
  const [isValid,setIsValid]=useState(true)

  //Functions that are being invoked in child components to modify the state

  function addUser(user) {
   setUsers (prevState => [user, ...prevState])
  }

  function delUser(id){
    setUsers(prevState => prevState.filter(user => user.id !== id))
  }

  // Checks if the age entered is valid. If false - a warning screen pops-up!
  function modifyIsValid(condition){
    setIsValid(condition)
  }

  return (<div className = {styles.wrapper}>
  <Card>
    <Form manageUsers = {{addUser,modifyIsValid}}></Form>
  </Card>
  <Card>
    {users.map(user => { return <UserRecord onClick = {delUser} user={user} key={user.id}></UserRecord>})}
  </Card>
  <PopUp valid = {isValid} modifyIsValid = {modifyIsValid} title={"Please enter a valid age ( > 0)! "}></PopUp>
  </div>)
}

export default App;
