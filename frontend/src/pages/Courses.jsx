import React, { useEffect, useState } from 'react';
import api from '../utils/api';
import CourseCard from '../components/CourseCard';

const Courses = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    api.get('/courses')
      .then(res => setCourses(res.data))
      .catch(_ => {
        // fallback to local static if backend unreachable
        import('../data/courses').then(m => setCourses(m.courses));
      });
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Courses</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {courses.map(c => <CourseCard key={c.id} course={c} />)}
      </div>
    </div>
  );
};

export default Courses;
