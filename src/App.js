import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./router/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
