import axios from 'axios';
import React, { ChangeEventHandler, EventHandler, useEffect, useState } from 'react';
import api from '../utils/api';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleInputUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handleInputPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const onClickLogin = async () => {
    const data = {
      username,
      password,
    };
    console.log(data);

    const res = await api.signUp(data);
    console.log(res)
  };

  return (
    <div className="form-inner">
      <h2>SignUp</h2>
      {/* ERROR! */}
      <div className="form-group">
        <label htmlFor="username">Name</label>
        <input type="text" name="username" id="username" onChange={handleInputUsername} />
      </div>
      <div className="form-group">
        <label htmlFor="password">password</label>
        <input type="password" name="password" id="password" onChange={handleInputPassword} />
      </div>
      <button onClick={onClickLogin}>Login</button>
    </div>
  );
};

export default Signup;
