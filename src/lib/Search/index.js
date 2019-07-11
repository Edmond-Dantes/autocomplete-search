import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { autoCompleteDebounce } from './util';
import styles from './index.module.css';
import List from '../List';

function Search({ delay, items, onChange }) {
  const [value, setValue] = useState('');
  const [displayItems, setDisplayItems] = useState([]);
  const [highlightedItem, setHighlightedItem] = useState(null);

  const onDebounce = (filteredItems) => {
    setDisplayItems(filteredItems);
    if (onChange) onChange(value);
  };

  const valueDidUpdate = () => {
    autoCompleteDebounce(delay, value, items, onDebounce);
    if (!value) {
      setDisplayItems([]);
      setHighlightedItem(null);
      autoCompleteDebounce.cancel();
    }
  };

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

Search.defaultProps = {
  delay: 300,
  items: [],
  onChange: () => {},
};

Search.propTypes = {
  delay: PropTypes.number,
  items: PropTypes.arrayOf(PropTypes.string),
  onChange: PropTypes.func,
};

export default Search;
