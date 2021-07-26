import createDataContext from "./createDataContext";

const blogReducer = (state, action) => {
  switch (action.type) {
    case "ADD_BLOG_POST":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 82718),
          title: action.payload.title,
          content: action.payload.content
        },
      ];

    case "DELETE_BLOG_POST":
      return state.filter((blog) => blog.id !== action.payload);

    default:
      return state;
  }
};
const addBlogPost = (dispatch) => {
  return (title, content) => {
    dispatch({ type: "ADD_BLOG_POST", payload: { title, content } });
  };
};
const deleteBlogPost = (dispatch) => {
  return (id) => {
    dispatch({ type: "DELETE_BLOG_POST", payload: id });
  };
};
export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost },
  []
);
