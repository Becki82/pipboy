import React from "react";
import { useNavigate } from "react-router-dom";
import './tabs12.css';
import { FaUserEdit } from "react-icons/fa";
import {RiLockPasswordFill} from 'react-icons/ri';
import {FiMail} from 'react-icons/fi'



const SecondTab = () => {
    let navigate = useNavigate();
    function handleClick(){
      navigate('/home')
    }

  return (
    <>
            <div className="inputbox">
            <label>Name:</label>
            <FaUserEdit className="icon"/>
                  <input className="input1"
                    type="text"
                    name="name"
                    id="name"
                    placeholder='Joe Bloggs'
                    
                  />
                </div>
                <div  className="inputbox">
                  <label >Email:</label>
                  <FiMail className="icon"/>
                  <input className="input1"
                    type="email"
                    name="email-address"
                    id="email-address"
                    placeholder='joe@example.com'
                    
                  />
                </div>
                <div className="inputbox">
                  <label >Password:</label>
                  <RiLockPasswordFill className="icon"/>
                  <input className="input1"
                    type="password"
                    name="password"
                    placeholder='********'
                  />
                  </div>
                  <div className="inputbox">
                  <label >Confirm Password:</label>
                  <RiLockPasswordFill className="icon"/>
                  <input
                   className="input1"
                    type="password"
                    name="password"
                    placeholder='********'
                  
                  />
                </div>
    
              <div className="button">
                <input
                className="btn"
                  onClick={handleClick}
                  type="submit"
                  value="Register"
                />
              </div></>
        
     
)
};
   


export default SecondTab;