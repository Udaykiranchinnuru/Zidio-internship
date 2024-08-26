// src/components/Resume.js
import React from 'react';

const Resume = () => {
  return (
    <div className="max-w-4xl mx-auto bg-white p-8 shadow-lg">
      <header className="flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-2">Vaddi Mounika</h1>
        <p className="text-lg text-gray-600">Web Developer</p>
      </header>
      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Personal Info</h2>
        <ul className="text-gray-700">
        <li>First Name:Vaddi</li>
        <li>Last Name:Mounika</li>
        <li>Email:vaddimounika@102gmail.com</li>
        </ul>
      </section>
      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Work Experience</h2>
        <div className="border-l-4 border-blue-500 pl-4">
          <h3 className="text-xl font-medium">__________________</h3>
          <p className="text-gray-600">____________________</p>
        </div>
      </section>
      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Education</h2>
        <div className="border-l-4 border-blue-500 pl-4">
          <h3 className="text-xl font-medium">__________</h3>
          <p className="text-gray-600">______________</p>
          <ul className="list-disc ml-6 text-gray-700">
            <li>____________________________________________</li>
            <li>____________________________________________</li>
            <li>____________________________________________</li>
          </ul>
        </div>
      </section>
      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
        <ul className="list-disc ml-6 text-gray-700">
          <li>_______________________</li>
          <li>________________________</li>
          <li>________________________</li>
        </ul>
      </section>
    </div>
  );
};

export default Resume;
