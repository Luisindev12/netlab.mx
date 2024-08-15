import React from "react";
import Container from "../../../utils/ecommerce/EcomContainer";
import FooterLogo from "../../../assets/ecommerce/logo/footer_logo.png";
import { FaFacebook } from "react-icons/fa6";
import { AiFillGoogleCircle } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";

const EcomFooter = () => {
	return (
		<div className='h-auto bg-secondary py-3'>
			<Container>
				<div className='flex items-center justify-center'>
					<div className='px-2'>
						<img className='w-[250px]' src={FooterLogo} alt='' />
					</div>
					
					</div>
				</div>
				<div className='flex items-center justify-center mt-10 gap-4 text-[1.5rem]'>
					<p className='text-blue-500 bg-white rounded-full'>
						<FaFacebook />
					</p>
					<p className='text-red-500 rounded-full bg-white'>
						<AiFillGoogleCircle />
					</p>
					<p className='text-blue-600 rounded-sm bg-white'>
						<FaLinkedin />
					</p>
					<p className='text-red-700 rounded-md bg-white'>
						<GrInstagram />
					</p>
				</div>
				<div className='flex items-center justify-center mt-10 py-2 border-t-[0.03rem]'>
					<p className='text-xs text-white'>
						© Copyright-2024 | Alright reserved by Data Impact
					</p>
				</div>
			</Container>
		</div>
	);
};

export default EcomFooter;
