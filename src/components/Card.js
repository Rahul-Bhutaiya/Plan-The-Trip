import { useState } from "react";

function Card({id,name,info,image,price,removeTourHandler}){

    const [readMoreState,setReadMoreState]=useState(false);

    const description= readMoreState?info:`${info.substring(0,200)}....`;

    return(
        <div className="each-card-container">
            <img src={image} alt={name}></img>
            <div className="tour-description">
                <h2 className="destination-price">₹ {price}</h2>
                <h2 className="destination-name">{name}</h2>
                <h3 className="destination-description">
                    {description}
                    <span className="read-more" onClick={()=>setReadMoreState(!readMoreState)}>{readMoreState?' Show Less':' Read More'}</span>
                </h3>
            </div>
            <button onClick={()=>removeTourHandler(id)}>Not Interested</button>
        </div>
    );
}

export default Card;