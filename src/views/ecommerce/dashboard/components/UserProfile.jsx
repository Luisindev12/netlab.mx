import React, { useEffect, useState } from "react";
import { FiEdit } from "react-icons/fi";
import AxiosInstance from "../../../../axiosInstance";
import { useSelector } from "react-redux";
import { toast, Bounce } from "react-toastify";

const UserProfile = () => {
	const userId = useSelector((state) => state.userInfo.userId);
	const [FormData, setFormData] = useState({
		full_name: "",
		email: "",
		phone_number: "",
	});
	const [ChangePassword, setChangePassword] = useState({
		oldPassword: "",
		newPassword: "",
	});
	const [EditAccountDetails, setEditAccountDetails] = useState(false);
	const [EditSecurity, setEditSecurity] = useState(false);

	const updateUserInfo = (e) => {
		const { id, value } = e.target;
		setFormData((prevFormData) => ({ ...prevFormData, [id]: value }));
	};
	const updatePassword = (e) => {
		const { id, value } = e.target;
		setChangePassword((prevFormData) => ({ ...prevFormData, [id]: value }));
	};

	const viewData = () => {
		AxiosInstance.get(`/auth/user/${userId}`)
			.then((res) => {
				const data = res.data;
				setFormData({
					full_name: data.full_name,
					email: data.email,
					phone_number: data.phone_number,
				});
			})
			.catch((error) => {
				console.log(error);
			});
	};
	useEffect(() => {
		viewData();
	}, []);

	const handleUpdate = () => {
		AxiosInstance.put(`/auth/user/${userId}`, FormData)
			.then((res) => {
				if (res.data.message === "User updated successfully") {
					toast("Profile has been updated.", {
						position: "top-right",
						autoClose: 5000,
						hideProgressBar: true,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
						theme: "light",
						transition: Bounce,
					});
					viewData();
					setEditAccountDetails(false);
				}
			})
			.catch((error) => {
				console.log(error);
			});
	};
	const handleUpdatePassword = () => {
		AxiosInstance.put(`/auth//user/${userId}/changePassword`, ChangePassword)
			.then((res) => {
				if (res.data.message === "Password changed successfully") {
					toast("Password has been changed.", {
						position: "top-right",
						autoClose: 5000,
						hideProgressBar: true,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
						theme: "light",
						transition: Bounce,
					});
					viewData();
					setChangePassword({
						oldPassword: "",
						newPassword: "",
					});
					setEditAccountDetails(false);
				}
			})
			.catch((error) => {
				if (error) {
					toast("Old Password is not correct.", {
						position: "top-right",
						autoClose: 5000,
						hideProgressBar: true,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
						theme: "light",
						transition: Bounce,
					});
				}
			});
	};
	return (
		<div className='w-auto h-full'>
			<div className='h-auto px-4 py-4 w-full border'>
				<div className='flex justify-between items-center'>
					<div>
						<p className='text-lg font-semibold'>Account Details</p>
					</div>
					{EditAccountDetails ? (
						<>
							<div className='flex gap-2'>
								<div
									onClick={handleUpdate}
									className='flex gap-1 items-center text-xs px-2 border border-primary/50 rounded-md bg-hover text-primary/80 cursor-pointer'>
									<div>
										<p>Save</p>
									</div>
								</div>
								<div
									onClick={() => setEditAccountDetails(false)}
									className='flex gap-1 items-center text-xs px-2 border border-primary/50 rounded-md bg-hover text-primary/80 cursor-pointer'>
									<div>
										<p>Cancel</p>
									</div>
								</div>
							</div>
						</>
					) : (
						<div
							onClick={() => setEditAccountDetails(true)}
							className='flex gap-1 items-center px-2 border text-sm border-primary/50 rounded-md bg-hover text-primary/80 cursor-pointer'>
							<div>
								<FiEdit />
							</div>
							<div>
								<p>Edit</p>
							</div>
						</div>
					)}
				</div>
				<hr className='mt-2 mb-3' />
				<div className='flex w-full h-auto gap-x-4'>
					<div className='flex-1'>
						<p className='font-semibold text-gray-400'>Full Name</p>
						<input
							type='text'
							className='w-full h-auto p-2 border border-gray-300 rounded-md focus:outline-none'
							placeholder='Full Name'
							disabled={EditAccountDetails ? false : true}
							onChange={updateUserInfo}
							value={FormData.full_name}
							id='full_name'
						/>
					</div>
					<div className='flex-1'>
						<p className='font-semibold text-gray-400'>Email Address</p>
						<input
							type='text'
							className='w-full h-auto p-2 border border-gray-300 rounded-md focus:outline-none'
							placeholder='Email Address'
							disabled={EditAccountDetails ? false : true}
							onChange={updateUserInfo}
							value={FormData.email}
							id='email'
						/>
					</div>
				</div>
				<div className='flex w-full mt-4 h-auto gap-x-4'>
					<div className='flex-1'>
						<p className='font-semibold text-gray-400'>Phone Number</p>
						<input
							type='text'
							className='w-full h-auto p-2 border border-gray-300 rounded-md focus:outline-none'
							placeholder='Phone Number'
							disabled={EditAccountDetails ? false : true}
							onChange={updateUserInfo}
							value={FormData.phone_number}
							id='phone_number'
						/>
					</div>
					<div className='flex-1'>
						<p className='font-semibold text-gray-400'>
							Emergency Phone Number
						</p>
						<input
							type='text'
							className='w-full h-auto p-2 border border-gray-300 rounded-md focus:outline-none'
							placeholder='Emergency Phone Number'
							disabled={EditAccountDetails ? false : true}
						/>
					</div>
				</div>
			</div>

			<div className='h-auto px-4 py-4 mt-5 w-full border'>
				<div className='flex justify-between items-center'>
					<div>
						<p className='text-lg font-semibold'>Security</p>
					</div>
					{EditSecurity ? (
						<div className='flex gap-2'>
							<div
								onClick={handleUpdatePassword}
								className='flex gap-1 items-center text-xs px-2 border border-primary/50 rounded-md bg-hover text-primary/80 cursor-pointer'>
								<div>
									<p>Save</p>
								</div>
							</div>
							<div
								onClick={() => setEditSecurity(false)}
								className='flex gap-1 items-center px-2 text-xs border border-primary/50 rounded-md bg-hover text-primary/80 cursor-pointer'>
								<div>
									<p>Cancel</p>
								</div>
							</div>
						</div>
					) : (
						<div
							onClick={() => setEditSecurity(true)}
							className='flex gap-1 items-center px-2 text-sm border border-primary/50 rounded-md bg-hover text-primary/80 cursor-pointer'>
							<div>
								<FiEdit />
							</div>
							<div>
								<p>Edit</p>
							</div>
						</div>
					)}
				</div>
				<hr className='mt-2 mb-3' />
				<div className='flex w-full h-auto gap-x-4'>
					<div className='flex-1'>
						<p className='font-semibold text-gray-400'>Current Password</p>
						<input
							type='text'
							className='w-full h-auto p-2 border border-gray-300 rounded-md focus:outline-none'
							placeholder='Current Password'
							disabled={EditSecurity ? false : true}
							value={ChangePassword.oldPassword}
							onChange={updatePassword}
							id='oldPassword'
						/>
					</div>
					<div className='flex-1'>
						<p className='font-semibold text-gray-400'>New Password</p>
						<input
							type='text'
							className='w-full h-auto p-2 border border-gray-300 rounded-md focus:outline-none'
							placeholder='New Password'
							disabled={EditSecurity ? false : true}
							value={ChangePassword.newPassword}
							onChange={updatePassword}
							id='newPassword'
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UserProfile;
