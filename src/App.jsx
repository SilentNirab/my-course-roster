import { useState } from 'react'
import './App.css'
import Cards from './components/Cards/Cards'
import Cart from './components/Cart/Cart'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
const [cartItem, setCartItem] = useState([]);
const [totalPrice, setTotalPrice] = useState(0);
const [totalCredit, setTotalCredit] = useState(0);
const [remainingCredit, setRemainingCredit] = useState(0);

const handelSelects = card =>{

  let credit = card.credit;
  let price = card.price;
  let creditRemaining = 20;

  const isExist = cartItem.find((item) => item.card_id == card.card_id);
  if (isExist) {
   return toast.success('Allreay selected!', {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });
  } else {
    cartItem.forEach((item) => {
      price += item.price;
      credit += item.credit;
    });
  }

  const newCredit = creditRemaining - credit;

  if (credit > 20) {
     toast.warn('Your remaining credit has been low', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
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
    <ToastContainer />
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
