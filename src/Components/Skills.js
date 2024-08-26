
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Skills = () => {
  const [sections, setSections] = useState({
    Skills: [],
   
  });

  const [currentEntry, setCurrentEntry] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  const [currentSection, setCurrentSection] = useState('');

  const handleAddEntry = () => {
    if (currentSection && currentEntry) {
      if (editIndex !== null) {
        const updatedEntries = sections[currentSection].map((entry, index) =>
          index === editIndex ? currentEntry : entry
        );
        setSections({
          ...sections,
          [currentSection]: updatedEntries,
        });
        setEditIndex(null);
      } else {
        setSections({
          ...sections,
          [currentSection]: [...sections[currentSection], currentEntry],
        });
      }
      setCurrentEntry('');
    }
  };

  const handleEditEntry = (section, index) => {
    setCurrentEntry(sections[section][index]);
    setCurrentSection(section);
    setEditIndex(index);
  };

  const handleDeleteEntry = (section, index) => {
    const updatedEntries = sections[section].filter((_, i) => i !== index);
    setSections({
      ...sections,
      [section]: updatedEntries,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Submitted');
  };

  return (
    <div>
         <nav className="bg-green-500 p-4">
            <div className="container mx-auto flex justify-between items-center">
              <div className="text-white text-2xl font-bold">Details</div>
              <div className="space-x-16 text-xl">
                <a href="/Choose" className="text-white hover:text-black">Personal Info</a>
                <a href="/Work" className="text-white hover:text-black">Work Experience</a>
                <a href="/Education" className="text-white hover:text-black">Education</a>
                <a href="/Achievements" className="text-white hover:text-black">Skills</a>
              </div>
            </div>
          </nav>
        <div className='max-w-4xl mx-auto p-8 bg-white rounded-md' onSubmit={handleSubmit}>
        <div className="p-8 bg-gray-100">
          {['Skills'].map((section) => (
            <div key={section} className="mb-8 bg-white p-4 rounded shadow">
              <h2 className="text-xl font-bold mb-4 capitalize">
                {section.replace(/([A-Z])/g, ' $1')}
              </h2>
              <div className="mb-4 flex">
                <input
                  type="text"
                  value={currentSection === section ? currentEntry : ''}
                  onChange={(e) => setCurrentEntry(e.target.value)}
                  onFocus={() => setCurrentSection(section)}
                  className="border p-2 rounded w-full mr-2"
                  placeholder={`Add new ${section.replace(/([A-Z])/g, ' $1').toLowerCase()}`}
                />
                <button
                  onClick={handleAddEntry}
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                  {editIndex !== null && currentSection === section ? 'Update' : 'Add'}
                </button>
              </div>
              <ul className="list-disc list-inside mb-4">
                {sections[section].map((entry, index) => (
                  <li key={index} className="flex justify-between items-center mb-2">
                    <span>{entry}</span>
                    <div>
                      <button
                        onClick={() => handleEditEntry(section, index)}
                        className="text-blue-500 hover:underline mr-2"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeleteEntry(section, index)}
                        className="text-red-500 hover:underline"
                      >
                        Delete
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>     
          ))}
          <button
              type="submit"
              className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Submit
            </button>
        </div>
        </div>
        <div className="flex justify-end p-4">
      <Link to="/Resume"
        
        className="mr-60 w-30 h-12 bg-green-500 text-white py-4 rounded"
       
      > Download Resume</Link>

    </div>
    </div>
  );
};

export default Skills;
