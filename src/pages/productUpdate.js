import { useEffect, useState } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import TextInput from "../components/TextInput";


function ProductUpdate() {
	const history = useHistory();
	const { id } = useParams(); // Get product ID from the URL
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
		axios
			.get(`https://salesprogrow.com/products/${id}`)
			.then((response) => {
				if (response.data) {
					setProductData(response.data);
				}
			})
			.catch((err) => console.log(err));
	}, [id]);

	function handleForm(event) {
		const { name, value } = event.target;

		function validateField(name, value) {
			if (name === "title" && value.length < 3) return "This field can't be less than 3 characters";
			if (name === "description" && value.length === 0) return "This field can't be empty";
			if (name === "category" && value.length < 3) return "This field can't be less than 3 characters";
			if (name === "price" && value.length === 0) return "This field can't be empty";
			if (name === "stock" && value.length === 0) return "This field can't be empty";
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

	function updateProduct(event) {
		event.preventDefault();

		const { title, description, category, price, stock, image } = productData;

		axios
			.patch(`https://salesprogrow.com/products/${id}`, {
				title,
				description,
				category,
				price: parseFloat(price),
				stock: parseInt(stock),
				image,
			})
			.then(() => {
				history.push("/admin"); // Redirect after successful update
			})
			.catch((err) => console.log(err));
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

	return (
		<div className="row">
			<div className="col-6 offset-2">
				<form onSubmit={updateProduct}>
					<div className="card mb-4">
						<h5 className="card-header">Update Product</h5>
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
								error={errors.price}
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
							// problem button is disabled on start
						>
							Save
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default ProductUpdate;
