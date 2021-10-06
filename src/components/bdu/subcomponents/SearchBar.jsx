import React from "react";
import { NavLink } from "react-router-dom";
import { IconButton, Button, TextField } from "@mui/material";
import "./SearchBar.css";
import SearchIcon from "@mui/icons-material/Search";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import SelectionField from "./SelectionField";
import BlueButton from "../../general/BlueButton";

const SearchBar = () => (
   <div className="searchbar">
      <div style={{ display: "flex", alignItems: "center" }}>
         <div className="search_text_field" style={{ flex: 1 }}>
            <TextField
               className="my_custom_textfield"
               InputProps={{
                  startAdornment: (
                     <IconButton>
                        <SearchIcon />
                     </IconButton>
                  ),
                  endAdornment: (
                     <Button variant="contained" startIcon={<FilterAltIcon />}>
                        Filter
                     </Button>
                  ),
               }}
               fullWidth
               placeholder="Search requests"
            />
         </div>
         <div className="reset_btn">
            <Button style={{ color: "#9FA2B4" }} variant="text">
               Reset Search
            </Button>
         </div>
      </div>
      <div className="searchbar_filter_field">
         <div className="search_filter_btn">
            <Button
               style={{ background: "none", color: "#000" }}
               startIcon={<FilterAltIcon />}
            >
               Filter by:
            </Button>
         </div>

         <div className="search_selection_fields">
            <div className="search_selection_field_item">
               <SelectionField
                  placeholder="Type"
                  items={["DATE", "APPLICATION"]}
               />
            </div>
            <div className="search_selection_field_item">
               <SelectionField
                  placeholder="Status"
                  items={[
                     "Paid",
                     "Partialy Paid",
                     "Not Paid",
                     "Awaiting Confirmation",
                  ]}
               />
            </div>
         </div>

         <div className="search_and_add_btns">
            <Button
               style={{ backgroundColor: "#2B2B2B" }}
               variant="contained"
               startIcon={<SearchIcon />}
            >
               Search
            </Button>

            <div className="bdu_add_btn">
               <NavLink
                  style={{ textDecoration: "none" }}
                  to="addnewinvoice"
               >
                  
               <BlueButton buttonText="+ NEW" />
               </NavLink>
            </div>
         </div>
      </div>
   </div>
);

export default SearchBar;
