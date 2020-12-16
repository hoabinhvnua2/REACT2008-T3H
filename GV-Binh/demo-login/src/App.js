import "./App.css";
import { Switch, Route } from "react-router-dom";
import { Router } from "react-router";
import { LoginPage } from "./LoginPage/LoginPage";
import { RegisterPage } from "./RegisterPage/RegisterPage";
import { LayoutPage } from "./pages/LayoutPage/LayoutPage";
import { AuthorRoute } from "./components/AuthorRoute";
import { history } from "./helper/history";

function App() {
  return (
    <div className="App">
      <Router history={history}>
          <Switch>
            <Route exact path="/login" component={LoginPage} />
            <Route path="/register" component={RegisterPage} />
            <AuthorRoute path="/" component={LayoutPage} />
            {/* <Redirect from="*" to="/login"/> */}
          </Switch>
      </Router>
    </div>
  );
}

export default App;
