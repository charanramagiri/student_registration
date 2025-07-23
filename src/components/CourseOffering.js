import React, { useState } from 'react';

function CourseOffering({ courseTypes, courses }) {
  const [offerings, setOfferings] = useState([]);
  const [selectedType, setSelectedType] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('');

  const handleAddOffering = () => {
    if (!selectedType || !selectedCourse) return;
    const newOffering = `${selectedType} - ${selectedCourse}`;
    setOfferings([...offerings, newOffering]);
    setSelectedType('');
    setSelectedCourse('');
  };

  const handleDelete = (index) => {
    const updated = offerings.filter((_, i) => i !== index);
    setOfferings(updated);
  };

  return (
    <div>
      <h2>📖 Manage Course Offerings</h2>

      <select
        value={selectedType}
        onChange={(e) => setSelectedType(e.target.value)}
      >
        <option value="">Select Course Type</option>
        {courseTypes.map((type, idx) => (
          <option key={idx} value={type}>
            {type}
          </option>
        ))}
      </select>

      <select
        value={selectedCourse}
        onChange={(e) => setSelectedCourse(e.target.value)}
      >
        <option value="">Select Course</option>
        {courses.map((course, idx) => (
          <option key={idx} value={course}>
            {course}
          </option>
        ))}
      </select>

      <button onClick={handleAddOffering}>Add Offering</button>

      <ul>
        {offerings.map((offering, index) => (
          <li key={index}>
            {offering}
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CourseOffering;
