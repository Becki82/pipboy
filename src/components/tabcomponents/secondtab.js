import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FaUserEdit } from "react-icons/fa";
import {RiLockPasswordFill} from 'react-icons/ri';
import {FiMail} from 'react-icons/fi'


const InputBox= styled.div `
  width: 100%;
  margin-bottom: 5px;

`;


const SecondTab = () => {
    let navigate = useNavigate();
    function handleClick(){
      navigate('/home')
    }

  return (
    <>
            <InputBox>
            <label style={{verticalAlign: 'middle'}} for='name'>Name:</label>
            <FaUserEdit className="icon"/>
                  <input className="inputStyle"
                    type="text"
                    name="name"
                    id="name"
                    placeholder='Joe Bloggs'
                    
                  />
                </InputBox>
                <InputBox>
                  <label style={{verticalAlign: 'middle'}} for='email'>Email:</label>
                  <FiMail className="icon"/>
                  <input className="inputStyle"
                    type="email"
                    name="email"
                    id="email"
                    placeholder='joe@example.com'
                    
                  />
                </InputBox>
                <InputBox>
                  <label style={{verticalAlign: 'middle'}} for='password'>Password:</label>
                  <RiLockPasswordFill className="icon"/>
                  <input className="inputStyle"
                    type="password"
                    name="password"
                    id="password"
                    placeholder='********'
                  />
                  </InputBox>
                  <InputBox>
                  <label style={{verticalAlign: 'middle'}} for='confirmpassword'>Confirm Password:</label>
                  <RiLockPasswordFill className="icon"/>
                  <input
                   className="inputStyle"
                    type="password"
                    name="password"
                    id="confirmpassword"
                    placeholder='********'
                  
                  />
                </InputBox>
    
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