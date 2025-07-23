import React, { useState } from 'react';
import CourseTypeManager from './components/CourseTypeManager';
import CourseManager from './components/CourseManager';
import CourseOffering from './components/CourseOffering';
import StudentRegistration from './components/StudentRegistration';

function App() {
  const [courseTypes, setCourseTypes] = useState([]);
  const [courses, setCourses] = useState([]);
  const [offerings, setOfferings] = useState([]); // NEW

  return (
    <div>
      <h1>🎓 Student Registration System</h1>

      <CourseTypeManager
        courseTypes={courseTypes}
        setCourseTypes={setCourseTypes}
      />

      <CourseManager courses={courses} setCourses={setCourses} />

      <CourseOffering
        courseTypes={courseTypes}
        courses={courses}
        offerings={offerings}
        setOfferings={setOfferings}
      />

      <StudentRegistration offerings={offerings} />
    </div>
  );
}

export default App;
