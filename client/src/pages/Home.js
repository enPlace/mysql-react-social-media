import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const Home = () => {
  const [posts, setPosts] = useState([]);
  let history = useHistory();
  useEffect(() => {
    axios.get("http://localhost:3001/posts").then((response) => {
      setPosts(response.data);
    });
  }, []);

  return (
    <div className="App">
      {posts.map((post) => {
        return (
          <div
            className="post"
            onClick={() => history.push(`/post/${post.id}`)}
          >
            <div className="title">{post.title}</div>
            <div className="body">{post.postText}</div>
            <div className="footer">{post.username}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
