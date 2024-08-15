import React from "react";
import Logo from "../../../../assets/ecommerce/logo/official_logo.jpg";
import Container from "../../../../utils/ecommerce/EcomContainer";
import EcomSearchbar from "./components/searchbar/EcomSearchbar";
import EcomSideIcons from "./components/sideIcons/EcomSideIcons";
import { Link } from "react-router-dom";
const MainHeader = () => {
	return (
		<div className='h-[76px] py-2'>
			<Container>
				<div className='flex items-center gap-2'>
					<div className='w-[200px]'>
						<Link to={"/"}>
							<img src={Logo} alt='Data Impact' />
						</Link>
					</div>
					<div className='mx-auto'>
						<EcomSearchbar />
					</div>
					<div>
						<EcomSideIcons />
					</div>
				</div>
			</Container>
		</div>
	);
};

export default MainHeader;
