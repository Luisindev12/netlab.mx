import React, { useState } from "react";
import Logo from "../../../../assets/ecommerce/logo/official_logo.jpg";
import MobileSearchBar from "./MobileSearchBar";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";

const MobileHeader = () => {
	const [IsShow, setIsShow] = useState(false);

	const ShowSearchBar = () => {
		setIsShow(true);
	};
	const HideSearchBar = () => {
		setIsShow(false);
	};
	return (
		<div className=' mx-auto'>
			{IsShow ? (
				<div className='mx-auto px-4 mt-3 ease-in-out duration-300'>
					<MobileSearchBar HideSearchBar={HideSearchBar} />
				</div>
			) : (
				<div className=' flex justify-between items-center px-2 py-2'>
					<div className='w-[120px]'>
						<Link to={"/"}>
							<img src={Logo} alt='' />
						</Link>
					</div>
					<div
						onClick={ShowSearchBar}
						className='text-xl p-2 border duration-200 cursor-pointer rounded-full hover:text-white hover:bg-gray-400'>
						<FiSearch />
					</div>
				</div>
			)}
		</div>
	);
};

export default MobileHeader;
