import React from "react";
import { NavLink } from "react-router-dom";
import NumberCard from "../general/NumberCard";
import AddPaymentButtton from "./subcomponents/AddPaymentButtton";
import InvoiceCard from "./subcomponents/InvoiceCard";
import SearchBar from "./subcomponents/SearchBar";


const ViewInvoice = () => (
   <div className="dashboard_view">
      <div className="dashboard_head">
         <div className="fincon_dashboard_header">
            <NumberCard text="Pending Bills" number={7} />
            <NumberCard text="Treated Requests" number={5} />
         </div>
      </div>

      <div className="bdu_dashboard_requests">
         <div className="bdu_searchbar">
            <SearchBar />
         </div>
      </div>
      <div className="view_all_invoice">
         <AddPaymentButtton />
      </div>

      <div className="dashboard_requests">
         <div className="fincon_invoice_nav_links">
            <NavLink to="addnewpayment">
               <h5>Record Payment &gt;&gt;</h5>
            </NavLink>
            <NavLink to="writeoffinvoice">
               <h5>Write off &gt;&gt;</h5>
            </NavLink>
            <NavLink to="creditinvoice">
               <h5>Credit &gt;&gt;</h5>
            </NavLink>
            <NavLink to="discountinvoice">
               <h5>Discount &gt;&gt;</h5>
            </NavLink>
         </div>
      </div>
      <div className="dashboard_requests">
         <InvoiceCard />
      </div>
   </div>
);

export default ViewInvoice;
