import React, { useState } from 'react';

function CourseTypeManager({ courseTypes, setCourseTypes }) {
  const [input, setInput] = useState('');
  const [editIndex, setEditIndex] = useState(-1);

  const handleAddOrUpdate = () => {
    if (input.trim() === '') return;

    if (editIndex === -1) {
      setCourseTypes([...courseTypes, input]);
    } else {
      const updated = [...courseTypes];
      updated[editIndex] = input;
      setCourseTypes(updated);
      setEditIndex(-1);
    }
    setInput('');
  };

  const handleEdit = (index) => {
    setInput(courseTypes[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updated = courseTypes.filter((_, i) => i !== index);
    setCourseTypes(updated);
  };

  return (
    <div>
      <h2>📚 Manage Course Types</h2>
      <input
        type="text"
        placeholder="Enter course type (e.g., Group)"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleAddOrUpdate}>
        {editIndex === -1 ? 'Add' : 'Update'}
      </button>

      <ul>
        {courseTypes.map((type, index) => (
          <li key={index}>
            {type}
            <button onClick={() => handleEdit(index)}>Edit</button>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CourseTypeManager;
