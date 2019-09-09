const api = (store) => (next) => (action) => {
  console.log(action);

  // if action.api.url
  // make the HTTP request to the api!
  // you can find a promise example at: ./05/actions/todosActions.js

  next(action);
};

export default api;
