import React from "react";
import { MdLocalPhone } from "react-icons/md";
import { Link } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { IoMdCheckboxOutline } from "react-icons/io";
import Container from "../../../../utils/ecommerce/EcomContainer";

const InfoHeader = () => {
	return (
		<div className=' bg-primary'>
			<Container>
				<div className='flex justify-between items-center  h-[15px]'>
					<div className='flex gap-5'>
						<div className='flex gap-2 items-center'>
							<div className='p-[3px] bg-secondary text-white text-sm rounded-full'>
								<MdLocalPhone />
							</div>
							<Link to={"tel:+31 0497338061"}>
								<div className='text-white text-sm'>+31 0497338061</div>
							</Link>
						</div>
						<div className='flex gap-3'>
							<div className='flex gap-2 items-center'>
								<div className='p-[3px] bg-secondary text-white text-sm rounded-full'>
									<MdEmail />
								</div>
								<Link to={"mail:info@dataimpact.nl"}>
									<div className='text-white text-sm'>info@dataimpact.nl</div>
								</Link>
							</div>
						</div>
					</div>
					<div className='flex gap-5'>
						<div className='flex gap-2 items-center'>
							<div className='p-[3px] bg-secondary text-white text-sm rounded-full'>
								<TbTruckDelivery />
							</div>
							<Link to={"#"}>
								<div className='text-white text-sm'>Track Order</div>
							</Link>
						</div>
						<div className='flex gap-3'>
							<div className='flex gap-2 items-center'>
								<div className='p-[3px] bg-secondary text-white text-sm rounded-full'>
									<IoMdCheckboxOutline />
								</div>
								<Link to={"#"}>
									<div className='text-white text-sm'>Verify Warranty</div>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default InfoHeader;
