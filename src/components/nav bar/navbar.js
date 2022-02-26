import React from 'react';
import { useNavigate } from 'react-router-dom';





//Amend to just be sign in / sign out with functionality 
const Navigation = () => {
  let navigate = useNavigate();
  function handleClick(){
    navigate('/')
  }

  return (
    <>
    <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
    <button className="btn" onClick={handleClick}>Log Out</button>
    </nav>
    </>

  ) 
}

export default Navigation;