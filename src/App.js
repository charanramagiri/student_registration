import React from 'react';
import CourseTypeManager from './components/CourseTypeManager';
import CourseManager from './components/CourseManager';
import CourseOffering from './components/CourseOffering';
import StudentRegistration from './components/StudentRegistration';

function App() {
  return (
    <div>
      <h1>🎓 Student Registration System</h1>
      <CourseTypeManager />
      <CourseManager />
      <CourseOffering />
      <StudentRegistration />
    </div>
  );
}

export default App;
