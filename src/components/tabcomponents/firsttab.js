import React from "react";
import { useNavigate } from "react-router-dom";
import './tabs12.css';


const FirstTab = () => {

    let navigate = useNavigate();
    function handleClick(){
      navigate('/home')
    }

  return (
        <>
        <div className="FirstTab">
              <div>
              <legend >Sign In</legend>
              <div >
                <label htmlFor="email-address">Email</label>
                <input
                  type="email"
                  name="email-address"
                  id="email-address"     
                />
              </div>
              <div >
                <label >Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                 
                />
              </div>
            <div className="">
              <input 
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