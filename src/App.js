import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import Users from "./user/pages/Users";
import Newplace from "./places/pages/NewPlace";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact={true}>
          <Users />
        </Route>
        <Route path="/places/new" exact={true}>
          <Newplace />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
