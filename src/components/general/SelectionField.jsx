import React, { useContext } from 'react';
import Select from '@material-ui/core/Select';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import MenuItem from '@material-ui/core/MenuItem';
import UserCreationContext from '../../contexts/Authentication/UserCreationContext';

const SelectionField = ({ items, headerText }) => {
   const { handleSelectionChange, selectedItem } =
      useContext(UserCreationContext);
   return (
      <div>
         <h2 className="header_text_thin">{headerText}</h2>
         <Select
            displayEmpty
            fullWidth
            value={selectedItem}
            onChange={handleSelectionChange}
            input={<OutlinedInput />}
            renderValue={(selected) => {
               if (selected.length === 0) {
                  return <em>Select Department</em>;
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
