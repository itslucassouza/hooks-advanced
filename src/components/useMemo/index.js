import react, { useCallback, useEffect, useMemo } from "react";
import { useState } from "react";

const Post = ({ post }) => {
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

function App() {
  const [posts, setPosts] = useState();
  const [value, setValue] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((response) => setPosts(response));
  }, []);

  return (
    <div>
      <p>
        <input value={value} onChange={(e) => setValue(e.target.value)} />
      </p>
      {
        (useMemo(() =>
          posts.map((post) => {
            return <Post key={post.id} post={post} />;
          })
        ),
        [posts])
      }
    </div>
  );
}
