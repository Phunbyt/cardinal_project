import React from 'react';
import Button from '@material-ui/core/Button';

const backgroundColor =
   'linear-gradient(103.92deg, #002564 1.19%, #528DC2 100%)';
const BlueButton = ({ buttonText, bgColor = backgroundColor }) => (
   <Button
      type="submit"
      variant="contained"
      style={{
         background: bgColor,
         color: '#ffffff',
         fontWeight: 800,
      }}
   >
      {buttonText}
   </Button>
);

export default BlueButton;
