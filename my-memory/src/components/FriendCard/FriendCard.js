import React from "react";
import "./FriendCard.css";




 
const FriendCard = props => (
  <div className="card">
    <div className="img-container">
    <button> <img alt={props.name} src={props.image} onClick={() => props.handleImageID(props.id)} className="shuffle"/>
    `
    </button>
    </div>
  
    
   
  </div>
);

export default FriendCard;
