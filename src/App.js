import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Navbar from "./components/navbar";
import "./index.css";
import Main from "./components/main";
import Login from "./components/login";
import Register from "./components/register";
import Random from "./components/random";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Switch>
            <Route
              path="/"
              exact
              render={(props) => <Main sortBy="first" {...props} />}
            />
            <Route path="/login" exact component={Login} />
            <Route path="/login/:id" component={Random} />
            <Route path="/register" component={Register} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

/*
Passing the props through the router 
<Route path="/" exact render={() => <Main sortBy="first" />} />


*/
