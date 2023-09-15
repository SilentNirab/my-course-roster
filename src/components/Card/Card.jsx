
import PropTypes from 'prop-types';

const Card = ({card}) => {
    console.log(card);
    const {image, discription, title, price, credit} = card;
    return (
        <div>
            <img src={image} alt="" />
            <h2>{title}</h2>
        </div>
    );
};

Card.propTypes = {
    card:PropTypes.object,
};

export default Card;