import "./card.css"

function Card(props) {

    let { personName, price, src } = props;

    return (
        <div className="card-main">
            <h1>{personName}</h1>
            <p>Price: {price}</p>
        </div>
    )
}

export default Card;