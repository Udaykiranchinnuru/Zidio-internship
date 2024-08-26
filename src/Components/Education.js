// src/components/EducationForm.jsx
import React, { useState } from 'react';

const Education = () => {
  const [formData, setFormData] = useState({
    EducationType: '',
    Degree: '',
    University: '',
    StartYear: "",
    EndYear: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Education details submitted:\n' + 
          `EducationType: ${formData.EducationType}\n` + 
          `Degree: ${formData.Degree}\n` + 
          `University: ${formData.University}`+
          `StartYear: ${formData.StartYear}\n`+
          `EndYear: ${formData.EndYear}\n` );
  };

  return (
    <div>
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
        <div className="mt-16 max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-8">Education Details</h2>
        <form onSubmit={handleSubmit}>
            <div className="mb-4">
            <label htmlFor="institution" className="block text-gray-700 font-medium mb-2">EducationType</label>
            <input
                type="text"
                id="institution"
                name="institution"
                value={formData.institution}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
            />
            </div>
            <div className="mb-4">
            <label htmlFor="degree" className="block text-gray-700 font-medium mb-2">Degree</label>
            <input
                type="text"
                id="degree"
                name="degree"
                value={formData.degree}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
            />
            </div>
            <div className="mb-4">
            <label htmlFor="yearOfGraduation" className="block text-gray-700 font-medium mb-2">University</label>
            <input
                type="text"
                id="yearOfGraduation"
                name="yearOfGraduation"
                value={formData.yearOfGraduation}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
            />
            </div>
            <div className="mb-4">
            <label htmlFor="yearOfGraduation" className="block text-gray-700 font-medium mb-2">StartYear</label>
            <input
                type="text"
                id="yearOfGraduation"
                name="yearOfGraduation"
                value={formData.yearOfGraduation}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
            />
            </div>
            <div className="mb-4">
            <label htmlFor="yearOfGraduation" className="block text-gray-700 font-medium mb-2">EndYear</label>
            <input
                type="text"
                id="yearOfGraduation"
                name="yearOfGraduation"
                value={formData.yearOfGraduation}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
            />
            </div>
            <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
            Submit
            </button>
        </form>
        </div>
    </div>
  );
};

export default Education;
