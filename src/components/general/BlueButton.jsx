import React from 'react';
import Button from '@material-ui/core/Button';

const BlueButton = ({ buttonText }) => (
   <Button
      type="submit"
      variant="contained"
      style={{
         background: 'linear-gradient(103.92deg, #002564 1.19%, #528DC2 100%)',
         color: '#ffffff',
         fontWeight: 800,
      }}
   >
      {buttonText}
   </Button>
);

export default BlueButton;
