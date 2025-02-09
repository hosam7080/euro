
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import LoginForm from "./pages/Login";

function TestApp() {
  return (
    <Router>
     
      <Switch>
        
		<Route exact path="/login" component={LoginForm} />
      
      </Switch>
     
    </Router>
  );

}

export default TestApp;
