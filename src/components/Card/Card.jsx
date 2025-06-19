import "./Card.css"

export default function Card({leftChild, rightChild}){
    return (
        <div className="card">
            <div className="card_left">{leftChild}</div>
            <div className="card_right">{rightChild}</div>
        </div>
    );
}