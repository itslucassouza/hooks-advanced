import react, { useCallback, useEffect, useMemo, useRef } from "react";
import { useState } from "react";

const Post = ({ post, handleClick }) => {
  return (
    <div>
      <h1 onClick={() => handleClick(e.target.value)}>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

function App() {
  const [posts, setPosts] = useState();
  const [value, setValue] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((response) => setPosts(response));
  }, []);

  useEffect(() => {
    inputRef.current.focus();
  }, [value]);

  return (
    <div>
      <p>
        <input
          ref={inputRef}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </p>
      {
        (useMemo(() =>
          posts.map((post) => {
            return <Post key={post.id} post={post} handleClick={handleClick} />;
          })
        ),
        [posts])
      }
    </div>
  );
}
