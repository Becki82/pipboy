import React from "react";
import { useNavigate } from "react-router-dom";
import './tabs12.css';
import {FiMail} from 'react-icons/fi';
import {RiLockPasswordFill} from 'react-icons/ri';



const FirstTab = () => {

    let navigate = useNavigate();
    function handleClick(){
      navigate('/home')
    }

  return (
        <>
        <div className="FirstTab">
              <div>
              <div className="inputbox">
                <label >Email:</label>
                <FiMail className="icon"/>
                <input className="input1"
                  type="email"
                  name="email-address"
                  id="email-address"  
                  placeholder=" Email Address"  
                  required
                />        
              </div>
              <div className="inputbox">
                <label >Password:</label>
                <RiLockPasswordFill className="icon"/>
                <input  className="input1"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="********"
                  required
                 
                />
              </div>
            <div className="button">
              <input className="btn"
                onClick={handleClick}
                type="submit"
                value="Sign in"
              />
            </div>
            </div>
            </div></>
            
         
    )
  };


export default FirstTab;