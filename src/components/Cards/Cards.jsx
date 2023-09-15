import { useEffect } from "react";
import { useState } from "react";
import Card from "../Card/Card";

const Cards = () => {
    const [cards, setCards] = useState([]);

    useEffect(() =>{
        fetch('course.json')
        .then(res => res.json())
        .then(data => setCards(data))
    },[])
    return (
        <div>
            Cards:{cards.length}
            {
                cards.map(card => <Card key={card.card_id} card ={card}></Card>)
            }
        </div>
    );
};


export default Cards;