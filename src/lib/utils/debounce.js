function debounce(callback, delay) {
    let timeoutID;
    const debounced = (...args) => {
        clearTimeout(timeoutID);
        timeoutID = setTimeout(() => {
            callback(...args)
        }, delay);
    }
    debounced.cancel = () => {
        clearTimeout(timeoutID);
        console.log("cancel");
    }

    return debounced;
}

export {
    debounce
};