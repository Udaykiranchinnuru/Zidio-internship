
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3002/login', { email, password })
      .then(result => {
        console.log(result);
        if (result.data === "Success") {
          navigate('/Home');
        }
      })
      .catch(err => console.log(err));
  }

  return (
    <div className="flex justify-center items-center bg-gray-200 h-screen">
      <div className="bg-white p-6 rounded-md w-1/4">
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block font-semibold mb-1">
              Email
            </label>
            <input
              type="text"
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
          <Link to="/Navbar" className="bg-green-500 block mt-2 text-center bg-gray-100 border border-gray-300 py-2 rounded">
            Login
          </Link>        
        </form>
        <p className="mt-4">
          Don't have an account? <Link to="/" className="text-blue-500">Sign up</Link>
        </p>
      </div>
    </div>
  )
}

export default Login;
