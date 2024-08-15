import React, { useEffect } from "react";
import Drawer from "@mui/material/Drawer";
import { useDispatch, useSelector } from "react-redux";
import { RxCross2 } from "react-icons/rx";
import AxiosInstance from "../../../../axiosInstance";
import { setData } from "../../../../hooks/ecommerce/productSlice/cartSlice";
import NoCartImage from "../../../../assets/ecommerce/cart/no-cart-item.jpg";
import { useNavigate } from "react-router";
const CartDrawer = ({ toggleDrawer, open, setOpen }) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const CartData = useSelector((state) => state.cartData.data);
	const userId = useSelector((state) => state.userInfo.userId);

	const shorterProductTitile = (text, maxLength) => {
		if (text.length <= maxLength) {
			return text;
		}
		return text.substring(0, maxLength) + "...";
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

	const totalPrice = Array.isArray(CartData)
		? CartData.reduce((sum, item) => {
				return sum + item.price * item.quantity;
		  }, 0)
		: 0;

	const handleCheckout = () => {
		setOpen(false);
		navigate("/cart");
	};
	const DrawerList = (
		<div className='w-[350px] px-5 py-3 flex flex-col h-full'>
			<p className='text-[1rem] font-semibold text-center bg-hover py-1 rounded-md text-primary mb-5'>
				Selected Products
			</p>
			{CartData.length <= 0 ? (
				<>
					<div className='flex flex-col justify-center items-center w-auto h-full'>
						<img src={NoCartImage} alt='' />
						<p className='font-medium text-center text-lg text-gray-400'>
							Your shopping bag is empty. Start shopping.
						</p>
					</div>
				</>
			) : (
				<>
					<div className=''>
						{CartData.length > 0 &&
							CartData.map((items, index) => {
								const ProductTitle = shorterProductTitile(
									items.product_name,
									28
								);
								return (
									<div
										key={index}
										className='flex justify-start items-center gap-2 bg-white hover:bg-gray-100 duration-300 cursor-pointer mb-5 rounded-md border p-1 relative'>
										<div>
											<img
												className='w-[60px] h-[60px] object-contain'
												src={items.main_image}
												alt=''
											/>
										</div>
										<div>
											<p className='font-medium duration-300 hover:text-primary cursor-pointer'>
												{ProductTitle}
											</p>
											<div className='flex gap-3'>
												<p className='text-[0.9rem] text-gray-500'>
													<span className='font-medium'>Quantity:</span>{" "}
													{items.quantity}
												</p>
												<p className='text-[0.9rem] text-secondary'>
													<span className='font-medium'>Total Price:</span> €
													{items.quantity * items.price || 0}
												</p>
											</div>
										</div>
										<div
											onClick={() => handleDelete(items.product_id)}
											className='bg-gray-200 w-5 h-5 text-red-500 rounded-full flex justify-center items-center absolute -top-2 -right-2'>
											<RxCross2 />
										</div>
									</div>
								);
							})}
					</div>
				</>
			)}
			<button
				onClick={handleCheckout}
				className='mt-auto px-2 font-normal text-center py-1 bg-secondary text-white rounded-md active:bg-hover duration-300'>
				<p>Cart Now: €{totalPrice || 0}.00</p>
			</button>
		</div>
	);

	console.log(CartData);

	return (
		<div>
			<Drawer anchor='right' open={open} onClose={toggleDrawer(false)}>
				{DrawerList}
			</Drawer>
		</div>
	);
};

export default CartDrawer;
