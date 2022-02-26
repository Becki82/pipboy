import React,{useState,useEffect} from "react"
import './quotegenerator.css';

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
        <div className="wrapper"> 
        <div className="quoteContainer">
            <div className="quote">
                <h2 className="quote-text">{quote}</h2>
                <h3 className="quote-author">-{author}</h3>
            </div>
            <button className="btn" onClick={fetchNewQuote}>New Quote</button>
        </div>
        </div>
    );
}

export default RandomQuote;