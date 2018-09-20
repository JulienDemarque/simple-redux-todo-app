const todoReducer = (state = [], action) => {
  if (action.type === "SAVE_TODO") {
    return [...state, action.todo];
  }
  return state;
};

export default todoReducer;
