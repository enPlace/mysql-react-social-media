import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
function App() {
  return (
    <div className="App">
      <Router>
        <Link to="/createpost">Create a New Post</Link>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/createpost">
            <CreatePost></CreatePost>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
