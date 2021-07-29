import createDataContext from "./createDataContext";
import JsonServer from "../api/JsonServer";
const blogReducer = (state, action) => {
  switch (action.type) {
    // case "ADD_BLOG_POST":
    //   return [
    //     ...state,
    //     {
    //       id: Math.floor(Math.random() * 82718),
    //       title: action.payload.title,
    //       content: action.payload.content,
    //     },
    //   ];

    case "DELETE_BLOG_POST":
      return state.filter((blog) => blog.id !== action.payload);

    case "EDIT_BLOG_POST":
      return state.map((blog) => {
        return blog.id === action.payload.id ? action.payload : blog;
      });

    case "GET_BLOG_POSTS":
      return action.payload;

    default:
      return state;
  }
};
const getBlogPosts = (dispatch) => {
  return async () => {
    const response = await JsonServer.get("/blogPosts");
    dispatch({ type: "GET_BLOG_POSTS", payload: response.data });
  };
};
const addBlogPost = (dispatch) => {
  return async (title, content, callback) => {
    // dispatch({ type: "ADD_BLOG_POST", payload: { title, content } });
  
    await JsonServer.post('/blogPosts',{title, content})
      if (callback) {
      callback();
    }
  };
};
const deleteBlogPost = (dispatch) => {
  return async (id) => {
    await JsonServer.delete(`/blogPosts/${id}`)
    dispatch({ type: "DELETE_BLOG_POST", payload: id });
  };
};

const editBlogPost = (dispatch) => {
  return (id, title, content, callback) => {
    dispatch({ type: "EDIT_BLOG_POST", payload: { id, title, content } });
    if (callback) {
      callback();
    }
  };
};
export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost, editBlogPost, getBlogPosts },
  []
);
