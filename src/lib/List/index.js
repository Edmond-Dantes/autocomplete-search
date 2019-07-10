import React, { useState, useEffect } from 'react';
import styles from './index.module.css'

function List({items, highlightedItem}) {
  return (
    <div className={styles.container}>
        <ul className={styles.list}>
            {items.map((item, index) => (
                <li
                  key={index}
                  className={highlightedItem === item && styles.highlighted}
                >
                  {item}
                </li>
            ))}
        </ul>
    </div>
  )
}

function withListContainer(Component) {
  return props => {
    const { items, setHighlightedItem } = props;
    
    if (!items || items.length <= 0) return null;
    
    const subscribe = () => {
        document.addEventListener("keydown", () => {
          
        });
    }

    useEffect(subscribe, []);
    
    const highlightedItem = items[0];
    setHighlightedItem(highlightedItem);

    return (
      	<Component {...props} />
    );
  }
}

export default withListContainer(List);