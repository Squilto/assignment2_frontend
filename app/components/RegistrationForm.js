const RegisterationForm = () => {
    return (
      <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl mb-4">Registeration Form</h2>
        <form>
          {/* add handle Submit   */}
          <div className="mb-4">
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-gray-600"
            >
              First Name
            </label>
            {/* add value, onChange  */}
            <input
              type="text"
              id="firstName"
              name="firstName"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              required   
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-gray-600"
            >
              Last Name
            </label>
            {/* add value, onChange  */}
            <input
              type="text"
              id="lasttName"
              name="lastName"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              required   
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="phoneNumber"
              className="block text-sm font-medium text-gray-600"
            >
              Phone Number
            </label>
            {/* add value, onChange  */}
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              required   
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor=""
              className="block text-sm font-medium text-gray-600"
            >
              User Name
            </label>
            {/* add value, onChange  */}
            <input
              type="text"
              id="userName"
              name="userName"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              required   
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Email
            </label>
            {/* add value, onChange  */}
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              required   
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600"
            >
              Password
            </label>
            {/* add value, onChange  */}
            <input
              type="password"
              id="password"
              name="password"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              required   
            />
          </div>
          <div className="mb-4">
          <button type="submit" className="bg-blue-500 text-white p-2 rounded-md w-full hover:bg-blue-600">
              Register
          </button>
          </div>
          
        </form>
      </div>
    );
  };
  
  export default RegisterationForm;