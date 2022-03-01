import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import {FiMail} from 'react-icons/fi';
import {RiLockPasswordFill} from 'react-icons/ri';

const InputBox= styled.div `
  width: 100%;
  margin-bottom: 5px;

`;



const FirstTab = () => {

    let navigate = useNavigate();
    function handleClick(){
      navigate('/home')
    }

  return (
        <>
        <div className="FirstTab">
              <div>
              <InputBox>
                <label style={{verticalAlign: 'middle'}} for='email' >Email:</label>
                <FiMail className="icon"/>
                <input className="inputStyle"
                  type="email"
                  name="email"
                  id="email"  
                  placeholder=" Email Address"  
                  required
                />        
              </InputBox>
              <InputBox>
                <label style={{verticalAlign: 'middle'}} for='password'>Password:</label>
                <RiLockPasswordFill className="icon"/>
                <input  className="inputStyle"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="********"
                  required
                 
                />
              </InputBox>
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