function debounce(callback, delay) {
    let timeoutID;
    return (...args) => {
        clearTimeout(timeoutID);
        timeoutID = setTimeout(() => {
            callback(...args)
        }, delay);
    }
}

export {
    debounce
};