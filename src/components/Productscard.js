import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Button, Row, Col, Container } from "react-bootstrap";

function ProductsCard() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Our Products</h2>
      <Row className="g-4">
        {products.map((product) => (
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
                <Button variant="primary" className="mt-auto">
                  View Details
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ProductsCard;
