import React, { useState } from 'react';

function StudentRegistration({ offerings }) {
  const [studentName, setStudentName] = useState('');
  const [selectedOffering, setSelectedOffering] = useState('');
  const [registrations, setRegistrations] = useState([]);
  const [filterOffering, setFilterOffering] = useState('');

  const handleRegister = () => {
    if (!studentName.trim() || !selectedOffering) return;
    setRegistrations([
      ...registrations,
      { name: studentName, offering: selectedOffering }
    ]);
    setStudentName('');
    setSelectedOffering('');
  };

  const filteredRegistrations = filterOffering
    ? registrations.filter((reg) => reg.offering === filterOffering)
    : registrations;

  return (
    <div>
      <h2>👩‍🎓 Student Registration</h2>

      <input
        type="text"
        placeholder="Enter student name"
        value={studentName}
        onChange={(e) => setStudentName(e.target.value)}
      />

      <select
        value={selectedOffering}
        onChange={(e) => setSelectedOffering(e.target.value)}
      >
        <option value="">Select Course Offering</option>
        {offerings.map((offering, index) => (
          <option key={index} value={offering}>
            {offering}
          </option>
        ))}
      </select>

      <button onClick={handleRegister}>Register</button>

      <h3>📋 Filter by Course Offering</h3>
      <select
        value={filterOffering}
        onChange={(e) => setFilterOffering(e.target.value)}
      >
        <option value="">All</option>
        {offerings.map((offering, index) => (
          <option key={index} value={offering}>
            {offering}
          </option>
        ))}
      </select>

      <h3>✅ Registered Students</h3>
      <ul>
        {filteredRegistrations.map((reg, index) => (
          <li key={index}>
            {reg.name} — {reg.offering}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StudentRegistration;
