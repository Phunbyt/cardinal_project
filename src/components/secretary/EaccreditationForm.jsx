import React, { useContext } from 'react';
import EventAvailableSharpIcon from '@mui/icons-material/EventAvailableSharp';
import AccessTimeSharpIcon from '@mui/icons-material/AccessTimeSharp';
import NumberCard from '../general/NumberCard';
import CompanyCard from '../general/CompanyCard';
import IconTextField from '../general/IconTextField';
import TextArea from '../general/TextArea';
import RelatedRequests from './subcomponents/RelatedRequests';
import SecretaryContext from '../../contexts/secretary/SecretaryContext';

import BlueButton from '../general/BlueButton';
import NotificationModal from './subcomponents/NotificationModal';


const EaccreditationForm = () => {
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
                   <h3>Request E-accreditation and AGM broadcast</h3>
                </div>
                <form onSubmit={handleSubmit}>
                   <div className="venue_others">
                      <TextArea headerText="Write Message" />
                   </div>

                   <div className="emandate_request_details">
                      <div className="agm_time_date">
                         <IconTextField
                            headerText="Volume"
                            fieldIcon={<EventAvailableSharpIcon />}
                            placeholder="Type volume"
                            labelFor="volume"
                         />
                         <IconTextField
                            headerText="Time"
                            fieldIcon={<AccessTimeSharpIcon />}
                            placeholder="Time"
                            labelFor="time"
                         />
                         <IconTextField
                            type="number"
                            headerText="Frequency of broadcast"
                            placeholder="Choose Time"
                            labelFor="frequency"
                         />
                      </div>
                      <IconTextField
                         headerText="Venue"
                         placeholder="Venue"
                         labelFor="venue"
                      />
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
    );};

export default EaccreditationForm;
