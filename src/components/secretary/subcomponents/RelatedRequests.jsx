import React from 'react';
import './RelatedRequests.css';
import RelatedLinks from './RelatedLinks';

const RelatedRequests = () => (
   <div className="related_requests">
      <div className="dashboard_requests_header related_requests_header ">
         <h3>Related Requests</h3>
      </div>

      <div className="related_requests_links">
         <RelatedLinks linkPath="agmreport" linkText="Notice of AGM" />
         <RelatedLinks linkPath="egmreport" linkText="Notice of EGM" />
         <RelatedLinks linkPath="vrsbroadcast" linkText="VRS Broadcast" />
         <RelatedLinks linkPath="emandate" linkText="E-mandate Broadcast" />
         <RelatedLinks
            linkPath="eaccreditation"
            linkText="E-accreditation and AGM Broadcast"
         />
      </div>
   </div>
);

export default RelatedRequests;
