import { useState } from 'react'
import './App.css'
import Cards from './components/Cards/Cards'
import Cart from './components/Cart/Cart'

function App() {
const [cartItem, setCartItem] = useState([]);
const [totalPrice, setTotalPrice] = useState(0);
const [totalCredit, setTotalCredit] = useState(0);
const [remainingCredit, setRemainingCredit] = useState(0);

const handelSelects = card =>{

  let credit = card.credit;
  let price = card.price;
  let creditRemaining = 20;

 
  cartItem.forEach((item) => {
    price += item.price;
    credit += item.credit;
  });


  const newCredit = creditRemaining - credit;
  if (credit > 20) {
    alert('credit nai')
  } else {
    setRemainingCredit(newCredit);
    setTotalCredit(credit);
    setTotalPrice(price);
    setCartItem([...cartItem, card]);
  }

}
  return (
    <>
    <h1 className='text-4xl font-bold text-black text-center my-10'>Course Registration</h1>
    <div className='md:flex gap-4'>
    <Cards handelSelects={handelSelects}></Cards>
    <Cart 
    cartItem={cartItem}
    totalPrice={totalPrice}
    totalCredit={totalCredit}
    remainingCredit={remainingCredit}
    ></Cart>
    </div>
    </>
  )
}

export default App
