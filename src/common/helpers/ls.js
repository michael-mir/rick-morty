const { APP_PREFIX } = process.env;

export const setToLocalState = (key, state) => {
  localStorage.setItem(`${APP_PREFIX}_${key}`, JSON.stringify(state));
};

export const getFromLocalState = (key) => JSON.parse(localStorage.getItem(`${APP_PREFIX}_${key}`));

export const clearLocalState = (key) => {
  localStorage.removeItem(`${APP_PREFIX}_${key}`);
};
