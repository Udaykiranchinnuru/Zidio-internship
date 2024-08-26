import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name,email,password);
  }

  return (
    <div className="flex justify-center items-center bg-gray-200 h-screen">
      <div className="bg-white p-6 rounded-md w-1/4">
        <h2 className="text-2xl font-bold mb-4">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block font-semibold mb-1">
              UserName
            </label>
            <input
              type="text"
              placeholder="Enter name"
              autoCapitalize="off"
              name="name"
              className="w-full p-2 border border-gray-300 rounded"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block font-semibold mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter email"
              autoCapitalize="off"
              name="email"
              className="w-full p-2 border border-gray-300 rounded"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block font-semibold mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter password"
              autoCapitalize="off"
              name="password"
              className="w-full p-2 border border-gray-300 rounded"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="w-full bg-green-500 text-white py-2 rounded">
            Register
          </button>
        </form>
        <p className="mt-4">Already have an account..?</p>
        <Link to="/Login" className="block mt-2 text-center bg-gray-100 border border-gray-300 py-2 rounded">
          Login
        </Link>
      </div>
    </div>
  )
}
export default Signup;
