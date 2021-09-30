import React, { useContext } from 'react';
import { MenuItem, OutlinedInput, Select } from '@mui/material';
import BduContext from '../../../contexts/bdu/BduContext';


const SelectionField = ({ items, placeholder }) => {
   const { handleSelectionChange, selectedItem } =
      useContext(BduContext);
   return (
      <div className="selection_field">

         <Select
            displayEmpty
            fullWidth
            value={selectedItem}
            onChange={handleSelectionChange}
            input={<OutlinedInput />}
            renderValue={(selected) => {
               if (selected.length === 0) {
                  return (
                     <p style={{ margin: 0, color: '#9FA2B4' }}>
                        {placeholder}
                     </p>
                  );
               }

               return selected;
            }}
         >
            {items.map((item) => (
               <MenuItem key={item} value={item}>
                  {item}
               </MenuItem>
            ))}
         </Select>
      </div>
   );
};

export default SelectionField;
