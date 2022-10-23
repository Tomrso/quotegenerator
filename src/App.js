import React from "react"
import './App.css';
import Card from "./Card"
import "./Card.css"

function App() {
  const [quote, setQuote] = React.useState("Fetching Quote")
  const [newQuote, setNewQuote] = React.useState(false)
  const [color, setColor] = React.useState("")
  const [count, setCount] = React.useState(0)
  
  React.useEffect(function getQuotes() {
    fetch("https://api.quotable.io/random")
      .then(res => res.json())
      .then(data => setQuote({content: data.content, author: data.author}))
  }, [newQuote])

  const colorchoices = ["#2ca7d3", "#26bbd9", "#35ca67", "#f5ad0a", "#ff0013", "#c53a9d", "#9c3fc0"]

  function nextQuote() {
    setNewQuote(prevValue => !prevValue)
    if (count < 7 ) {
      setCount(prevCount => prevCount + 1)
      setColor(colorchoices[count])
    } else {
      setCount(0)
      setColor(colorchoices[count])
    }
    console.log(count)
  }
  return (
    <div className="app-wrapper" style={{background: color}}>
      <Card quote={quote.content} author={quote.author} handleClick={nextQuote} color={color}/>
      <p id="makers-mark">Built By Tomrso</p>
    </div>
  );
}

export default App;
