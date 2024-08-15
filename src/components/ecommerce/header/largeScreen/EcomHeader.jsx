import React from "react";
import InfoHeader from "../miniheader/InfoHeader";
import MainHeader from "./MainHeader";
import MobileHeader from "../mobile/MobileHeader";

const EcomHeader = () => {
	return (
		<div>
			<div className=' hidden md:block'>
				<InfoHeader />
			</div>
			<div className=' hidden md:block'>
				<MainHeader />
			</div>
			<div className='block md:hidden'>
				<MobileHeader />
			</div>
		</div>
	);
};

export default EcomHeader;
