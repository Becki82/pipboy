import React from "react";
import { useNavigate } from "react-router-dom";
import './tabs12.css';


const SecondTab = () => {
    let navigate = useNavigate();
    function handleClick(){
      navigate('/')
    }

  return (
    <>
            <div>
            <label>Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder='Joe Bloggs'
                    
                  />
                </div>
                <div >
                  <label >Email</label>
                  <input
                    type="email"
                    name="email-address"
                    id="email-address"
                    placeholder='joe@example.com'
                    
                  />
                </div>
                <div >
                  <label >Password</label>
                  <input
                    type="password"
                    name="password"
                    placeholder='********'
                  />
                  </div>
                  <div >
                  <label >Confirm Password</label>
                  <input
                   
                    type="password"
                    name="password"
                    placeholder='********'
                  
                  />
                </div>
    
              <div className="">
                <input
                  onClick={handleClick}
                  type="submit"
                  value="Register"
                />
              </div></>
        
     
)
};
   


export default SecondTab;