import PropTypes from 'prop-types';

const CartItem = ({item}) => {
    const {title} = item;
    return (
            <li className='list-decimal'>{title}</li>
    );
};
CartItem.propTypes = {
    item:PropTypes.object
};
export default CartItem;