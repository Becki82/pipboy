import React,{useState,useEffect} from "react"
import styled from "styled-components";
import {FaQuoteLeft} from 'react-icons/fa';


const QuoteWrapper = styled.div `
    display: flex;
    justify-content: center;
  
  .quoteContainer {
    --angle: 0deg;
    width: 40%;
    max-height: 25vh;
    overflow-y: scroll;
    border: 0.2rem solid;
    border-image: linear-gradient(var(--angle), #00e600, #006600, #0d0d0d) 1;
    animation: 5s rotate linear infinite;
    padding: 2px 2px;
    box-shadow: 0 10px 10px 10px rgba(0, 0, 0, 0.2);
  }
  
  @keyframes rotate {
    to {
      --angle: 360deg;
    }
  }
  @property --angle {
    syntax: "<angle>";
    initial-value: 0deg;
    inherits: false;
  }
  
  .quote-text {
    font-size: 1rem;
  }
  .long-quote {
    font-size: 0.5rem;
  }
  
  .quote-author {
    margin-top: 5px;
    font-size: 0.7rem;
    font-weight: 400;
    font-style: italic;
  }`;

function RandomQuote() {
    const [quote, setQuote] = useState("");
    const [author, setAuthor] = useState("");

    useEffect ( () => {
        fetch('https://api.quotable.io/random') 
        .then(res => res.json())
        .then (
        (quote) => {
            setQuote(quote.content);
            setAuthor(quote.author);
            console.log(quote);
        }
    )
    }, []);

    let fetchNewQuote =() => {
        fetch('https://api.quotable.io/random')
        .then(res => res.json())
        .then (
            (quote) => {
                setQuote(quote.content);
                setAuthor(quote.author);
            }
        )
    }


    return (
        <QuoteWrapper>
        <div className="quoteContainer">
        <h2 style={{textDecoration:'underline', margin:'0',padding:'2px'}}> Today's thought of the day is;</h2>
            <div className="quote">
                <p className="quote-text"><FaQuoteLeft style={{padding:'2px'}}/>{quote}</p>
                <br></br>
                <p className="quote-author">-{author}</p>
            </div>
            <button className="btn" onClick={fetchNewQuote}>New Quote</button>
        </div>
        </QuoteWrapper>
    );
}

export default RandomQuote;