import React, { useState } from "react";
import Container from "../../../utils/ecommerce/EcomContainer";
import profilePicture from "../../../assets/ecommerce/user/profile-pic.png";
import { VscDashboard } from "react-icons/vsc";
import { RiShoppingBag2Line } from "react-icons/ri";
import { GrDeliver } from "react-icons/gr";
import { FaRegStar } from "react-icons/fa";
import { IoMdLogOut } from "react-icons/io";
import UserDashboard from "./components/UserDashboard";
import { FaRegUserCircle } from "react-icons/fa";
import UserProfile from "./components/UserProfile";
import { useDispatch } from "react-redux";
import { clearUser } from "../../../hooks/ecommerce/productSlice/userSlice";
import { useNavigate } from "react-router";

const EcomDashboard = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [Toggle, setToggle] = useState(1);

	const updateToggle = (id) => {
		setToggle(id);
	};

	const logout = () => {
		dispatch(clearUser());
		localStorage.removeItem("token");
		navigate("/login");
	};

	return (
		<Container>
			<div className='flex gap-5 mx-auto p-5'>
				<div className='flex flex-col justify-center items-center gap-2'>
					<div className='w-[150px] h-[150px] rounded-full object-cover'>
						<img
							className='w-full h-full object-cover'
							src={profilePicture}
							alt=''
						/>
					</div>
					<div className='w-full h-full rounded-sm'>
						<div
							onClick={() => updateToggle(1)}
							className={`mt-2 p-2 px-3 ${
								Toggle === 1 ? "bg-gray-500/40" : "bg-gray-500/10"
							} hover:bg-gray-500/40 duration-500 font-normal flex justify-start gap-3 items-center`}>
							<div className='w-8 h-8 flex items-center  text-gray-500 text-start text-lg justify-center rounded-full bg-white/40'>
								<VscDashboard />
							</div>
							<p className='text-start font-medium text-gray-500'>Dashboard</p>
						</div>
						<div
							onClick={() => updateToggle(2)}
							className={`mt-2 p-2 px-3 ${
								Toggle === 2 ? "bg-gray-500/40" : "bg-gray-500/10"
							} hover:bg-gray-500/40 duration-500 font-normal flex justify-start gap-3 items-center`}>
							<div className='w-8 h-8 flex items-center text-start text-lg text-gray-500 justify-center rounded-full bg-white/40'>
								<FaRegUserCircle />
							</div>
							<p className='text-start font-medium text-gray-500'>
								Manage Profile
							</p>
						</div>
						<div
							onClick={() => updateToggle(3)}
							className={`mt-2 p-2 px-3 ${
								Toggle === 3 ? "bg-gray-500/40" : "bg-gray-500/10"
							} hover:bg-gray-500/40 duration-500 font-normal flex justify-start gap-3 items-center`}>
							<div className='w-8 h-8 flex items-center text-start text-lg text-gray-500 justify-center rounded-full bg-white/40'>
								<RiShoppingBag2Line />
							</div>
							<p className='text-start font-medium text-gray-500'>
								Manage Orders
							</p>
						</div>
						<div
							onClick={() => updateToggle(4)}
							className={`mt-2 p-2 px-3 ${
								Toggle === 4 ? "bg-gray-500/40" : "bg-gray-500/10"
							} hover:bg-gray-500/40 duration-500 font-normal flex justify-start gap-3 items-center`}>
							<div className='w-8 h-8 flex items-center text-gray-500 text-start text-lg justify-center rounded-full bg-white/40'>
								<GrDeliver />
							</div>
							<p className='text-start font-medium text-gray-500'>
								Manage Address
							</p>
						</div>
						<div
							onClick={() => updateToggle(5)}
							className={`mt-2 p-2 px-3 ${
								Toggle === 5 ? "bg-gray-500/40" : "bg-gray-500/10"
							} hover:bg-gray-500/40 duration-500 font-normal flex justify-start gap-3 items-center`}>
							<div className='w-8 h-8 flex items-center text-start text-lg justify-center rounded-full bg-white/40'>
								<FaRegStar />
							</div>
							<p className='text-start font-medium text-gray-500'>My Reviews</p>
						</div>
						<div
							onClick={logout}
							className={`mt-2 p-2 px-3 ${
								Toggle === 6 ? "bg-gray-500/40" : "bg-gray-500/10"
							} hover:bg-gray-500/40 duration-500 font-normal flex justify-start gap-3 items-center cursor-pointer`}>
							<div className='w-8 h-8 flex items-center text-start text-lg justify-center rounded-full bg-white/40'>
								<IoMdLogOut />
							</div>
							<p className='text-start font-medium text-gray-500'>Logout</p>
						</div>
					</div>
				</div>
				<div className='px-5 flex-1'>
					{Toggle === 1 && <UserDashboard />}
					{Toggle === 2 && <UserProfile />}
					{Toggle === 3 && <div>Tab 3</div>}
					{Toggle === 4 && <div>Tab 4</div>}
					{Toggle === 5 && <div>Tab 5</div>}
				</div>
			</div>
		</Container>
	);
};

export default EcomDashboard;
