import { useEffect } from "react";
import { useState } from "react";
import Card from "../Card/Card";
import PropTypes from 'prop-types';

const Cards = ({handelSelects}) => {
    const [cards, setCards] = useState([]);

    useEffect(() =>{
        fetch('course.json')
        .then(res => res.json())
        .then(data => setCards(data))
    },[])
    return (
        <div className="md:w-9/12">
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
            {
                cards.map(card => <Card
                     key={card.card_id} 
                     card ={card}
                     handelSelects={handelSelects}
                     ></Card>)
            }
        </div>
        </div>
    );
};
Cards.propTypes = {
    handelSelects:PropTypes.func
};

export default Cards;