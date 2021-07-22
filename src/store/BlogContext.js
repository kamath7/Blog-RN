import React, { createContext } from "react";
const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
    const BlogPosts = [
        {title: 'How to die'},
        {title: 'Being good at eating'}
    ]
  return <BlogContext.Provider value={BlogPosts}>{children}</BlogContext.Provider>;
};

export default BlogContext;
