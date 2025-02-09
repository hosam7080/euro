


// import React, { useState } from "react";
// import { Form, Button, Container, Card, Alert, InputGroup } from "react-bootstrap";
// import { useHistory } from "react-router-dom";
// import 'bootstrap-icons/font/bootstrap-icons.css';
// import InputField from "../components/InputField";

// const LoginForm = () => {
//   const [passwordVisible, setPasswordVisible] = useState(false);
//   const history = useHistory();
//   const [formValues, setFormValues] = useState({ email: "", password: "" });
//   const [errors, setErrors] = useState({});
//   const [showSnackbar, setShowSnackbar] = useState(false);
//   const [snackbarMessage, setSnackbarMessage] = useState("");
//   const [alertVariant, setAlertVariant] = useState("danger");

//   const regexPatterns = {
//     email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 
//     password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
//   };

//   const validateField = (name, value) => {
//     if (!value) return "This field is required";
//     if (regexPatterns[name] && !regexPatterns[name].test(value)) {
//       return name === "email" ? "Invalid email format" : "password should contain (A, a, 1)";
//     }
//     return "";
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormValues({ ...formValues, [name]: value });
//     setErrors({ ...errors, [name]: validateField(name, value) });
//   };

//   const validate = () => {
//     const tempErrors = {};
//     Object.keys(formValues).forEach((key) => {
//       tempErrors[key] = validateField(key, formValues[key]);
//     });
//     setErrors(tempErrors);
//     return Object.keys(tempErrors).every((key) => !tempErrors[key]);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!validate()) return;

//     const users = JSON.parse(localStorage.getItem("userData")) || [];
//     const user = users.find(
//       (user) => user.email === formValues.email && user.password === formValues.password
//     );

//     if (!user) {
//       setSnackbarMessage("Email or Password doesn't exist!");
//       setAlertVariant("danger");
//       setShowSnackbar(true);
//       return;
//     }

//     localStorage.setItem("loggedInUser", JSON.stringify(user));
//     setSnackbarMessage("Login successful!");
//     setAlertVariant("success");
//     setShowSnackbar(true);

//     setTimeout(() => {
//       history.push("/");
//     }, 2000);
//   };

//   return (
//     <Container className="d-flex flex-column align-items-center py-5">
//       <Card className="shadow p-4" style={{ width: "500px" }}>
//         <h3 className="text-center mb-4">Login</h3>
//         <Form onSubmit={handleSubmit}>
//           <Form.Group className="mb-3" controlId="formEmail">
//             <Form.Label>Email</Form.Label>
//             <InputGroup>
//               <Form.Control
//                 type="email"
//                 name="email"
//                 value={formValues.email}
//                 onChange={handleChange}
//                 isInvalid={Boolean(errors.email)}
//                 isValid={formValues.email && !errors.email}
//               />
//               <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
//             </InputGroup>
//           </Form.Group>

//           <Form.Group className="mb-3" controlId="formPassword">
//             <Form.Label>Password</Form.Label>
//             <InputGroup>
//               <Form.Control
//                 type={passwordVisible ? "text" : "password"}
//                 name="password"
//                 value={formValues.password}
//                 onChange={handleChange}
//                 isInvalid={Boolean(errors.password)}
//                 isValid={formValues.password && !errors.password}
//               />
//               <Button variant="outline-secondary" onClick={() => setPasswordVisible(!passwordVisible)}>
//                 <i className={`bi ${passwordVisible ? "bi-eye-slash" : "bi-eye"}`}></i>
//               </Button>
//               <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
//             </InputGroup>
//           </Form.Group>
//           <Button variant="primary" type="submit" className="w-100 mt-3">
//             Login
//           </Button>
//         </Form>
//         {showSnackbar && <Alert variant={alertVariant} className="mt-3">{snackbarMessage}</Alert>}
//       </Card>
//     </Container>
//   );
// };

// export default LoginForm;

import React, { useState } from "react";
import { Form, Button, Container, Card, Alert } from "react-bootstrap";
import { useHistory, Link } from "react-router-dom";
import 'bootstrap-icons/font/bootstrap-icons.css';
import InputField from "../components/InputField";

const LoginForm = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const history = useHistory();
  const [formValues, setFormValues] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [alertVariant, setAlertVariant] = useState("danger");

  const regexPatterns = {
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
  };

  const validateField = (name, value) => {
    if (!value) return "This field is required";
    if (regexPatterns[name] && !regexPatterns[name].test(value)) {
      return name === "email" ? "Invalid email format" : "password should contain (A, a, 1)";
    }
    return "";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    setErrors({ ...errors, [name]: validateField(name, value) });
  };

  const validate = () => {
    const tempErrors = {};
    Object.keys(formValues).forEach((key) => {
      tempErrors[key] = validateField(key, formValues[key]);
    });
    setErrors(tempErrors);
    return Object.keys(tempErrors).every((key) => !tempErrors[key]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const users = JSON.parse(localStorage.getItem("userData")) || [];
    const user = users.find(
      (user) => user.email === formValues.email && user.password === formValues.password
    );

    if (!user) {
      setSnackbarMessage("Email or Password doesn't exist!");
      setAlertVariant("danger");
      setShowSnackbar(true);
      return;
    }else{

    // localStorage.setItem("loggedInUser", JSON.stringify(user));
    setSnackbarMessage("Login successful!");
    setAlertVariant("success");
    setShowSnackbar(true);
    }
    setTimeout(() => {
      setShowSnackbar(false);
    }, 2000);

    setTimeout(() => {
      history.push("/");
    }, 2000);
  };

  return (



    <Container className="d-flex flex-column align-items-center py-5">
      <Card className="shadow p-4" style={{ width: "500px" }}>
        {showSnackbar && <Alert variant={alertVariant} className="mb-4">{snackbarMessage}</Alert>}
        <h2 className="text-center mb-4 fw-bold fs-3 ">Login</h2>
        <Form onSubmit={handleSubmit}>

          <InputField
            label="Email"
            type="email"
            name="email"
            value={formValues.email}
            onChange={handleChange}
            isInvalid={Boolean(errors.email)}
            feedback={errors.email}
          /><br />

          <InputField
            label="Password"
            type={passwordVisible ? "text" : "password"}
            name="password"
            value={formValues.password}
            onChange={handleChange}
            isInvalid={Boolean(errors.password)}
            feedback={errors.password}
            showPasswordToggle
            onPasswordToggle={() => setPasswordVisible(!passwordVisible)}
          /><br />




          <Button variant="primary" type="submit" className="w-100 mt-3 fw-bold fs-3 ">
            Login
          </Button>

        </Form>
        <div className="mb-3"></div>

        <div className="d-flex align-items-center mb-3">
          <hr className="flex-grow-1" />
          <span className="mx-3">I don't have an account</span>
          <hr className="flex-grow-1" />
        </div>

        <div className="mb-3"></div>
        <div className="mb-3">
          <button className="btn btn-light w-100 border " id="link">
            <a href="sign up.html" className="text-dark w-100 fw-bold  fs-5 text-decoration-none">Create your  account</a>
          </button>
        </div>

        <div className="text-center mt-4" style={{ fontsize: '12px' }}>
          <a href="#" className="text-decoration-none me-3">Conditions of Use</a>
          <a href="#" className="text-decoration-none me-3">Notice of Use</a>
          <a href="#" className="text-decoration-none">Help</a>
          <p className="mt-2 text-muted">© 1996-2024, Ecommerce.com, Inc. or its affiliates</p>
        </div>

      </Card>

    </Container>
  );
};

export default LoginForm;


