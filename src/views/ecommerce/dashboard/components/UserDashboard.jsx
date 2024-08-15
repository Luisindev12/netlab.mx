import React from "react";

const UserDashboard = () => {
	return (
		<div>
			<div className='flex justify-center items-center gap-3'>
				<div className='w-[240px] h-[120px] bg-hover rounded-sm p-2 flex items-center justify-center flex-col'>
					<p className='text-2xl font-bold'>05</p>
					<p className='text-md font-medium'>Total Orders</p>
				</div>
				<div className='w-[240px] h-[120px] bg-hover rounded-sm p-2 flex items-center justify-center flex-col'>
					<p className='text-2xl font-bold'>05</p>
					<p className='text-md font-medium'>Total Spend</p>
				</div>
				<div className='w-[240px] h-[120px] bg-hover rounded-sm p-2 flex items-center justify-center flex-col'>
					<p className='text-2xl font-bold'>05</p>
					<p className='text-md font-medium'>Wishlist</p>
				</div>
				<div className='w-[240px] h-[120px] bg-hover rounded-sm p-2 flex items-center justify-center flex-col'>
					<p className='text-2xl font-bold'>05</p>
					<p className='text-md font-medium'>Product in Cart</p>
				</div>
			</div>
			<div className='mt-5'>
				<p className='text-xl font-semibold'>Recent Order List</p>
			</div>
		</div>
	);
};

export default UserDashboard;
