import  React, { useState , useEffect } from 'react'
import styled from 'styled-components';

const P = styled.div `
    display: inline-block;
    margin: 5px;
    padding: 2px;
    font-family: "monofonto", sans-serif;
  
  `;

export const DateTime = () => {

    var [date,setDate] = useState(new Date());
    
    useEffect(() => {
        var timer = setInterval(()=>setDate(new Date()), 1000 )
        return function cleanup() {
            clearInterval(timer)
        }
    
    });

    return(
        <div>
            <P> {date.toLocaleDateString()}</P>
            <P> {date.toLocaleTimeString()}</P>
        </div>
    )
}

export default DateTime;