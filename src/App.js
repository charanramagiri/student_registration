import React, { useState } from 'react';
import CourseTypeManager from './components/CourseTypeManager';
import CourseManager from './components/CourseManager';
import CourseOffering from './components/CourseOffering';
import StudentRegistration from './components/StudentRegistration';

function App() {
  const [courseTypes, setCourseTypes] = useState([]);
  const [courses, setCourses] = useState([]);

  return (
    <div>
      <h1>🎓 Student Registration System</h1>

      {/* Manage Course Types */}
      <CourseTypeManager
        courseTypes={courseTypes}
        setCourseTypes={setCourseTypes}
      />

      {/* Manage Courses */}
      <CourseManager courses={courses} setCourses={setCourses} />

      {/* Manage Course Offerings */}
      <CourseOffering courseTypes={courseTypes} courses={courses} />

      {/* Student Registration */}
      <StudentRegistration />
    </div>
  );
}

export default App;
