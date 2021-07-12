import React, { useEffect } from 'react';
import ActiveUsersList from './components/ActiveUsersList/ActiveUsersList';
import * as webRTCHandler from '../utils/webRTC/webRTCHandler';
import DirectCall from './components/DirectCall/DirectCall';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import DashboardInformation from './components/DashboardInformation/DashboardInformation';
import { callStates } from '../store/actions/callActions';
import axios from 'axios';
import './Dashboard.css';
import { setTurnServers } from '../utils/webRTC/Turn';
import chaticon from '../resources/chaticon.svg'



const Dashboard = ({ username, activeUser,callState }) => {
  useEffect(() => {
    axios.get('https://vide-server.herokuapp.com/api/get-turn-credentials').then (
      responseData => {
        console.log(responseData);
        setTurnServers(responseData.data.token.iceServers);
         webRTCHandler.getLocalStream();
      }
    ).catch(err => {
      console.log(err);
    })
  }, []);

  const history = useHistory()
  
    
  
    
console.log(activeUser);
  return (
    <div className='dashboard_container background_main_color'>
      <div className='dashboard_left_section'>
        <div className='dashboard_content_container'>
          <DirectCall />
          {callState !== callStates.CALL_IN_PROGRESS && <DashboardInformation username={username} />}
        </div>

        <a href = 'https://connect-chatting-app.netlify.app/'>

          <img className="chatButton" src={chaticon} /> 

        </a>
        
      </div>
      <div className='dashboard_right_section background_secondary_color'>
        <div className='dashboard_active_users_list'>
          <ActiveUsersList />

        </div>
        
      </div>
    </div>
  );
};

const mapStateToProps = ({ call, dashboard }) => ({
  ...call,
  ...dashboard
});

export default connect(mapStateToProps)(Dashboard);
