import React from 'react';

import Card from '@mui/material/Card';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
import SelectionField from './SelectionField';
import CardContent from '@mui/material/CardContent';
import BlueButton from '../../general/BlueButton';


const PaymentType = () => (
   <Card>
      <CardContent>
         <form>
            <div className="payment_type_div">
               <FormLabel component="legend">Select Payment Type:</FormLabel>
               <RadioGroup
                  defaultValue="fullPayment"
                  name="radio-buttons-group"
               >
                  <FormControlLabel
                     value="fullPayment"
                     control={<Radio />}
                     label="Full Payment"
                  />
                  <FormControlLabel
                     value="partPayment"
                     control={<Radio />}
                     label="Part Payment"
                  />
               </RadioGroup>
            </div>

            <div className="amount_entry">
               <p>Enter Amount: </p>
               <div className="amount_entry_field">
                  <p>NGN</p>
                  <TextField
                     inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                     variant="outlined"
                  />
               </div>
            </div>

            <div className="amount_entry">
               <p>Choose Payment Method: </p>
               <div className="amount_entry_field">
                  <SelectionField
                     placeholder="None Selected"
                     items={[
                        'Pay with Transfer',
                        'Pay with Card',
                        'Pay Online ',
                     ]}
                  />
               </div>
            </div>
            <div className="payment_type_paybtn">
               <BlueButton buttonText="PAY" />
            </div>
         </form>
      </CardContent>
   </Card>
);

export default PaymentType;
