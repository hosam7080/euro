<<<<<<< HEAD
import logo from './logo.svg';
import './App.css';
import Login from './pages/Login'
import RegisterForm from './pages/Register';

function TestApp() {
	return (
		<>
		<Login/>
		<RegisterForm/>
		</>
	);
=======
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Category from "./pages/Category";
import Offers from "./pages/Offers";
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
        <Route component={NotFound} />
      </Switch>
      <Footer></Footer>
    </Router>
  );
>>>>>>> d8cae38e4a42473a4d806c3cbbe054b244d298af
}

export default TestApp;
