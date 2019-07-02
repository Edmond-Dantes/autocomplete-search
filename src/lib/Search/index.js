import React, { useState, useEffect } from 'react';
import { autoCompleteDebounce } from './util';

function Search({items, onChange, controlled}) {
    const [value, setValue] = useState("");
    const [displayItems, setDisplayItems] = useState([]);

    const onDebounce = filteredItems => {
        if (!controlled) setDisplayItems(filteredItems);
        if (onChange) onChange(value);
    }
    
    let valueDidUpdate = () => {};
    if (!controlled) {
        valueDidUpdate = () => {
            if (value) { 
                autoCompleteDebounce(value, items, onDebounce);
            } else {
                setDisplayItems([])
            }
        }
    }
        
    useEffect(valueDidUpdate, [value]);
    
    const onInputChange = event => {
        setValue(event.target.value);
    }

    let itemsToShow = controlled ? items : displayItems;

    return (
        <div style={{display: 'inline-block'}}>
            <input onChange={onInputChange} value={value} />
            <ul>
                {itemsToShow && itemsToShow.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default Search;