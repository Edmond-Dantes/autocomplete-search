import { debounce } from '../utils/debounce';

const autoCompleteDebounce = debounce((value, items, callback) => {
  let displayItems = [];
  if (items) {
    const regEx = new RegExp(value, 'i');
    displayItems = items
      .filter(item => item.search(regEx) >= 0)
      .sort((a, b) => a.search(regEx) - b.search(regEx));
  }
  callback(displayItems);
});

export {
  autoCompleteDebounce,
};