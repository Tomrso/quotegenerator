import { TwitterShareButton, TwitterIcon } from "react-share"

export default function Card(props) {
    return (
    <div id="quote-box">
        <div id="quote">
            <p id="text">"{props.quote}"</p>
            <p id="author">-{props.author}</p>
            <TwitterShareButton 
            id="tweet-button"
            title={`${props.quote} -${props.author}`}
            url="www.google.com">
                <TwitterIcon size={35} round />
            </TwitterShareButton>
        </div>
        <span id="buttonWrapper">
            <button id="new-quote" style={{background: props.color}} onClick={props.handleClick}>New Quote</button>
        </span>
    </div>
    )
}