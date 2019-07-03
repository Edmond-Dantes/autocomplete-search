import React from "react";
import ReactDOM from "react-dom";
import Search from './lib/Search';
import { cityNames } from './example/data.js';

const NODE = document.getElementById("root");

ReactDOM.render(
    <Example/>,
    NODE
);

function Example() {
    const items = cityNames;
    return (
        <div style={{textAlign: 'center'}}>
            <h2>Autocomplete Search</h2>
            <h3>Type a US city!</h3>
            <Search
                // controlled
                items={items}
                onChange={value => console.log(value)}
            />
        </div>
    )
}