import React from 'react';
import CompanyCard from '../general/CompanyCard';
import NumberCard from '../general/NumberCard';
import RequestCard from './subcomponents/RequestCard';
import blueAgmIcon from '../../assets/Groupblueagm.png';
import blueEgmIcon from '../../assets/blueegm.png';
import othersIcon from '../../assets/otherswhite.png';
import blueEmandateIcon from '../../assets/emandate.png';
import blueEaccreditationIcon from '../../assets/XMLID_51_eaccre.png';
import ChatCall from './subcomponents/ChatCall';

const Requests = () => (
   <div className="dashboard_view">
      <div className="dashboard_head">
         <div className="dashboard_requests_header">
            <h3>Dashboard</h3>
         </div>
         <div className="dashboard_header">
            <NumberCard text="Pending Bills" number={7} />
            <NumberCard text="Treated Requests" number={5} />
            <CompanyCard
               logoUrl="https://www.careersinafrica.com/wp-content/uploads/2012/05/Total_Logo_Horizontal.png"
               companyName="Total Nigeria"
            />
         </div>
      </div>

      <div className="dashboard_requests">
         <div className="dashboard_requests_header ">
            <h3>General Meeting</h3>
         </div>
         <div className="dashboard_requests_cards request_cards_shrink">
            <RequestCard
               linkPath="agmreport"
               linkText="AGM Notice"
               linkIcon={blueAgmIcon}
               bgColor="#628395"
               subText="Annual General Meeting"
               fontColor="#3568A0"
            />
            <RequestCard
               linkPath="egmreport"
               linkText="EGM Notice"
               linkIcon={blueEgmIcon}
               bgColor="#fbe6c9"
               subText="Extraordinary General Meeting"
               fontColor="#3568A0"
            />
         </div>
      </div>
      <div className="dashboard_requests">
         <div className="dashboard_requests_header ">
            <h3>VRS Broadcast</h3>
         </div>
         <div className="dashboard_requests_cards request_cards_shrink">
            <RequestCard
               linkPath="emandate"
               linkText="E-mandate"
               linkIcon={blueEmandateIcon}
               bgColor="#787A91"
               fontColor="#3568A0"
            />
            <RequestCard
               linkPath="eaccreditation"
               linkText="E-accreditation and AGM"
               linkIcon={blueEaccreditationIcon}
               bgColor="#787A91"
               fontColor="#3568A0"
            />
         </div>
      </div>
      <div className="dashboard_requests">
         <div className="dashboard_requests_header ">
            <h3>Other Requests</h3>
         </div>
         <div className="dashboard_requests_cards request_cards_shrink">
            <RequestCard
               linkPath="otherrequests"
               linkText="Other Requests"
               linkIcon={othersIcon}
               bgColor="#141E61"
               fontColor="#ffffff"
            />
         </div>
      </div>

      <div className="requests_utilities">
         <ChatCall />
      </div>
   </div>
);

export default Requests;
