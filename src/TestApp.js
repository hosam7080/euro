
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Category from "./pages/Category";
import Offers from "./pages/Offers";
import LoginForm from "./pages/Login";
import NotFound from "./pages/notfound";
import Footer from "./components/footer";
function TestApp() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/category/:categoryName" component={Category} />
		
        <Route exact path="/offers" component={Offers} />
		<Route exact path="/login" component={LoginForm} />
        <Route component={NotFound} />
      </Switch>
      <Footer></Footer>
    </Router>
  );

}

export default TestApp;
