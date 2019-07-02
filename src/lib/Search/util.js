import { debounce } from '../utils/debounce';

const autoCompleteDebounce = debounce((value, items, callback) => {
    let displayItems = [];
    if (items) {
        const regEx = new RegExp(value, 'i');
        displayItems = items.filter(item => item.search(regEx) >= 0);
    }
    callback(displayItems);
}, 1000);

export {
    autoCompleteDebounce
}