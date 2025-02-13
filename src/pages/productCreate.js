import { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import TextInput from "../components/TextInput";


function ProductCreate() {
	const history = useHistory();
	const [newProduct, setNewProduct] = useState({});
	const [productData, setProductData] = useState({
		title: "",
		description: "",
		category: "",
		price: "",
		stock: "",
		image: "",
	});

	const [errors, setErrors] = useState({
		titleError: null,
		descError: null,
		categoryError: null,
		priceError: null,
		stockError: null,
		imageError: null
	});


	useEffect(() => {
		const loginSession = JSON.parse(localStorage.getItem("loginSession"));
		if (!loginSession || !loginSession.isAdmin) {
			history.push("/login");
			return;
		}
	}, [history]);

	function handleForm(event) {
		const { name, value } = event.target;

		function validateField(name, value) {
			if (name === "title" && value.length < 3) return "This field can't be less than 3 characters";
			if (name === "description" && value.length === 0) return "This field can't be empty";
			if (name === "category" && value.length < 3) return "This field can't be less than 3 characters";
			if (name === "price") {
				if (value.length === 0) return "This field can't be empty";
				if (parseFloat(value) <= 0) return "Value can't be 0 or less";
			}
			if (name === "stock") {
				if (value.length === 0) return "This field can't be empty";
				if (parseInt(value, 10) <= 0) return "Value can't be 0 or less";
			}
			if (name === "image" && value.length === 0) return "This field can't be empty";
			return null;
		}

		setProductData((prevData) => ({
			...prevData,
			[name]: value
		}));

		setErrors((prevErrors) => ({
			...prevErrors,
			[`${name}Error`]: validateField(name, value)
		}));

	}

	let formValid =
		errors.titleError === null &&
		errors.descError === null &&
		errors.categoryError === null &&
		errors.priceError === null &&
		errors.stockError === null &&
		productData.title.length > 0 &&
		productData.description.length > 0 &&
		productData.category.length > 0 &&
		productData.price.length > 0 &&
		productData.stock.length > 0 &&
		productData.image.length > 0;

	function addProduct(event) {
		event.preventDefault();

		const { title, description, category, price, stock, image } = productData;

		axios
			.post("https://salesprogrow.com/products/", {
				title,
				description,
				category,
				price: parseFloat(price),
				stock: parseInt(stock),
				image,
			})
			.then((response) => {
				setNewProduct(response.data);
				history.push("/admin");
			})
			.catch((err) => console.log(err));
	}

	return (
		<div className="container p-5">
			<div className="row">
				<div className="col-6 offset-2">
					<form onSubmit={addProduct}>
						<div className="card mb-4">
							<h5 className="card-header">Add a new product</h5>
							<div className="card-body">
								<TextInput
									handleForm={handleForm}
									label={"Title"} 
									name={"title"} 
									error={errors.titleError} 
									value={productData.title} 
									type={"text"}
									placeholder={"Green Avocado"} 
								/>

								<TextInput
									handleForm={handleForm}
									label={"Description"}
									name={"description"}
									error={errors.descError}
									value={productData.description}
									type={"textArea"}
									placeholder={""}
								/>

								<TextInput
									handleForm={handleForm}
									label={"Cateogry"}
									name={"category"}
									error={errors.categoryError}
									value={productData.category}
									type={"text"}
									placeholder={"Fruits"}
								/>

								<TextInput
									handleForm={handleForm}
									label={"Price"}
									name={"price"}
									error={errors.priceError}
									value={productData.price}
									type={"number"}
									placeholder={"22.5"}
								/>

								<TextInput
									handleForm={handleForm}
									label={"Stock"}
									name={"stock"}
									error={errors.stockError}
									value={productData.stock}
									type={"number"}
									placeholder={"34"}
								/>

								<TextInput
									handleForm={handleForm}
									label={"Image Url"}
									name={"image"}
									error={errors.imageError}
									value={productData.image}
									type={"text"}
								/>

							</div>
							<button 
								type="submit" 
								className="btn btn-success"
								disabled={!formValid}
							>
								Add
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

export default ProductCreate;
