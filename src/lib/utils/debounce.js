function debounce(callback) {
  let timeoutID;
  const debounced = (delay, ...args) => {
    clearTimeout(timeoutID);
    timeoutID = setTimeout(() => {
      callback(...args);
    }, delay);
  };
  debounced.cancel = () => {
    clearTimeout(timeoutID);
    console.log('cancel');
  };

  return debounced;
}

export {
  debounce,
};
