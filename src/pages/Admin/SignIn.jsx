import React from 'react'
import { Toaster, toast } from 'react-hot-toast'
import { useEffect, useState } from 'react'
import { useNavigate, Link, useSearchParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setAdmin } from '../../feautures/adminSlice'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import { adminSignInAPI } from '../../api/admin'

const SignIn = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await adminSignInAPI({ email, password });
      console.log(response, 'response');
      
      const { admin } = response.data;
      console.log(admin,'admin');
      
      dispatch(setAdmin(admin)); 
      navigate("/admin/dashboard");
      
    } catch (err) {
      setError("Invalid credentials");
    }
  };

  return (
    <>
    <div className="flex nexa-font min-h-screen flex-1 flex-col justify-center px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-black">
          Admin Login
        </h2>
      </div>
      {error && <p className="text-red-500 text-center">{error}</p>}
      <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleLogin}>

          <div>
            <label className="block text-sm font-medium leading-6 text-gray-900">
              Email Address
            </label>
            <div className="mt-1">
              <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full nexa-font rounded-md border-0 py-1.5 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium leading-6 text-gray-900">
              Password
            </label>
            <div className="mt-1">
              <input
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="block w-full nexa-font rounded-md border-0 py-1.5 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div
                className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <AiFillEye className="text-gray-700" size={20} />
                ) : (
                  <AiFillEyeInvisible className="text-gray-700" size={20} />
                )}
          </div>

          <button className="flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Login
          </button>
        </form>
      </div>
    </div>
  </>
  )
}

export default SignIn

