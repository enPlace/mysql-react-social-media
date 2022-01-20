import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const PostInfo = () => {
  const [post, setPost] = useState({});
  let { id } = useParams();

  useEffect(() => {
    axios.get("http://localhost:3001/posts/byId/" + id).then((res) => {
      setPost(res.data[0]);
    });
  }, [id]);
  return (
    <div className="postPage">
      <div className="leftSide">
        <div className="post" id="individual">
          <div className="title"> {post.title} </div>
          <div className="body">{post.postText}</div>
          <div className="footer">{post.username}</div>
        </div>
      </div>
      <div className="rightSide">Comment Section</div>
    </div>
  );
};

export default PostInfo;
