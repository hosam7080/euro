

import React from "react";
import { Form, InputGroup, Button } from "react-bootstrap";
import 'bootstrap-icons/font/bootstrap-icons.css';

const InputField = ({
  label,
  type = "text",
  name,
  value,
  onChange,
  isInvalid,
  feedback,
  showPasswordToggle = false,
  onPasswordToggle,
  className,
  ...props
}) => {
  return (
    <Form.Group controlId={name} className={className}>
      <Form.Label className="mb-1" style={{ fontSize: "0.875rem", fontWeight: "bold" }}>
        {label}
      </Form.Label><br/>
      <InputGroup>
        <Form.Control
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          isInvalid={Boolean(isInvalid)}
          isValid={Boolean(value) && !isInvalid} 
          style={{ height: "38px" }}
          {...props}
        /><br/>
        
        {showPasswordToggle && (
          <Button
            variant="outline-secondary"
            onClick={onPasswordToggle}
            className="input-group-text"
            style={{ borderTopLeftRadius: "0", borderBottomLeftRadius: "0" }}
          >
            <i className={`bi ${type === "password" ? "bi-eye" : "bi-eye-slash"}`}></i>
          </Button>
        )}

       

        <Form.Control.Feedback type="invalid">
          {feedback}
        </Form.Control.Feedback>
      </InputGroup>
    </Form.Group>
  );
};

export default InputField;


