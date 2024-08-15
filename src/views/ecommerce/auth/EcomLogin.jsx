import React, { useState, useEffect } from "react";
import Container from "../../../utils/ecommerce/EcomContainer";
import LoginBanner from "../../../assets/ecommerce/banner/img.jpg";
import Logo from "../../../assets/ecommerce/logo/official_logo.jpg";
import { MdEmail, MdLock, MdPassword } from "react-icons/md";
import { IoMdEye } from "react-icons/io";
import { FaFacebook } from "react-icons/fa6";
import { BsGoogle } from "react-icons/bs";
import AxiosInstance from "../../../axiosInstance";
import { useNavigate } from "react-router";
import { jwtDecode } from "jwt-decode";
import { useDispatch } from "react-redux";
import { userInfo } from "../../../hooks/ecommerce/productSlice/userSlice";

const clientId =
	"86369538027-aknbo7h8q2arvrcbs585qvkra6bk0tg8.apps.googleusercontent.com";

const EcomLogin = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [ShowPassword, setShowPassword] = useState(true);
	const [Data, setData] = useState({
		email: "",
		password: "",
	});

	useEffect(() => {
		const initializeGoogleSignIn = () => {
			if (window.google && window.google.accounts) {
				window.google.accounts.id.initialize({
					client_id: clientId,
					callback: handleGoogleLogin,
				});
				// Make sure the Google Sign-In button is rendered only once
				if (document.getElementById("google-signin-button")) {
					window.google.accounts.id.renderButton(
						document.getElementById("google-signin-button"),
						{ theme: "none", size: "" } // Updated to use 'outline' theme and 'medium' size
					);
				}
			} else {
				console.error("Google API script not loaded.");
			}
		};
		
		// Load Google API script dynamically
		const script = document.createElement("script");
		script.src = "https://accounts.google.com/gsi/client";
		script.async = true;
		script.onload = initializeGoogleSignIn;
		script.onerror = () => console.error("Error loading Google API script.");
		document.body.appendChild(script);
	}, []);

	const handleGoogleLogin = async (response) => {
		const tokenId = response.credential; // This is the JWT token
		try {
			const res = await AxiosInstance.post("/auth/google", {
				accessToken: tokenId,
			});
			if (res.data.token) {
				localStorage.setItem("token", res.data.token);
				getUserinfo();
				navigate("/dashboard");
			}
		} catch (error) {
			console.error("Google login failed:", error);
		}
	};

	const handleData = (e) => {
		const { id, value } = e.target;
		setData((prev) => ({ ...prev, [id]: value }));
	};

	const getUserinfo = () => {
		const token = localStorage.getItem("token");

		if (token) {
			const decodeToken = jwtDecode(token);
			const full_name = decodeToken.full_name;
			const id = decodeToken.id;
			dispatch(userInfo({ id, full_name }));
		}
	};

	const handleSubmit = () => {
		AxiosInstance.post("/auth/login", Data)
			.then((res) => {
				if (res.data.token) {
					localStorage.setItem("token", res.data.token);
					getUserinfo();
					navigate("/dashboard");
				}
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<Container>
			<div className='flex mt-12 mx-auto justify-center items-center'>
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
					<div className='flex justify-center p-7 md:p-5 rounded-r-3xl w-[360px] md:w-auto items-center flex-col bg-white'>
						<div>
							<img
								className='w-auto h-[25px] md:h-[40px] lg:h-[30px] 2xl:h-[40px]'
								src={Logo}
								alt=''
							/>
						</div>
						<div className='text-center mt-4 md:mt-8 lg:mt-4 2xl:mt-8'>
							<p className='text-2xl font-bold'>Welcome Back!</p>
							<p className='text-md font-semibold text-slate-400'>
								Data Impact - Netherland
							</p>
						</div>
						<div className='mt-5 md:mt-10 lg:mt-5 2xl:mt-10 mb-5'>
							<div className='border mt-5 flex items-center rounded-md'>
								<div className='p-3 text-2xl text-slate-400'>
									<MdEmail />
								</div>
								<div>
									<input
										type='text'
										id='email'
										className='w-[280px] md:w-[350px] p-3 focus:outline-none'
										placeholder='Email Address'
										onChange={handleData}
										value={Data.email}
									/>
								</div>
							</div>
						</div>
						<div>
							<div className='border flex items-center rounded-md'>
								<div className='p-3 text-2xl text-slate-400'>
									<MdLock />
								</div>
								<div>
									<input
										type={ShowPassword ? "password" : "text"}
										className='w-[230px] md:w-[300px] p-3 focus:outline-none'
										placeholder='Password'
										onChange={handleData}
										value={Data.password}
										id='password'
									/>
								</div>
								<div
									onClick={() => setShowPassword(!ShowPassword)}
									className='p-3 text-2xl text-slate-400'>
									{ShowPassword ? <IoMdEye /> : <MdPassword />}
								</div>
							</div>
							<div className='mt-1 flex justify-end items-end text-xs hover:font-semibold hover:text-secondary cursor-pointer duration-500'>
								<p>Forget Password ?</p>
							</div>
						</div>
						<div
							onClick={handleSubmit}
							className='w-[320px] h-[40px] mt-10 rounded-lg hover:bg-primary duration-300 active:bg-secondary flex justify-center items-center bg-secondary cursor-pointer'>
							<div className='text-md font-semibold text-white'>
								<p>Login</p>
							</div>
						</div>
						<div className='w-[350px] h-auto mt-6'>
							<hr />
							<p className='text-center p-3 rounded-full relative -top-3 text-slate-400 -right-[165px] bg-white flex justify-center items-center w-4 h-4'>
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
							<div id='google-signin-button'>
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

export default EcomLogin;
