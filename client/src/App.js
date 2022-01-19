import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import PostInfo from "./pages/PostInfo";
function App() {
  return (
    <div className="App">
      <Router>
        <div className="navbar">
          <Link to="/">Home</Link>
          <Link to="/createpost">Create a New Post</Link>
        </div>

        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route exact path="/createpost">
            <CreatePost></CreatePost>
          </Route>

          <Route exact path="/post/:id">
            <PostInfo />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
