import { Children, useReducer } from "react";
import { PostContext } from "./context";
import { data } from "./data";
import { reducer } from "./reducer";
import P from "prop-types";

export const PostsProvider = ({ children }) => {
  const [postState, postDispatch] = useReducer(reducer, data);
  return (
    <PostContext.Provider value={{ postState, postDispatch }}>
      {Children}
    </PostContext.Provider>
  );
};

PostsProvider.propTypes = {
  children: P.node.isRequired,
};
