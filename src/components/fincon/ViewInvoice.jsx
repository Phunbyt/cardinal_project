import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import NumberCard from "../general/NumberCard";
import TextArea from "../general/TextArea";
import InvoiceCard from "./subcomponents/InvoiceCard";
import SearchBar from "./subcomponents/SearchBar";
import BlueButton from "../general/BlueButton";
import FinconContext from "../../contexts/fincon/FinconContext";

const ViewInvoice = () => {
   const { addInvoiceServices, invoiceServices, removeInvoiceServices } =
      useContext(FinconContext);
   return (
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
            <NavLink to="editunconfirmedinvoice">
               <p style={{ margin: 0 }}>Add Payment</p>
            </NavLink>
         </div>

         <div className="dashboard_requests">
            <div className="fincon_invoice_nav_links">
               <NavLink to="recordpayment">
                  <h5>Record Payment &gt;&gt;</h5>
               </NavLink>
               <NavLink to="writeoffinvoice">
                  <h5>Write off &gt;&gt;</h5>
               </NavLink>
               <NavLink to="invoicecredit">
                  <h5>Credit &gt;&gt;</h5>
               </NavLink>
               <NavLink to="invoicediscount">
                  <h5>Discount &gt;&gt;</h5>
               </NavLink>
            </div>
         </div>
         <div className="dashboard_requests">
            <InvoiceCard />
         </div>
      </div>
   );
};

export default ViewInvoice;
