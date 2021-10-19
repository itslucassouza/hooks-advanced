import { useContext } from "react";
import { PostContext } from "../../Contexts/PostProvider/context";

export const PostsComponent = () => {
  const postContext = useContext(PostContext);
  console.log(postContext);
  return <div>aaaaaaaaa</div>;
};
