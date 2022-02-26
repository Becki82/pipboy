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
        <div className="quotewrapper">
        <div className="quoteContainer">
        <h2 style={{textDecoration:'underline', margin:'0',padding:'2px'}}> Today's thought of the day is;</h2>
            <div className="quote">
                <p className="quote-text">{quote}</p>
                <br></br>
                <p className="quote-author">-{author}</p>
            </div>
            <button className="btn" onClick={fetchNewQuote}>New Quote</button>
        </div>
        </div>
    );
}

export default RandomQuote;