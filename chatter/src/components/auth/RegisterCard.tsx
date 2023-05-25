import React from "react";

const RegisterForm = () => {
  return (
    <div className='flex justify-center items-center mt-8 '>
      <div className='w-full'>
        <h2 className='text-2xl font-bold mb-4'>Register</h2>
        <form className='bg-white  rounded px-8 pt-6 pb-8 mb-4'>
          <div className='flex mb-4'>
            <div className='w-1/2 mr-2'>
              <label
                className='block text-gray-700 text-sm font-bold mb-2'
                htmlFor='firstName'
              >
                First Name
              </label>
              <input
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                id='firstName'
                type='text'
                placeholder='Enter your first name'
              />
            </div>
            <div className='w-1/2 ml-2'>
              <label
                className='block text-gray-700 text-sm font-bold mb-2'
                htmlFor='lastName'
              >
                Last Name
              </label>
              <input
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                id='lastName'
                type='text'
                placeholder='Enter your last name'
              />
            </div>
          </div>
          <div className='mb-4'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='password'
            >
              Password
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='password'
              type='password'
              placeholder='Enter your password'
            />
          </div>
          <div className='mb-4'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='confirmPassword'
            >
              Confirm Password
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='confirmPassword'
              type='password'
              placeholder='Confirm your password'
            />
          </div>
          <div className='mb-4'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='email'
            >
              Email
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='email'
              type='email'
              placeholder='Enter your email'
            />
          </div>
          <div className='mb-4'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='joiningAs'
            >
              You are joining as
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='joiningAs'
              type='text'
              placeholder='Writer'
            />
          </div>
          <div className=''>
            <button
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full'
              type='button'
            >
              Create Account
            </button>
          </div>
          <div>
            <button
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full'
              type='button'
            >
              Sign Up With Google
            </button>
            <button
              className='block mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full'
              type='button'
            >
              {" "}
              Sign Up With LinkedIn
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
