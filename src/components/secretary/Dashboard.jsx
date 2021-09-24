import React from 'react';
import CompanyCard from '../general/CompanyCard';
import NumberCard from '../general/NumberCard';
import RequestCard from './subcomponents/RequestCard';
import agmIcon from '../../assets/newagm.png';
import vrsIcon from '../../assets/XMLID_51_vrs.png';
import reportIcon from '../../assets/report.png';
import TableData from './subcomponents/TableData';
import NewsFeed from './subcomponents/NewsFeed';
import MarketChart from './subcomponents/MarketChart';
import GainersCard from './subcomponents/GainersCard';
import FeedbackForm from './subcomponents/FeedbackForm';
import ChatCall from './subcomponents/ChatCall';
import PriceUpdate from './subcomponents/PriceUpdate';

const companyDatas = [
   {
      companyName: 'COCOA',
      companyPrice: 19.19,
      comapanyChange: 9.89,
      companyGain:true,
   },
   {
      companyName: 'NEWGOLD',
      companyPrice: 17.21,
      comapanyChange: 7.32,
      companyGain:true,
   },
   {
      companyName: 'LASACO',
      companyPrice: 9.89,
      comapanyChange: 5.37,
      companyGain:false,
   },
   {
      companyName: 'SVN',
      companyPrice: 8.11,
      comapanyChange: 4.23,
      companyGain:true,
   },
   {
      companyName: 'TRUNK',
      companyPrice: 8.11,
      comapanyChange: 4.23,
      companyGain:false,
   },
];
const Dashboard = () => (
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
         <div className="dashboard_requests_header">
            <h3>New Request</h3>
         </div>
         <div className="dashboard_requests_cards">
            <RequestCard
               linkPath="/agmreport"
               linkText="New AGM"
               linkIcon={agmIcon}
               bgColor="#9FA2B4"
            />
            <RequestCard
               linkPath="/vrsbroadcast"
               linkText="VRS Broadcast"
               linkIcon={vrsIcon}
               bgColor="#528DC2"
            />
            <RequestCard
               linkPath="/monthlyreport"
               linkText="Monthly Report"
               linkIcon={reportIcon}
               bgColor="#002564"
            />
         </div>
      </div>

      <div className="dashboard_requests">
         <div className="dashboard_requests_header">
            <h3>Recent Requests</h3>
         </div>
         <div className="dashboard_requests_cards">
            <div className="dashboard_data">
               <TableData />
               <MarketChart
                  companyName="Total"
                  subText="Total Nigeria Plc"
                  change="₦248.10"
                  subChange="+₦1.29 (4.93%)"
                  price="N80,000"
               />
               <div className="top_gainers_losers">
                  <GainersCard
                     cardTitle="TOP GAINERS"
                     companyData={companyDatas}
                  />
                  <GainersCard
                     cardTitle="TOP LOSERS"
                     companyData={companyDatas}
                     gain={false}
                  />
               </div>

               <div className="get_in_touch">
                  <div className="dashboard_requests_header">
                     <h3>Recent Requests</h3>
                  </div>
                  <ChatCall />
               </div>
            </div>

            <div className="dashboard_news_feedback">
               <NewsFeed />
               <FeedbackForm />
            </div>
         </div>
         <div className="price_update">
                <PriceUpdate data={companyDatas}/>
         </div>
      </div>
   </div>
);

export default Dashboard;
