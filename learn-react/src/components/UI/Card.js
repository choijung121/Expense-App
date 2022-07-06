import './Card.css';

function Card(propsCard) {
    const classes = 'card ' + propsCard.className; 
    return (
        <div className={classes}>{propsCard.children}</div>
    );
}

export default Card;  