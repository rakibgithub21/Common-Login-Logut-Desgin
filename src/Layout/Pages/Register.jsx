import { Link } from "react-router-dom";

import logo from '../../assets/71358d_aeaf8f0990b54093b259ae5c7b9da654~mv2.gif'

const Register = () => {
    return (
        <div className="min-h-[calc(100vh-337px) flex justify-center items-center">
            <div className="w-full md:w-4/6 lg:w-3/6 mx-auto p-8 space-y-3 rounded-xl dark:bg-gray-50 dark:text-gray-800">
                    <img className="text-center mx-auto w-48" src={logo} alt="" />
                <form noValidate="" action="" className="space-y-6 bg-slate-300 ring-1 ring-purple-500 rounded-lg px-10 py-5">
                    <div className="space-y-1 text-lg">
                        <label htmlFor="Text" className="block dark:text-gray-600">Name</label>
                        <input type="text" id="Text" placeholder="Type Your Email" className="input input-bordered w-full" />
                    </div>
                    <div className="space-y-1 text-lg">
                        <label htmlFor="email" className="block dark:text-gray-600">Email</label>
                        <input type="email" id="email" placeholder="Type Your Email" className="input input-bordered w-full" />
                    </div>
                    <div className="space-y-1 text-lg">
                        <label htmlFor="image" className="block dark:text-gray-600">Profile Image </label>
                        <input type="text" id="image" placeholder="Your Image Link" className="input input-bordered w-full" />
                    </div>
                    <div className="space-y-1 text-lg">
                        <label htmlFor="password" className="block dark:text-gray-600">Password</label>
                        <input type="password" id="password" placeholder="Type Your Email" className="input input-bordered w-full" />
                    </div>
                    <button type="submit" className="block btn hover:text-white text-xl btn-success w-full">Login</button>
                </form>
                <p className="text-lg text-center  sm:px-6 dark:text-gray-600">Already have an account?
                    <Link className="underline font-medium hover:text-blue-400 text-lg" to={'/login'}>Login</Link>

                </p>
            </div>
        </div>
    );
};

export default Register;