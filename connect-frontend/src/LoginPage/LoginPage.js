import React, { useState } from 'react';
import { connect } from 'react-redux';
import logo from '../resources/logo.png';
import UsernameInput from './components/UsernameInput';
import { useHistory } from 'react-router-dom';
import SubmitButton from './components/SubmitButton';
import { setUsername } from '../store/actions/dashboardActions';
import { registerNewUser } from '../utils/wssConnection/wssConnection';
import './LoginPage.css'

const LoginPage =  ({ saveUsername }) =>  {

    const [username, setUsername] = useState('');
    const [usernameEmpty, setUsernameEmpty] = useState(false)
    const history = useHistory();
    const handleVideoButtonPressed = () => {
       
        if (username !== "") {
          registerNewUser(username);
          saveUsername(username);
          history.push('/dashboard');
        }
        else {
          setUsernameEmpty(true)
        }
      };
    

    return (
      
        
        
          (
            <div className = 'login-page_container background_main_color'>
    
                <div className = 'login-page_login_box background_secondary_color'>
                  <div className='login-page_logo_container'>
                    <img className='login-page_logo_image' src={logo}  />
                  </div>
                  <div className='login-page_title_container'>
                    
                    <h3>Go ahead and GET TALKING !</h3>
                  </div>
                  <UsernameInput username={username} setUsername={setUsername} />
                  {usernameEmpty && <span className="usernameEmpty">Please provide username</span>}
    
                  <div className="buttons">
                    {/* <SubmitButton text = "Chat" handleSubmitButtonPressed={handleChatButtonPressed} /> */}
                    <SubmitButton text = "Get Started" handleSubmitButtonPressed={handleVideoButtonPressed} />
                  </div>
                </div>
                
            </div>
          )
    )
          }    


const mapActionsToProps = (dispatch) => {
    return {
      saveUsername: username => dispatch(setUsername(username))
    };
  };

export default connect(null, mapActionsToProps)(LoginPage);