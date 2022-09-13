import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./router/Home";
import Detail from "./router/Detail";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/movie:id" element={<Detail />} />
        <Route>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
