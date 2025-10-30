import React from 'react';
import axios from 'axios'; // ✅ Add this line
import { useNavigate } from 'react-router-dom';

const CourseCard = ({ course }) => {
  const navigate = useNavigate();

  const enroll = async () => {
    const token = localStorage.getItem('edurev_token');
    if (!token) return navigate('/login');

    try {
      const res = await axios.post(
        'http://localhost:5000/api/auth/enroll',
        { courseId: course.id }, // ✅ using course.id for static data
        { headers: { Authorization: `Bearer ${token}` } }
      );

      alert(res.data.message || 'Enrolled successfully!');
    } catch (err) {
      console.error('Enroll error:', err);
      alert(err.response?.data?.message || 'Enrollment failed, please try again.');
    }
  };

  return (
    <div className="border rounded p-4 shadow bg-white hover:shadow-md transition">
      <h3 className="font-semibold text-lg">{course.title}</h3>
      <p className="text-sm text-gray-600 mt-1">{course.desc}</p>
      <p className="text-xs text-gray-500 mt-2">Level: {course.level || 'All'}</p>
      <div className="mt-4">
        <button
          onClick={enroll}
          className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded"
        >
          Enroll
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
