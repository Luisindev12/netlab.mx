import React, { useState } from "react";
import Container from "../../../utils/ecommerce/EcomContainer";
import LoginBanner from "../../../assets/ecommerce/banner/img.jpg";
import Logo from "../../../assets/ecommerce/logo/official_logo.jpg";
import { MdEmail, MdLock } from "react-icons/md";
import { FaFacebook } from "react-icons/fa6";
import { BsGoogle } from "react-icons/bs";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

const EcomRegister = () => {
	const [Value, setValue] = useState("");

	console.log(Value);
	return (
		<Container>
			<div className=' flex mt-12 mx-auto justify-center items-center'>
				<div className='flex'>
					<div className='hidden md:block p-7 md:p-5 rounded-l-3xl w-[360px] md:w-auto items-center flex-col bg-white'>
						<div className='h-full w-[350px] bg-red-500'>
							<img
								className='w-full h-full object-cover'
								src={LoginBanner}
								alt=''
							/>
						</div>
					</div>
					<div className='flex justify-center p-7 md:p-5  rounded-r-3xl w-[360px] md:w-auto items-center flex-col bg-white'>
						<div>
							<img
								className='w-auto h-[40px] md:h-[40px] lg:h-[30px] 2xl:h-[40px]'
								src={Logo}
								alt=''
							/>
						</div>
						<div className='text-center mt-8 md:mt-8 lg:mt-4 2xl:mt-8'>
							<p className='text-2xl font-bold'>Signup For Best Deals!</p>
							<p className='text-md font-semibold text-slate-400'>
								Data Impact - Netherland
							</p>
						</div>
						<div className='mt-10 md:mt-10 lg:mt-5 2xl:mt-10 mb-5'>
							<div className='border mt-5 flex items-center rounded-md'>
								<div className='p-3 text-2xl text-slate-400'>
									<MdEmail />
								</div>
								<div>
									<input
										type='text'
										className='w-[320px] md:w-[350px] p-3 focus:outline-none'
										placeholder='Email Address'
									/>
								</div>
							</div>
						</div>

						<div>
							<div className='border flex items-center rounded-md'>
								<div>
									<PhoneInput
										className='w-[320px] md:w-[400px] p-3 focus:outline-none phoneNumber'
										value={Value}
										onChange={setValue}
										defaultCountry='NL'
										international={false}
										placeholder='Phone Number'
									/>
								</div>
							</div>
						</div>
						<div>
							<div className='border flex items-center rounded-md mt-5'>
								<div className='p-3 text-2xl text-slate-400'>
									<MdLock />
								</div>
								<div>
									<input
										type='text'
										className='w-[320px] md:w-[350px] p-3 focus:outline-none'
										placeholder='Password'
									/>
								</div>
							</div>
						</div>
						<div className='w-[350px] h-[40px] mt-10 rounded-lg hover:bg-primary duration-300 active:bg-secondary flex justify-center items-center bg-secondary cursor-pointer'>
							<div className='text-md font-semibold text-white'>
								<p>Register</p>
							</div>
						</div>
						<div className='w-[350px] h-auto mt-6'>
							<hr />
							<p className='text-center p-3  rounded-full relative -top-3 text-slate-400 -right-[165px] bg-white flex justify-center items-center w-4 h-4'>
								Or
							</p>
						</div>
						<div className='flex gap-3 items-center justify-center mb-2'>
							<div className='w-[150px] h-[40px] bg-white shadow-slate-700/20 border rounded-md shadow flex gap-3 items-center px-2 hover:bg-blue-600 hover:text-white scale-100 text-blue-600 hover:scale-105 duration-300 justify-center cursor-pointer'>
								<div className=' '>
									<FaFacebook />
								</div>
								<div className='font-semibold text-sm'>Facebook</div>
							</div>
							<div className='w-[150px] h-[40px] bg-white shadow-slate-700/20 border rounded-md shadow flex gap-3 items-center px-2 hover:bg-rose-600 hover:text-white scale-100 text-rose-600 hover:scale-105 duration-300 justify-center cursor-pointer'>
								<div className=' '>
									<BsGoogle />
								</div>
								<div className='font-semibold text-sm'>Google</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Container>
	);
};

export default EcomRegister;
