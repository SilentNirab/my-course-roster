import { FiDollarSign} from 'react-icons/fi';
import { BsBook } from 'react-icons/bs';
import PropTypes from 'prop-types';

const Card = ({card,handelSelects}) => {
    const {image, description, title, price, credit} = card;
    return (
        <div className='card bg-white p-4 space-y-5'>
            <img src={image} alt="{title}" />
            <h2 className='text-lg font-bold'>{title}</h2>
            <p className=' text-sm font-normal'>{description}</p>
            <div className='flex justify-between text-[#1C1B1B99]'>
                <div className='flex items-center'>
                    <FiDollarSign className='text-2xl mr-2 text-black'></FiDollarSign>
                    <span className='font-semibold'> Price: {price}</span>
                </div>
                <div className='flex items-center'>
                  <BsBook className='text-2xl mr-2 text-black'></BsBook>
                    <span className='font-semibold'>Credit: {credit}hr</span>
                </div>
                
            </div>
            <button onClick={() => handelSelects(card)} className='btn bg-[#2F80ED] text-white text-lg capitalize rounded-lg hover:bg-[#4e84cf]'>Select</button>
        </div>
    );
};

Card.propTypes = {
    card:PropTypes.object,
    handelSelects:PropTypes.func
};

export default Card;