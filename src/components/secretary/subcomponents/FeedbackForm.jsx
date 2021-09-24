import React from 'react';
import BlueButton from '../../general/BlueButton';
import FormGroup from '../../general/FormGroup';
import TextArea from '../../general/TextArea';
import './FeedbackForm.css';

const FeedbackForm = () => (
   <div className="feedbackform">
      <div className="feedbackform_header">
         <h4>QUICK FEEDBACK FORM</h4>
      </div>
      <div className="feedbackform_form">
         <form>
            <FormGroup //    onChange={(e) => setFirstName(e.target.value)}
               //    value={firstName}
               headerText="Subject of Feedback"
               placeholder="Give a Subject "
               labelFor="subject"
            />

            <TextArea headerText="Message" placeholder="Write your message" />

            <div className="button_div">
               <BlueButton buttonText="SUBMIT FEEDBACK" bgColor="#4d4e53" />
            </div>
         </form>
      </div>
   </div>
);

export default FeedbackForm;
