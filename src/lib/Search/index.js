import React, { useState, useEffect } from 'react';
import { autoCompleteDebounce } from './util';
import styles from './index.module.css'

function Search({items, onChange}) {
    const [value, setValue] = useState("");
    const [displayItems, setDisplayItems] = useState([]);

    const onDebounce = filteredItems => {
        setDisplayItems(filteredItems);
        if (onChange) onChange(value);
    }
    const valueDidUpdate = () => {
        const debounceCancel = autoCompleteDebounce(value, items, onDebounce);
        if (!value) {
            setDisplayItems([]);
            debounceCancel();
        }
    }

    useEffect(valueDidUpdate, [value]);
    
    const onInputChange = event => setValue(event.target.value);
    return (
        <div className={styles.Wrapper} >
            <input onChange={onInputChange} value={value} />
            {displayItems && displayItems.length > 0 && (
                <div className={styles.ListContainer}>
                    <ul className={styles.List}>
                        {displayItems.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default Search;