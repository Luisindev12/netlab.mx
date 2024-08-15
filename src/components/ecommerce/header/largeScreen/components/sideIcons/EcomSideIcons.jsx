import React, { useEffect, useState } from "react";
import { GoGitCompare } from "react-icons/go";
import { IoCartOutline } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import AxiosInstance from "../../../../../../axiosInstance";
import { setData } from "../../../../../../hooks/ecommerce/productSlice/cartSlice";
import CartDrawer from "../../../../../../views/ecommerce/cart/drawer/CartDrawer";

const EcomSideIcons = () => {
	const dispatch = useDispatch();
	const [open, setOpen] = useState(false);

	const toggleDrawer = (newOpen) => () => {
		setOpen(newOpen);
	};
	const userName = useSelector((state) => state.userInfo.userName);
	const userId = useSelector((state) => state.userInfo.userId);
	const cartDataView = useSelector((state) => state.cartData.data) || [];
	// const [cartDataView, setcartDataView] = useState({});
	const token = localStorage.getItem("token");

	const handleView = () => {
		if (token) {
			AxiosInstance.get(`/cart/cart/${userId}`)
				.then((res) => {
					dispatch(setData(res.data));
				})
				.catch((error) => {
					console.log(error);
					dispatch(setData({}));
				});
		} else {
			dispatch(setData({}));
		}
	};
	useEffect(() => {
		handleView();
	}, [token, userId]);

	// Calculate indexCount and totalPrice only if cartDataView is an array
	const indexCount = Array.isArray(cartDataView) ? cartDataView.length : 0;

	const totalPrice = Array.isArray(cartDataView)
		? cartDataView.reduce((sum, item) => {
				return sum + item.price * item.quantity;
		  }, 0)
		: 0;

	return (
		<div className='flex gap-3 md:gap-1'>
			<CartDrawer toggleDrawer={toggleDrawer} open={open} setOpen={setOpen} />
			<div className='flex gap-1 items-center duration-200 hover:bg-hover px-2 py-1 rounded-md'>
				<div className='p-2 relative bg-primary text-lg text-white rounded-full duration-200 cursor-pointer hover:bg-secondary'>
					<GoGitCompare />
					<span className='absolute w-5 h-5 -top-2 left-5 bg-secondary text-sm flex justify-center items-center rounded-full'>
						2
					</span>
				</div>
				<div className='block md:hidden lg:hidden xl:block'>
					<p>Compare</p>
				</div>
			</div>
			<div
				onClick={toggleDrawer(true)}
				className='flex gap-3 items-center duration-200 px-2 py-1 rounded-md cursor-pointer'>
				<div className='p-2 relative bg-primary text-lg text-white rounded-full duration-200 cursor-pointer'>
					<IoCartOutline />
					{indexCount !== 0 && (
						<span className='absolute w-5 h-5 -top-2 left-5 bg-secondary text-sm flex justify-center items-center rounded-full'>
							{indexCount}
						</span>
					)}
				</div>
				<div className='block md:hidden lg:hidden xl:block bg-hover px-3 py-1 rounded-md font-semibold'>
					<p>€{totalPrice || 0}</p>
				</div>
			</div>
			<Link to={"/login"}>
				<div className='flex gap-1 items-center duration-200 hover:bg-hover px-2 py-1 rounded-md cursor-pointer'>
					<div className='p-2 bg-primary text-lg text-white rounded-full duration-200  hover:bg-secondary'>
						<FaRegUserCircle />
					</div>
					<div className='block md:hidden lg:hidden xl:block'>
						{userName !== "" ? <p>{userName}</p> : <p>Login/Signup</p>}
					</div>
				</div>
			</Link>
		</div>
	);
};

export default EcomSideIcons;
