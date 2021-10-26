import React, { useContext } from 'react';
import { MenuItem, OutlinedInput, Select } from '@mui/material';
import BduContext from '../../../contexts/bdu/BduContext';


const SelectionField = ({
   items,
   placeholder,
   onChangeHandler,
   selectedValue,
}) => {
   const { handleSelectionChange, selectedItem } = useContext(BduContext);

   const selctionChangeHandler = onChangeHandler ?? handleSelectionChange;

   const selectedItemValue = selectedValue ?? selectedItem; 
   return (
      <div className="selection_field">
         <Select
            displayEmpty
            fullWidth
            value={selectedItemValue}
            onChange={selctionChangeHandler}
            input={<OutlinedInput />}
            renderValue={(selected) => {
               if (selected.length === 0) {
                  return (
                     <p style={{ margin: 0, color: "#9FA2B4" }}>
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
