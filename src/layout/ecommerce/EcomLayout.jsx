import React from "react";
import EcomFooter from "../../components/ecommerce/footer/EcomFooter";
import { Outlet } from "react-router";
import EcomHeader from "../../components/ecommerce/header/largeScreen/EcomHeader";
import BottomMenu from "../../components/ecommerce/bottomMenu/BottomMenu";

const EcomLayout = () => {
	return (
		<div className='w-full h-full flex flex-col relative min-h-screen'>
			<div className='w-full fixed top-0 z-[999] shadow-md bg-white'>
				<EcomHeader />
			</div>
			<div className='flex-1 mt-[3.3rem] sm:mt-5 2xl:mt-[6.3rem] lg:mt-[6.3rem] md:mt-28 md:mb-10 items-center mb-1 '>
				<Outlet />
			</div>
			<div className='w-full bottom-0'>
				<EcomFooter />
			</div>
			<div className='fixed bottom-0 block md:hidden z-50'>
				<BottomMenu />
			</div>
		</div>
	);
};

export default EcomLayout;
