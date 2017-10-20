export default (state = 0, action) => {
  if (action.value) {
    return state + action.value;
  }
  return state;
};
