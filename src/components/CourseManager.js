import React, { useState } from 'react';

function CourseManager({ courses, setCourses }) {
  const [input, setInput] = useState('');
  const [editIndex, setEditIndex] = useState(-1);

  const handleAddOrUpdate = () => {
    if (input.trim() === '') return;

    if (editIndex === -1) {
      setCourses([...courses, input]);
    } else {
      const updated = [...courses];
      updated[editIndex] = input;
      setCourses(updated);
      setEditIndex(-1);
    }
    setInput('');
  };

  const handleEdit = (index) => {
    setInput(courses[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updated = courses.filter((_, i) => i !== index);
    setCourses(updated);
  };

  return (
    <div>
      <h2>📘 Manage Courses</h2>
      <input
        type="text"
        placeholder="Enter course (e.g., Hindi)"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleAddOrUpdate}>
        {editIndex === -1 ? 'Add' : 'Update'}
      </button>

      <ul>
        {courses.map((course, index) => (
          <li key={index}>
            {course}
            <button onClick={() => handleEdit(index)}>Edit</button>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CourseManager;
