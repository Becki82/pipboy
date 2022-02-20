import React from "react";
import styled from 'styled-components';
import sun from '../../assets/sun.png';
import moon from '../../assets/greenmoon.png';




let Sun, Moon;

Sun = Moon = styled.img`
position: fixed;
top: 0;
left: 0;
padding: 10px;
height: 5%;
width: auto;
transition: all .5s linear;
cursor: pointer;
`


export const Toggle = ( {theme, toggleTheme}) => {

    return (
        <div onClick={toggleTheme}>
        {theme === 'light' ? <Sun src={sun} alt='sun image'/>: <Moon src={moon} alt='moon image'/> }
        </div>
    )
}