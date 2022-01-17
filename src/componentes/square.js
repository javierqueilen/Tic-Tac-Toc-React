import React from "react";

function Square({onClick, value, highlightWinner}) {
    const className="square" + (highlightWinner ? "highlight" : "");
    console.log(value)

    /*let disp = null; 
    if (val) disp = val === "X" ? crossImg : circleImg; */

    return (
    <button className={className} onClick = {onClick}>
        {value}
    </button>
    )
}

export default Square;