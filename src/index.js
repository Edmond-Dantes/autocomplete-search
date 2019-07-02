import React, { useState } from "react";
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
        <div>
            <h2>Hello Example</h2>
            <Search
                // controlled
                items={items}
                onChange={value => console.log(value)}
            />
        </div>
    )
}