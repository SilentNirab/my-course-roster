import PropTypes from 'prop-types';
import CartItem from '../CartItem/CartItem';
const Cart = ({cartItem, totalPrice, totalCredit, remainingCredit}) => {
    console.log(totalPrice);
    return (
        <div className="md:w-3/12">
            <div className="bg-white p-4 ">
                <div>
                    <h2 className='text-xl font-bold text-[#2F80ED] py-4'>Credit Hour Remaining {remainingCredit} hr</h2>
                </div>
               <div className='border-y-2 py-5'>
                    <h2 className='text-xl font-bold pb-3'>Course Name</h2>
                    <ul className='list-decimal pl-5 '>
                        {
                        cartItem.map(item =><CartItem
                            key={item.card_id}
                            item={item}
                            ></CartItem>) 
                        }
                    </ul>
               </div>
                <div>
                    <h3 className='py-4 border-b-2 text-md font-medium'>Total Credit Hour :{totalCredit}hr </h3>
                    <h3 className='py-4 text-lg font-bold text-[#1C1B1BCC]'>Total Price :{totalPrice}  USD</h3>
                </div>
            </div>
        </div>
    );
};
Cart.propTypes = {
    cartItem:PropTypes.array,
    totalPrice:PropTypes.number,
    totalCredit:PropTypes.number,
    remainingCredit:PropTypes.array,
};
export default Cart;