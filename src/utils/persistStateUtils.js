// Taken from https://codereviewvideos.com/course/react-redux-and-redux-saga-with-symfony-3/video/saving-redux-state-to-local-storage
export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('reduxAppState');

    if (serializedState === null) {
      return undefined;
    }

    return JSON.parse(serializedState);

  } catch (err) {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('reduxAppState', serializedState);
  } catch (err) {
    // die
  }
};
