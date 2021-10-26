import React from "react";

import buyers from "./buyers";
import TopBuyerCard from "./TopBuyerCard";
import "./TopBuyersAndSellers.css";

const TopBuyersAndSellers = () => (
      <div className="top_buyers_and_sellers">
         <TopBuyerCard headerText="Top 10 Buyers" data={buyers} />
         <TopBuyerCard headerText="Top 10 Sellers" data={buyers} />
      </div>
   );

export default TopBuyersAndSellers;
