import React, { useState } from 'react';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const LoginForm = ({ email, setEmail, password, setPassword, handleLogin }) => {
  const [visible, setVisible] = useState(false);

  return (
    <form id="login-form" className="relative max-w-[75%] w-full h-full flex flex-col justify-center">
      <div className="input-container">
        <label>Email:</label>
        <div id="input-div" className="max-w-full w-full bg-slate-100">
          <input id="email-input" type="email" placeholder="Enter email..." name="email" value={email} onChange={setEmail} required />
        </div>
      </div>

      <div className="input-container relative">
        <label>Password:</label>
        <div id="input-div" className="max-w-full w-full bg-slate-100 flex  ">
          <input id="password-input" type={visible ? 'text' : 'password'} placeholder="Enter password..." name="password" value={password} onChange={setPassword} required />
          <button type="button" id="visible-password-button" className="w-[40px] flex justify-center items-center text-[13px]" onClick={() => setVisible(!visible)}>
            {visible ? <BsEye /> : <BsEyeSlash />}
          </button>
        </div>
      </div>

      <button id="login-button" className="max-w-full w-full bg-black text-white p-4 font-semibold tracking-wide text-[9px]" type="button" onClick={handleLogin}>
        Login
      </button>

      <div className="flex justify-center items-center mt-12 text-[12px]   ">
        <span>
          Don't have account?
          <Link to={'/register'} className="cursor-pointer text-blue-400 pl-2">
            Create account
          </Link>
        </span>
      </div>
    </form>
  );
};

export default LoginForm;
