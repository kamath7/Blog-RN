import React, { createContext, useReducer } from "react";
const BlogContext = createContext();

const blogReducer = (state, action) => {
  switch (action.type) {
    case "ADD_BLOG_POST":
      return [...state, { title: `Blog post ${state.length + 1}` }];

    default:
      return state;
  }
};

export const BlogProvider = ({ children }) => {
  const [state, dispatch] = useReducer(blogReducer, []);

  return <BlogContext.Provider value={{}}>{children}</BlogContext.Provider>;
};

export default BlogContext;
