import React from "react";
import Container from "../../../utils/ecommerce/EcomContainer";
import { useDispatch, useSelector } from "react-redux";
import { ImBin } from "react-icons/im";
import AxiosInstance from "../../../axiosInstance";
import { setData } from "../../../hooks/ecommerce/productSlice/cartSlice";
import { FiMinus, FiPlus } from "react-icons/fi";
import { Divider } from "@mui/material";
import { useNavigate } from "react-router";

const Cart = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const CartData = useSelector((state) => state.cartData.data);
	const userId = useSelector((state) => state.userInfo.userId);

	const handleViewCart = () => {
		AxiosInstance.get(`/cart/cart/${userId}`)
			.then((res) => {
				dispatch(setData(res.data));
			})
			.catch((error) => {
				console.log(error);
			});
	};

	const handleDelete = (product_id) => {
		AxiosInstance.delete(`/cart/cart/${userId}/${product_id}`)
			.then((res) => {
				console.log(res.data);
				handleViewCart();
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const updateQuantity = (product_id, newQuantity) => {
		AxiosInstance.put(`/cart/quantity/${userId}/${product_id}`, {
			quantity: newQuantity,
		})
			.then(() => {
				handleViewCart();
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const handleIncrement = (product_id, quantity) => {
		const newQuantity = quantity + 1;
		updateQuantity(product_id, newQuantity);
	};

	const handleDecrement = (product_id, quantity) => {
		if (quantity > 1) {
			const newQuantity = quantity - 1;
			updateQuantity(product_id, newQuantity);
		}
	};
	const shorterProductTitile = (text, maxLength) => {
		if (text.length <= maxLength) {
			return text;
		}
		return text.substring(0, maxLength) + "...";
	};
	const totalPrice = Array.isArray(CartData)
		? CartData.reduce((sum, item) => {
				return sum + item.price * item.quantity;
		  }, 0)
		: 0;
	const totalQuantity = Array.isArray(CartData)
		? CartData.reduce((sum, item) => {
				return sum + item.quantity;
		  }, 0)
		: 0;

	return (
		<Container>
			<div className='flex mt-3 gap-5'>
				<div>
					<div className='flex-1'>
						{CartData.length > 0 &&
							CartData.map((items, index) => {
								return (
									<div
										key={index}
										className='flex items-center gap-2 bg-white cursor-pointer mb-5 rounded-md border p-1'>
										<div className='flex'>
											<img
												className='w-[60px] h-[60px] object-contain'
												src={items.main_image}
												alt=''
											/>
										</div>
										<div className='flex-1'>
											<p className='font-medium duration-300 hover:text-primary text-md cursor-pointer'>
												{items.product_name}
											</p>
											<div className='flex gap-3 mt-2'>
												<div className='flex items-center justify-center gap-2'>
													<button
														onClick={() =>
															handleDecrement(items.product_id, items.quantity)
														}
														className='p-1 bg-[#e2e8f0] text-gray-600 rounded-sm cursor-pointer'>
														<FiMinus />
													</button>
													<div>
														<input
															type='text'
															className='border w-[50px] px-2  focus:outline-none text-center'
															value={items.quantity}
														/>
													</div>
													<button
														onClick={() =>
															handleIncrement(items.product_id, items.quantity)
														}
														className='p-1 bg-[#e2e8f0] text-gray-600 rounded-sm cursor-pointer'>
														<FiPlus />
													</button>
												</div>
												<p className='text-[1rem] text-primary'>
													<span className='font-medium'>Total Price:</span> €
													{items.quantity * items.price || 0}
												</p>
											</div>
										</div>
										<div className='ml-auto flex items-center'>
											<div
												onClick={() => handleDelete(items.product_id)}
												className='mx-3 text-md text-red-500 rounded-md flex justify-center items-center'>
												<ImBin />
											</div>
										</div>
									</div>
								);
							})}
					</div>
				</div>
				<div className=' bg-white p-4 rounded-lg'>
					<div>
						<div className='mb-5'>
							<div className='flex justify-center items-center text-sm font-medium mb-2'>
								<div className='text-center'>Image</div>
								<div className='flex-1 text-center'>Product Name</div>
								<div>Price</div>
							</div>
							<hr />
						</div>

						{CartData.length > 0 &&
							CartData.map((items, index) => {
								const ProductTitle = shorterProductTitile(
									items.product_name,
									50
								);
								return (
									<div className='flex gap-10 mb-5' key={index}>
										<div>
											<img width={50} src={items.main_image} alt='' />
										</div>
										<div className='flex-1 text-[0.9rem] font-medium'>
											<p>
												{ProductTitle} x{items.quantity}
											</p>
										</div>
										<div> €{items.quantity * items.price || 0}</div>
									</div>
								);
							})}
					</div>
					<hr />
					<div className='flex justify-center items-center text-md mb-10'>
						<div className='text-center'>
							<span className='font-medium'>Total Product:</span>{" "}
							{CartData.length || 0}
						</div>
						<div className='flex-1 text-center'>
							<span className='font-medium'>Total Quantity:</span>{" "}
							{totalQuantity || 0}
						</div>
						<div>
							<span className='font-medium'>Sub Total:</span> €{totalPrice}
						</div>
					</div>
					<div>
						<button
							onClick={() => navigate("/checkout")}
							className='px-3 text-md font-medium py-2 rounded-md cursor-pointer hover:bg-hover duration-300 w-full flex justify-center items-center gap-3 bg-primary text-white'>
							<p>Check out</p>
						</button>
					</div>
				</div>
			</div>
		</Container>
	);
};

export default Cart;
