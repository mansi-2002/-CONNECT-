import React from 'react';

import './DashboardInformation.css';

const DashboardInformation = ({ username }) => {
  return (
    <div className='dashboard_info_text_container'>
      <span className='dashboard_info_text_title'>
        Hello {username}, Welcome to <strong>CONNECT</strong> .
      </span>
      <span className='dashboard_info_text_description'>
        You can start a direct video call or chat with the user of your choice.
      </span>
    </div>
  );
};

export default DashboardInformation;
