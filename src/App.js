import "./App.css";
import AdminPanel from "./pages/admin-panel";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ProductsTable from "./pages/productsTable";
import ProductDetails from "./components/ProductDetails";
import Navbar from "./components/navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Category from "./pages/Category";
import Offers from "./pages/Offers";
import NotFound from "./pages/notfound";
import Footer from "./components/footer";
import ShoppingCart from "./pages/shoppingCart";
import LoginForm from "./pages/Login";
import RegisterForm from "./pages/register";
import ProductCreate from "./pages/productCreate";
import ProductUpdate from "./pages/productUpdate";
import { SearchProvider } from "./reducers/searchContext";
import Wishlist from "./pages/wishlist";


function App() {
  return (
    <SearchProvider>
      <BrowserRouter>
        <Navbar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/admin" component={ProductsTable} exact />
          {/* <Route path="/admin/products" component={ProductsTable} exact /> */}
          <Route exact path="/products" component={Products} />
          <Route exact path="/products/create" component={ProductCreate} />
          <Route path="/products/update/:id" component={ProductUpdate} />
          <Route exact path="/products/:id" component={ProductDetails} />
          <Route exact path="/category/:categoryName" component={Category} />
          <Route exact path="/Login" component={LoginForm} />
          <Route exact path="/register" component={RegisterForm} />
          <Route exact path="/cart" component={ShoppingCart} />
          <Route exact path="/wishlist" component={Wishlist} />
          <Route exact path="/offers" component={Offers} />
          <Route component={NotFound} />
        </Switch>

        <Footer />
      </BrowserRouter>
    </SearchProvider>

  );
}

export default App;
