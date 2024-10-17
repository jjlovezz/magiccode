import React from 'react';
import axios from 'axios';

function Login(props) {
  const login = async (e) => {
    e.preventDefault();
    const username = e.target.elements.username.value;
    const password = e.target.elements.password.value;

    if (!username || !password) {
      alert('Please fill out the form');
    } else {
      try {
        const response = await axios.post('/login', { username, password });
        const token = response.data.token;
        localStorage.setItem('token', token);
        alert('Login successful');
      } catch (err) {
        alert('Error logging in');
      }
    }
  };

  return (
    <div className={props.active ? 'popup' : 'popup hide'} onClick={() => props.setActive(false)}>
      <div className='btnFormBox' onClick={(e) => e.stopPropagation()}>
        <div className='formFree'>Login</div>
        <div className='formClose' onClick={() => props.setActive(false)}>
          <i className='fas fa-times' />
        </div>
        <form onSubmit={login}>
          <input type="text" name='username' placeholder='Username' />
          <input type="password" name='password' placeholder='Password' />
          <button className='smallBtn navBtn' type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;