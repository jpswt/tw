import React from 'react';

function Login() {
	return (
		<div className="relative w-full h-screen bg-gray-500">
			<img
				className=" absolute w-full h-full object-cover mix-blend-overlay bg-left-bottom "
				src="https://images.unsplash.com/photo-1432821596592-e2c18b78144f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
				alt="/"
			/>
			<div className="flex justify-center items-center h-full">
				<form className="max-w-[450px] w-full mx-auto bg-white p-6 rounded-md">
					<h1 className="text-center text-3xl font-bold py-2">WELCOME</h1>
					<div className="flex flex-col mb-4">
						<label className="font-semibold mb-1">Username</label>
						<input className="relative border bg-gray-200 p-2" type="text" />
					</div>
					<div className="flex flex-col mb-4">
						<label className="font-semibold mb-1">Password</label>
						<input className="relative border bg-gray-200 p-2" type="text" />
					</div>
					<button className="relative w-full py-2 mt-8 bg-cyan-800 hover:bg-cyan-600 text-white  ">
						Sign In
					</button>
				</form>
			</div>
		</div>
	);
}

export default Login;
