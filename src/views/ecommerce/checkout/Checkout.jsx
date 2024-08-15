import React from "react";
import Container from "../../../utils/ecommerce/EcomContainer";
import { useDispatch, useSelector } from "react-redux";
import { ImBin } from "react-icons/im";
import AxiosInstance from "../../../axiosInstance";
import { setData } from "../../../hooks/ecommerce/productSlice/cartSlice";
import { FiMinus, FiPlus } from "react-icons/fi";
import CashonDelivery from "../../../assets/ecommerce/cart/delivery.png";
import Mollie from "../../../assets/ecommerce/cart/mollie.png";

const Checkout = () => {
	const dispatch = useDispatch();

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
	const handleMolliePayment = () => {
		AxiosInstance.post("/payment/create-payment", {
			amount: totalPrice.toFixed(2),
			description: `Payment for cart items`,
			redirectUrl: "http://localhost:3000/dashboard",
			webhookUrl: "http://localhost:3001/payment/webhook",
		})
			.then((res) => {
				window.location.href = res.data.paymentUrl;
			})
			.catch((error) => {
				console.error("Mollie payment error:", error);
			});
	};

	return (
		<Container>
			<div className='flex mt-3 gap-5'>
				<div className='flex-1'>
					<div>
						<div className='flex items-center gap-2 '>
							<div className='bg-white border rounded-md hover:border-primary duration-300 py-3 font-medium flex justify-center items-center w-full'>
								<p>Home Delivery</p>
							</div>
							<div className='bg-white border rounded-md hover:border-primary duration-300 py-3 font-medium flex justify-center items-center w-full'>
								<p>Store Pickup</p>
							</div>
						</div>
					</div>
					<div className='mt-10'>
						<div className='px-5 bg-white py-5 rounded-lg'>
							<p className='text-lg font-semibold mb-3'>Payment Options</p>
							<div className='flex gap-4 items-center'>
								<div className='flex items-center border justify-center flex-col py-3 w-full cursor-pointer hover:border-primary duration-300 rounded-md'>
									<img
										className='w-[150px] h-10 object-contain'
										src={CashonDelivery}
										alt='cash-on-delivery'
									/>
									<p className='font-medium'>Cash On Delivery</p>
								</div>
								<div
									onClick={handleMolliePayment}
									className='flex items-center flex-col border justify-center py-3 w-full cursor-pointer hover:border-primary duration-300 rounded-md'>
									<img
										className='w-[150px] h-10 object-contain'
										src={Mollie}
										alt='cash-on-delivery'
									/>
									<p className='font-medium'>Mollie</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='bg-white p-4 rounded-lg'>
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
						<button className='px-3 text-md font-medium py-2 rounded-md cursor-pointer hover:bg-hover duration-300 w-full flex justify-center items-center gap-3 bg-primary text-white'>
							<p>Check out</p>
						</button>
					</div>
				</div>
			</div>
		</Container>
	);
};

export default Checkout;
