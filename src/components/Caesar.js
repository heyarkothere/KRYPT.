import React from "react";
import "./Caesar.css"

function Caesar(){


const cae=(e)=>{
    
}
return(
    <div className="caesar">
        <h1>KRYPT</h1>
        <div className="enc">
            <input type="radio" name="todo" id="encode" checked="checked"/>
            <label for="encode">ENCODE</label>
            <input type="radio" name="todo" id="decode"/>
            <label for="decode">DECODE</label>
        </div>

        <input type="text" placeholder="plain text"/>
        <input type="number" placeholder="shift"/>
        <button className="go" onClick={cae}>GO</button>
        <div className="output-box">
        <h2>Output</h2>
        <p id="output-message"></p>
        </div>
        <button className="copy">COPY</button>
    </div>
);
}

export default Caesar