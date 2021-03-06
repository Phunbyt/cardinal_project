import React, { useContext } from 'react';
import NumberCard from '../general/NumberCard';
import CompanyCard from '../general/CompanyCard';
import TextArea from '../general/TextArea';
import RelatedRequests from './subcomponents/RelatedRequests';
import BlueButton from '../general/BlueButton';
import SecretaryContext from '../../contexts/secretary/SecretaryContext';
import NotificationModal from './subcomponents/NotificationModal';
import UploadDocument from '../general/UploadDocument';

const OtherRequests = () => {
   const { handleOpen, handleSubmit } = useContext(SecretaryContext);
   return (
      <div className="dashboard_view">
         <div className="dashboard_head">
            <div className="dashboard_header">
               <NumberCard text="Pending Bills" number={7} />
               <NumberCard text="Treated Requests" number={5} />
               <CompanyCard
                  logoUrl="https://www.careersinafrica.com/wp-content/uploads/2012/05/Total_Logo_Horizontal.png"
                  companyName="Total Nigeria"
               />
            </div>
         </div>

         <div className="request_form_content">
            <div className="request_form_content_form">
               <div className="dashboard_requests_header request_form_content_header">
                  <h3>Other Requests</h3>
               </div>
               <form onSubmit={handleSubmit}>
                  <div className="venue_others">
                     <TextArea headerText="Please type your request details here" />

                     <div className="attached_request_document">
                        <p>Attach Files</p>
                        <UploadDocument />
                     </div>
                  </div>

                  <div className="request_form_btn">
                     <BlueButton
                        click={handleOpen}
                        buttonText="SUBMIT REQUEST"
                     />
                  </div>
               </form>
            </div>
            <div className="request_form_content_links">
               <div className="request_links">
                  <RelatedRequests />
               </div>
            </div>
            <NotificationModal />
         </div>
      </div>
   );
};

export default OtherRequests;
