import React from 'react';
// eslint-disable-next-line 
import { setUsername } from '../../store/actions/dashboardActions';

const UsernameInput = (props) => {
  const { username, setUsername } = props;

  return (
    <div className='login-page_input_container'>
      <input required = {true}
        placeholder='Enter your username'
        type='text'
        value={username}
        onChange={(event) => { setUsername(event.target.value); }}
        className='login-page_input background_main_color text_main_color'
      />
    </div>
  );
};

export default UsernameInput;
