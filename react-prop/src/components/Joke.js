import React from "react";
export default function Joke(props) {

    return (
        <React.Fragment>
            <div className="joke--container">
                {props.setup && <h3>Setup: {props.setup}</h3>}
                <p>Punchline: {props.punchline}</p>
                <hr />
            </div>
        </React.Fragment>
    )
}