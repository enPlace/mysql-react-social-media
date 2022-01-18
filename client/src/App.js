import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3001/posts").then((response) => {
      setPosts(response.data);
    });
  }, []);

  return (
    <div className="App">
      {posts.map((post) => {
        console.log(post.title);
        return (
          <div class="post">
            <div class="title">Title:{post.title}</div>
            <div class="body">Content:{post.postText}</div>
            <div class="footer">username:{post.username}</div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
