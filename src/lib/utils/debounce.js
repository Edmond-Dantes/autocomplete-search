function debounce(callback, delay) {
    let timeoutID;
    return (...args) => {
        clearTimeout(timeoutID);
        timeoutID = setTimeout(() => {
            callback(...args)
        }, delay);
        return () => {
            clearTimeout(timeoutID);
            console.log("cancel");
        }
    }
}

export {
    debounce
};