import React from 'react';
import './LinkCard.css';
import { Link } from 'react-router-dom';

const LinkCard = ({ cardIconSrc, cardLink, cardText }) => (
   <Link className="linkcard" to={cardLink}>
      <div className="card_box">
         <div className="card_icon">
            <div className="card_img">
               <img src={cardIconSrc} alt="card icon" />
            </div>
         </div>
         <div className="card_text_div">
            <p className="card_text">{cardText}</p>
         </div>
      </div>
   </Link>
);

export default LinkCard;
