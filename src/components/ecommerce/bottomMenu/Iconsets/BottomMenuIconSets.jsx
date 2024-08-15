import React from "react";
import { RiHome6Line } from "react-icons/ri";
import { useLocation } from "react-router";
import { AiOutlineProduct } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { GoGitCompare } from "react-icons/go";
import { FaRegUser } from "react-icons/fa";

const BottomMenuIconSets = () => {
	const location = useLocation();

	const isActive = location.pathname === "/";

	return (
		<div className='grid grid-cols-5 gap-8 text-center items-center justify-center'>
			<div
				className={`flex flex-col justify-center items-center ${
					isActive ? "text-primary font-semibold" : "text-gray-700"
				}  `}>
				<div className='text-xl'>
					<RiHome6Line />
				</div>
				<div className='text-xs'>
					<p>Home</p>
				</div>
			</div>
			<div
				className={`flex flex-col justify-center items-center ${
					isActive ? "text-primary font-semibold" : "text-gray-700"
				}  `}>
				<div className='text-xl'>
					<AiOutlineProduct />
				</div>
				<div className='text-xs'>
					<p>Products</p>
				</div>
			</div>
			<div
				className={`flex flex-col justify-center items-center ${
					isActive ? "text-primary font-semibold" : "text-gray-700"
				}  `}>
				<div className='text-xl'>
					<GoGitCompare />
				</div>
				<div className='text-xs'>
					<p>Compare</p>
				</div>
			</div>
			<div
				className={`flex flex-col justify-center items-center ${
					isActive ? "text-primary font-semibold" : "text-gray-700"
				}  `}>
				<div className='text-xl'>
					<FiShoppingCart />
				</div>
				<div className='text-xs'>
					<p>Cart</p>
				</div>
			</div>
			<div
				className={`flex flex-col justify-center items-center ${
					isActive ? "text-primary font-semibold" : "text-gray-700"
				}  `}>
				<div className='text-xl'>
					<FaRegUser />
				</div>
				<div className='text-xs'>
					<p>Profile</p>
				</div>
			</div>
		</div>
	);
};

export default BottomMenuIconSets;
