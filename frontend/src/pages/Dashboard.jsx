import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, Clock, TrendingUp, Award, Calendar, BarChart3, Target, Users } from 'lucide-react';
import api from '../utils/api';

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get('/auth/me')
      .then(res => {
        setUser(res.data);
        // If user has enrolled courses, we can use them for progress
        if (res.data.enrolledCourses?.length) {
          setCourses(res.data.enrolledCourses);
        }
      })
      .catch(() => {
        localStorage.removeItem('edurev_token');
        navigate('/login');
      })
      .finally(() => setLoading(false));
  }, [navigate]);

  // Mock data for demonstration - in real app, this would come from API
  const mockStats = [
    { icon: <BookOpen className="h-6 w-6" />, label: "Enrolled Courses", value: user?.enrolledCourses?.length || "0", color: "text-blue-500" },
    { icon: <Clock className="h-6 w-6" />, label: "Study Hours", value: "48h", color: "text-green-500" },
    { icon: <Award className="h-6 w-6" />, label: "Certificates", value: "3", color: "text-amber-500" },
    { icon: <TrendingUp className="h-6 w-6" />, label: "Current Streak", value: "7 days", color: "text-purple-500" }
  ];

  const mockProgress = [
    { name: "Mathematics 101", progress: 75, color: "bg-blue-500" },
    { name: "Computer Science", progress: 50, color: "bg-green-500" },
    { name: "Physics Advanced", progress: 30, color: "bg-amber-500" },
    { name: "English Literature", progress: 90, color: "bg-purple-500" }
  ];

  const upcomingEvents = [
    { title: "Math Quiz", date: "Tomorrow", time: "10:00 AM" },
    { title: "CS Assignment Due", date: "Dec 15", time: "11:59 PM" },
    { title: "Group Study", date: "Dec 16", time: "2:00 PM" }
  ];

  const recentActivities = [
    { action: "Completed", item: "Mathematics Chapter 5", time: "2 hours ago" },
    { action: "Started", item: "CS Programming Assignment", time: "5 hours ago" },
    { action: "Submitted", item: "Physics Lab Report", time: "1 day ago" }
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return null; // Will redirect in useEffect
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Welcome back, {user.name}!</h1>
          <p className="text-gray-600 mt-2">{user.tagline || "Here's your learning progress and upcoming activities"}</p>
          <p className="text-sm text-gray-500 mt-1">Email: {user.email}</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {mockStats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                </div>
                <div className={`p-3 rounded-lg bg-gray-50 ${stat.color}`}>
                  {stat.icon}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Course Progress & Recent Activity */}
          <div className="lg:col-span-2">
            {/* Course Progress */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900">Course Progress</h2>
                <BarChart3 className="h-6 w-6 text-blue-500" />
              </div>
              
              {user.enrolledCourses?.length ? (
                <div className="space-y-6">
                  {mockProgress.map((course, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-gray-700">{course.name}</span>
                        <span className="text-sm text-gray-500">{course.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div
                          className={`${course.color} h-3 rounded-full transition-all duration-500`}
                          style={{ width: `${course.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No courses enrolled yet</h3>
                  <p className="text-gray-500 mb-4">Start your learning journey by enrolling in courses</p>
                  <button 
                    onClick={() => navigate('/courses')}
                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg transition duration-300"
                  >
                    Browse Courses
                  </button>
                </div>
              )}
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mt-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Recent Activity</h2>
              <div className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <div key={index} className="flex items-center space-x-4 p-3 hover:bg-gray-50 rounded-lg transition duration-300">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <div className="flex-1">
                      <p className="text-gray-800">
                        <span className="font-medium">{activity.action}</span> {activity.item}
                      </p>
                      <p className="text-sm text-gray-500">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Upcoming Events & Quick Actions */}
          <div className="space-y-6">
            {/* Upcoming Events */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900">Upcoming Events</h2>
                <Calendar className="h-6 w-6 text-blue-500" />
              </div>
              
              <div className="space-y-4">
                {upcomingEvents.map((event, index) => (
                  <div key={index} className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 transition duration-300">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold text-gray-900">{event.title}</h3>
                        <p className="text-sm text-gray-600 mt-1">{event.date} • {event.time}</p>
                      </div>
                      <div className="w-2 h-2 bg-amber-500 rounded-full mt-2"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Enrolled Courses List */}
            {user.enrolledCourses?.length > 0 && (
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Your Courses</h2>
                <div className="space-y-3">
                  {user.enrolledCourses.map(course => (
                    <div key={course.id} className="p-3 border border-gray-200 rounded-lg hover:border-blue-300 transition duration-300">
                      <h3 className="font-semibold text-gray-900">{course.title}</h3>
                      <p className="text-sm text-gray-600 mt-1">{course.desc}</p>
                      <div className="text-xs text-gray-500 mt-2">
                        Enrolled on: {new Date(course.enrolledAt).toLocaleDateString()}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Quick Actions */}
            <div className="bg-gradient-to-br from-blue-500 to-green-400 rounded-xl shadow-sm p-6 text-white">
              <h2 className="text-xl font-semibold mb-6">Quick Actions</h2>
              
              <div className="space-y-3">
                {[
                  { icon: <BookOpen className="h-5 w-5" />, label: "Continue Learning", action: () => navigate('/courses') },
                  { icon: <Target className="h-5 w-5" />, label: "Set Goals", action: () => {} },
                  { icon: <Users className="h-5 w-5" />, label: "Join Study Group", action: () => {} }
                ].map((action, index) => (
                  <button
                    key={index}
                    onClick={action.action}
                    className="w-full flex items-center space-x-3 p-3 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-lg transition duration-300"
                  >
                    {action.icon}
                    <span>{action.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;