import React, { useEffect, useState } from "react";
import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import AxiosInstance from "../../../axiosInstance";
import { toast, Bounce } from "react-toastify";
import { setData } from "../../../hooks/ecommerce/productSlice/cartSlice";
import { useParams } from "react-router";

const SingleProductAddtoCart = ({ SingleProductData }) => {
	const Params = useParams();
	const dispatch = useDispatch();
	const userId = useSelector((state) => state.userInfo.userId);
	const [quantity, setQuantity] = useState(1);
	const [FormData, setFormData] = useState({
		product_id: Params.id,
		user_id: userId,
		quantity: quantity,
	});

	const updateFormDataQuantity = (newQuantity) => {
		setFormData((prevFormData) => ({
			...prevFormData,
			quantity: newQuantity,
		}));
	};

	const handleIncrement = () => {
		const newQuantity = quantity + 1;
		setQuantity(newQuantity);
		updateFormDataQuantity(newQuantity);
	};

	const handleDecrement = () => {
		if (quantity > 1) {
			const newQuantity = quantity - 1;
			setQuantity(newQuantity);
			updateFormDataQuantity(newQuantity);
		}
	};

	const handleViewCart = () => {
		AxiosInstance.get(`/cart/cart/${userId}`)
			.then((res) => {
				dispatch(setData(res.data));
			})
			.catch((error) => {
				console.log(error);
			});
	};
	useEffect(() => {
		handleViewCart();
	}, []);
	const handleSubmit = () => {
		AxiosInstance.post("/cart/add-to-cart", FormData)
			.then((res) => {
				toast.success("Product has been added", {
					position: "top-right",
					autoClose: 5000,
					hideProgressBar: true,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: "light",
					transition: Bounce,
				});
				handleViewCart();
			})
			.catch((error) => {
				if (!FormData.user_id) {
					toast.success(`${error.message}`, {
						position: "top-right",
						autoClose: 5000,
						hideProgressBar: true,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
						theme: "light",
						transition: Bounce,
					});
				}
			});
	};

	return (
		<div className='mt-4'>
			<div className='flex items-center justify-start gap-2'>
				<button
					onClick={handleDecrement}
					className='p-2 bg-[#e2e8f0] text-gray-600 rounded-sm cursor-pointer'>
					<FiMinus />
				</button>
				<div>
					<input
						type='text'
						className='border w-[50px] px-2 py-1 focus:outline-none text-center'
						value={quantity}
					/>
				</div>
				<button
					onClick={handleIncrement}
					className='p-2 bg-[#e2e8f0] text-gray-600 rounded-sm cursor-pointer'>
					<FiPlus />
				</button>
				<button
					onClick={handleSubmit}
					className='px-2 py-1 bg-secondary hover:bg-primary text-white font-medium rounded-md mx-2 duration-300'>
					Add to cart
				</button>
			</div>
		</div>
	);
};

export default SingleProductAddtoCart;
