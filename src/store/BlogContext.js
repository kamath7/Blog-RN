import createDataContext from "./createDataContext";

const blogReducer = (state, action) => {
  switch (action.type) {
    case "ADD_BLOG_POST":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 82718),
          title: action.payload.title,
          content: action.payload.content,
        },
      ];

    case "DELETE_BLOG_POST":
      return state.filter((blog) => blog.id !== action.payload);

    case "EDIT_BLOG_POST":
      return state.map((blog) => {
        return blog.id === action.payload.id ? action.payload : blog;
      });

    default:
      return state;
  }
};
const addBlogPost = (dispatch, callback) => {
  return (title, content, callback) => {
    dispatch({ type: "ADD_BLOG_POST", payload: { title, content } });
    callback();
  };
};
const deleteBlogPost = (dispatch) => {
  return (id) => {
    dispatch({ type: "DELETE_BLOG_POST", payload: id });
  };
};

const editBlogPost = (dispatch) => {
  return (id, title, content) => {
    dispatch({ type: "EDIT_BLOG_POST", payload: { id, title, content } });
  };
};
export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost, editBlogPost },
  [{ title: "Lalle", content: "More Lalle", id: 69 }]
);
