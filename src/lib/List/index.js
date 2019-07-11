import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.css';

function List({ items, highlightedItem }) {
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {items.map(item => (
          <li
            key={item}
            className={highlightedItem === item && styles.highlighted}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

List.defaultProps = {
  items: [],
  highlightedItem: null,
};

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string),
  highlightedItem: PropTypes.string,
};

function withListContainer(Component) {
  return (props) => {
    // eslint-disable-next-line react/prop-types
    const { items, setHighlightedItem } = props;

    // eslint-disable-next-line react/prop-types
    if (!items || items.length <= 0) return null;

    const subscribe = () => {
      document.addEventListener('keydown', (event) => {
        console.log(event);
      });
    };
    useEffect(subscribe, []);

    const highlightedItem = items[0];
    setHighlightedItem(highlightedItem);

    return (
      <Component {...props} />
    );
  };
}

export default withListContainer(List);
