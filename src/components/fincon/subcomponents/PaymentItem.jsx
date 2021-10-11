import React from "react";
import "./PaymentItem.css";

const PaymentItem = ({ headerText, fieldItem }) => (
   <div className="payment_details_item">
      <p style={{ margin: 0 }}>{headerText}</p>
{fieldItem}</div>

);

export default PaymentItem;
