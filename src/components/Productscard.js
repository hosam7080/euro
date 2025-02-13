import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Card,
  Button,
  Alert,
  Row,
  Col,
  Container,
  Pagination,
  Toast,
  ToastContainer,
  Modal,
  Form,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, ADD_TO_WISHLIST } from "../actions/actions";
import { FaShoppingCart, FaHeart, FaCheck } from "react-icons/fa";
import { useSearch } from "../reducers/searchContext";

function ProductsCard() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [toastMessage, setToastMessage] = useState("");
  const [toastVariant, setToastVariant] = useState("success");
  const [showToast, setShowToast] = useState(false);
  const [username, setUsername] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedPriceRange, setSelectedPriceRange] = useState(null);
  const [confirmationMessage, setConfirmationMessage] = useState(null);
  const productsPerPage = 8;
  const dispatch = useDispatch();
  const { searchTerm } = useSearch();

  const userKey = username || "guest";
  const wishlist = useSelector((state) => state.wishlist[userKey] || []);
  const cart = useSelector((state) => state.cart[username] || []);

  const categories = [
    "All",
    ...new Set(products.map((product) => product.category)),
  ];

  const priceRanges = [
    { label: "Under $25", min: 0, max: 25 },
    { label: "$25 to $50", min: 25, max: 50 },
    { label: "$50 to $100", min: 50, max: 100 },
    { label: "Over $100", min: 100, max: Infinity },
  ];

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;
    //
    const matchesSearchTerm = product.title
      .toLowerCase()
      .startsWith(searchTerm.toLowerCase());
    //
    const matchesPriceRange =
      selectedPriceRange === null ||
      (product.price >= selectedPriceRange.min &&
        product.price <= selectedPriceRange.max);

    return matchesCategory && matchesSearchTerm && matchesPriceRange;
  });

  useEffect(() => {
    axios
      .get("https://salesprogrow.com/products/")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => console.error("Error fetching products:", error));

    const sessionData = localStorage.getItem("loginSession");
    if (sessionData) {
      try {
        const parsedSession = JSON.parse(sessionData);
        setUsername(parsedSession.username);
      } catch (error) {
        console.error("Error parsing login session:", error);
      }
    }
  }, []);

  const showToastNotification = (message, variant = "success") => {
    setToastMessage(message);
    setToastVariant(variant);
    setShowToast(true);

    setTimeout(() => {
      setShowToast(false);
    }, 2000);
  };

  const handleAddToCart = (product) => {
    if (!username) {
      setShowModal(true);
      return;
    }

    const productExists = cart.some((item) => item.id === product.id);

    if (productExists) {
      showToastNotification(
        `${product.title} is already in your cart!`,
        "danger"
      );
    } else {
      dispatch(addToCart(product));
      showToastNotification(`${product.title} added to cart!`, "success");
    }
  };

  const handleAddToWishlist = (product) => {
    const username =
      JSON.parse(localStorage.getItem("loginSession"))?.username || "guest";

    const productExists = wishlist.some((item) => item.id === product.id);

    if (productExists) {
      showToastNotification(
        `${product.title} is already in your wishlist!`,
        "warning"
      );
      return;
    }

    dispatch({
      type: ADD_TO_WISHLIST,
      payload: {
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
      },
    });

    const existingWishlist =
      JSON.parse(localStorage.getItem(`wishlist_${username}`)) || [];
    const updatedWishlist = [...existingWishlist, product];
    localStorage.setItem(
      `wishlist_${username}`,
      JSON.stringify(updatedWishlist)
    );

    showToastNotification(`${product.title} added to wishlist!`, "success");
  };

  const handleCloseModal = () => setShowModal(false);

  // const filteredProducts = products.filter((product) =>
  //   product.title.toLowerCase().includes(searchTerm.toLowerCase())
  // );

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Container className="my-5 mb-5">
      {username && <h3 className="text-center mb-3">Hello, {username}!</h3>}

      <h2 className="text-center mb-4">Our Products</h2>

      <div className="d-flex justify-content-center flex-wrap mb-4">
        {categories.map((category, index) => (
          <Button
            key={index}
            variant={
              selectedCategory === category ? "success" : "outline-success"
            }
            className="me-4 mb-4 fs-5"
            onClick={() => {
              setSelectedCategory(category);
            }}
          >
            {category}
          </Button>
        ))}
      </div>

      <Row>
        <Col md={3}>
          <h5>Filter by Price</h5>
          {priceRanges.map((range, index) => (
            <Form.Check
              key={index}
              type="radio"
              id={`price - range - ${index}`}
              label={range.label}
              className="custom-checkbox"
              name="price-range"
              checked={selectedPriceRange === range}
              onChange={() => setSelectedPriceRange(range)}
            />
          ))}
          <hr />
          <Button
            variant="outline-success"
            className="me-2 mb-2 fs-6"
            onClick={() => setSelectedPriceRange(null)}
          >
            Clear Price Filter
          </Button>
        </Col>
      </Row>

      <Row className="g-4">
        {currentProducts.map((product) => (
          <Col key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Card className="h-100 shadow-sm">
              <Card.Img
                variant="top"
                src={product.image}
                alt={product.title}
                style={{ height: "400px", objectFit: "contain" }}
              />
              <Card.Body className="d-flex flex-column">
                <Card.Title className="text-truncate">
                  {product.title}
                </Card.Title>
                <Card.Text className="text-muted small text-truncate">
                  {product.description}
                </Card.Text>
                <h5 className="text-primary">${product.price}</h5>
                <h6>
                  <span className="badge text-bg-warning w-25 mb-3">
                    {product.stock}
                  </span>{" "}
                  Left in stock
                </h6>
                <div className="d-flex justify-content-between">
                  <Button variant="success" onClick={() => handleAddToCart(product)} disabled={product.stock === 0}>

                    <FaShoppingCart />
                  </Button>
                  <Button
                    variant="outline-danger"
                    onClick={() => handleAddToWishlist(product)}
                  >
                    <FaHeart />
                  </Button>
                </div>
                <Link to={`/products/${product.id}`}>
                  <Button variant="primary" className="mt-2">
                    View Details
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {
        confirmationMessage && (
          <Alert variant="success" className="text-center">
            {confirmationMessage}
          </Alert>
        )
      }

      <Pagination className="justify-content-center py-4">
        <Pagination.Prev onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>

          Previous
        </Pagination.Prev>
        {Array.from({ length: totalPages }, (_, index) => (
          <Pagination.Item
            key={index + 1}
            active={index + 1 === currentPage}
            onClick={() => paginate(index + 1)}
          >
            {index + 1}
          </Pagination.Item>
        ))}
        <Pagination.Next
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </Pagination.Next>
      </Pagination>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Login Required</Modal.Title>
        </Modal.Header>
        <Modal.Body>You need to log in to add items to your cart.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Link to="/login">
            <Button variant="primary">Go to Login</Button>
          </Link>
        </Modal.Footer>
      </Modal>
      <ToastContainer position="bottom-end" className="p-3" style={{ zIndex: 9999 }}>
        <Toast show={showToast} onClose={() => setShowToast(false)} bg={toastVariant} delay={2000} autohide>

          <Toast.Header>
            <strong className="me-auto">
              {toastVariant === "success" ? "Success" : "Warning"}
            </strong>
          </Toast.Header>
          <Toast.Body className="text-white">{toastMessage}</Toast.Body>
        </Toast>
      </ToastContainer>
    </Container>
  );
}

export default ProductsCard;
