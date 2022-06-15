import Header from "./components/Layout/Header";
import MealSection from "./components/Meals/MealSection";
import styles from "./App.module.css"
import { Fragment } from "react/cjs/react.production.min";
import Modal from "./components/UI/Modal";

import {useState} from "react"

import CartProvider from "./store/cartProvider";

function App() {
  // Should the cart menu be visible
  const[cartIsShown, setCartIsShown] = useState(false)

  return (
    <CartProvider>
    { cartIsShown && <Modal setCartIsShown={setCartIsShown}></Modal>}
      <Header title="BogoMeals" setCartIsShown={setCartIsShown}></Header>
      <main>
        <MealSection></MealSection>
      </main>
    </CartProvider >
  );
}

export default App;
