import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Personal = () => {
  const [formData, setFormData] = useState({
    name: '',
    secondName: '',
    email: '',
    mobileNumber: '',
    city: '',
    state: '',
    pincode: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
    alert('Submitted');
  };

  return (
    <div className=''> 
           <nav className="bg-green-500 p-4">
            <div className="container mx-auto flex justify-between items-center">
              <div className="text-white text-2xl font-bold">Details</div>
              <div className="space-x-16 text-xl">
                <a href="/Personal" className="text-white hover:text-black">Personal Info</a>
                <a href="/Work" className="text-white hover:text-black">Work Experience</a>
                <a href="/Education" className="text-white hover:text-black">Education</a>
                <a href="/Skills" className="text-white hover:text-black">Skills</a>
              </div>
            </div>
          </nav>
        <div className="max-w-4xl mx-auto p-8 bg-white rounded-md">
            <h1 className="text-2xl font-bold mb-6">Personal Details</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-1">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    placeholder="Enter your name"
                />
                </div>
                <div>
                <label htmlFor="secondName" className="block text-sm font-semibold mb-1">Second Name</label>
                <input
                    type="text"
                    id="secondName"
                    name="secondName"
                    value={formData.secondName}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    placeholder="Enter your second name"
                />
                </div>
                <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-1">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    placeholder="Enter your email"
                />
                </div>
                <div>
                <label htmlFor="mobileNumber" className="block text-sm font-semibold mb-1">Mobile Number</label>
                <input
                    type="tel"
                    id="mobileNumber"
                    name="mobileNumber"
                    value={formData.mobileNumber}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    placeholder="Enter your mobile number"
                />
                </div>
                <div>
                <label htmlFor="city" className="block text-sm font-semibold mb-1">City</label>
                <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    placeholder="Enter your city"
                />
                </div>
                <div>
                <label htmlFor="state" className="block text-sm font-semibold mb-1">State</label>
                <input
                    type="text"
                    id="state"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    placeholder="Enter your state"
                />
                </div>
                <div>
                <label htmlFor="pincode" className="block text-sm font-semibold mb-1">Pincode</label>
                <input
                    type="text"
                    id="pincode"
                    name="pincode"
                    value={formData.pincode}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    placeholder="Enter your pincode"
                />
                </div>
                <button
                type="submit"
                className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                >
                Submit
                </button>
            </form>
            </div>
    </div>
  );
}

export default Personal;
