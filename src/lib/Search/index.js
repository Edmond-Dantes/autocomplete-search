import React, { useState, useEffect } from 'react';
import { autoCompleteDebounce } from './util';
import styles from './index.module.css'
import List from '../List';
import Input from '../Input';

function Search({delay, items, onChange}) {
    const [value, setValue] = useState("");
    const [displayItems, setDisplayItems] = useState([]);
    const [highlightedItem, setHighlightedItem] = useState(null);

    const onDebounce = filteredItems => {
        setDisplayItems(filteredItems);
        if (onChange) onChange(value);
    }

    const valueDidUpdate = () => {
        autoCompleteDebounce(delay, value, items, onDebounce);
        if (!value) {
            setDisplayItems([]);
            setHighlightedItem(null);
            autoCompleteDebounce.cancel();
        }
    }

    useEffect(valueDidUpdate, [value]);
    
    const onInputChange = event => setValue(event.target.value);

    return (
        <div className={styles.container}>
            <input onChange={onInputChange} value={value} />
            <List
                items={displayItems}
                highlightedItem={highlightedItem}
                setHighlightedItem={setHighlightedItem}
            />            
        </div>
    );
}

export default Search;