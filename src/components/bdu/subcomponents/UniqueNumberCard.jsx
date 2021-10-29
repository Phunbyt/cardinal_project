import React from "react";
import "./UniqueNumberCard.css";
import { NavLink } from "react-router-dom";

const UniqueNumberCard = ({ text, icon, bgColor,path }) => (
      <div style={{ background: bgColor }} className="unique_numbercard">
         <NavLink to={path} style={{ textDecoration: "none", color: "#fff" }}>
            <div className="unique_numbercard_img">
               <img src={icon} alt={icon} />
            </div>
            <p className="unique_numbercard_text">{text}</p>
         </NavLink>
      </div>
   );

export default UniqueNumberCard;
