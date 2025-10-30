// import React from 'react'

// const Dashboard = () => {
//   return (
//     <div>
//       <h1>Dashboard page</h1>
//     </div>
//   )
// }

// export default Dashboard




// import React from 'react';
// import { BookOpen, Clock, TrendingUp, Award, Calendar, BarChart3, Target, Users } from 'lucide-react';

// const Dashboard = () => {
//   const courses = [
//     { name: "Mathematics 101", progress: 75, color: "bg-blue-500" },
//     { name: "Computer Science", progress: 50, color: "bg-green-500" },
//     { name: "Physics Advanced", progress: 30, color: "bg-amber-500" },
//     { name: "English Literature", progress: 90, color: "bg-purple-500" }
//   ];

//   const stats = [
//     { icon: <BookOpen className="h-6 w-6" />, label: "Enrolled Courses", value: "12", color: "text-blue-500" },
//     { icon: <Clock className="h-6 w-6" />, label: "Study Hours", value: "48h", color: "text-green-500" },
//     { icon: <Award className="h-6 w-6" />, label: "Certificates", value: "3", color: "text-amber-500" },
//     { icon: <TrendingUp className="h-6 w-6" />, label: "Current Streak", value: "7 days", color: "text-purple-500" }
//   ];

//   const upcomingEvents = [
//     { title: "Math Quiz", date: "Tomorrow", time: "10:00 AM" },
//     { title: "CS Assignment Due", date: "Dec 15", time: "11:59 PM" },
//     { title: "Group Study", date: "Dec 16", time: "2:00 PM" }
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50 py-8">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <div className="mb-8">
//           <h1 className="text-3xl font-bold text-gray-900">Welcome back, Student!</h1>
//           <p className="text-gray-600 mt-2">Here's your learning progress and upcoming activities</p>
//         </div>

//         {/* Stats Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
//           {stats.map((stat, index) => (
//             <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <p className="text-sm font-medium text-gray-600">{stat.label}</p>
//                   <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
//                 </div>
//                 <div className={`p-3 rounded-lg bg-gray-50 ${stat.color}`}>
//                   {stat.icon}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           {/* Left Column - Course Progress */}
//           <div className="lg:col-span-2">
//             <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
//               <div className="flex items-center justify-between mb-6">
//                 <h2 className="text-xl font-semibold text-gray-900">Course Progress</h2>
//                 <BarChart3 className="h-6 w-6 text-blue-500" />
//               </div>
              
//               <div className="space-y-6">
//                 {courses.map((course, index) => (
//                   <div key={index} className="space-y-2">
//                     <div className="flex justify-between items-center">
//                       <span className="font-medium text-gray-700">{course.name}</span>
//                       <span className="text-sm text-gray-500">{course.progress}%</span>
//                     </div>
//                     <div className="w-full bg-gray-200 rounded-full h-3">
//                       <div
//                         className={`${course.color} h-3 rounded-full transition-all duration-500`}
//                         style={{ width: `${course.progress}%` }}
//                       ></div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Recent Activity */}
//             <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mt-6">
//               <h2 className="text-xl font-semibold text-gray-900 mb-6">Recent Activity</h2>
//               <div className="space-y-4">
//                 {[
//                   { action: "Completed", item: "Mathematics Chapter 5", time: "2 hours ago" },
//                   { action: "Started", item: "CS Programming Assignment", time: "5 hours ago" },
//                   { action: "Submitted", item: "Physics Lab Report", time: "1 day ago" }
//                 ].map((activity, index) => (
//                   <div key={index} className="flex items-center space-x-4 p-3 hover:bg-gray-50 rounded-lg transition duration-300">
//                     <div className="w-2 h-2 bg-green-500 rounded-full"></div>
//                     <div className="flex-1">
//                       <p className="text-gray-800">
//                         <span className="font-medium">{activity.action}</span> {activity.item}
//                       </p>
//                       <p className="text-sm text-gray-500">{activity.time}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Right Column - Upcoming Events & Quick Actions */}
//           <div className="space-y-6">
//             {/* Upcoming Events */}
//             <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
//               <div className="flex items-center justify-between mb-6">
//                 <h2 className="text-xl font-semibold text-gray-900">Upcoming Events</h2>
//                 <Calendar className="h-6 w-6 text-blue-500" />
//               </div>
              
//               <div className="space-y-4">
//                 {upcomingEvents.map((event, index) => (
//                   <div key={index} className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 transition duration-300">
//                     <div className="flex justify-between items-start">
//                       <div>
//                         <h3 className="font-semibold text-gray-900">{event.title}</h3>
//                         <p className="text-sm text-gray-600 mt-1">{event.date} • {event.time}</p>
//                       </div>
//                       <div className="w-2 h-2 bg-amber-500 rounded-full mt-2"></div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Quick Actions */}
//             <div className="bg-gradient-to-br from-blue-500 to-green-400 rounded-xl shadow-sm p-6 text-white">
//               <h2 className="text-xl font-semibold mb-6">Quick Actions</h2>
              
//               <div className="space-y-3">
//                 {[
//                   { icon: <BookOpen className="h-5 w-5" />, label: "Continue Learning" },
//                   { icon: <Target className="h-5 w-5" />, label: "Set Goals" },
//                   { icon: <Users className="h-5 w-5" />, label: "Join Study Group" }
//                 ].map((action, index) => (
//                   <button
//                     key={index}
//                     className="w-full flex items-center space-x-3 p-3 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-lg transition duration-300"
//                   >
//                     {action.icon}
//                     <span>{action.label}</span>
//                   </button>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;










import React from 'react';
import { BookOpen, Clock, TrendingUp, Award, Calendar, BarChart3, Target, Users } from 'lucide-react';

const Dashboard = () => {
  const courses = [
    { name: "Mathematics 101", progress: 75, color: "bg-blue-500" },
    { name: "Computer Science", progress: 50, color: "bg-green-500" },
    { name: "Physics Advanced", progress: 30, color: "bg-amber-500" },
    { name: "English Literature", progress: 90, color: "bg-purple-500" }
  ];

  const stats = [
    { icon: <BookOpen className="h-6 w-6" />, label: "Enrolled Courses", value: "12", color: "text-blue-500" },
    { icon: <Clock className="h-6 w-6" />, label: "Study Hours", value: "48h", color: "text-green-500" },
    { icon: <Award className="h-6 w-6" />, label: "Certificates", value: "3", color: "text-amber-500" },
    { icon: <TrendingUp className="h-6 w-6" />, label: "Current Streak", value: "7 days", color: "text-purple-500" }
  ];

  const upcomingEvents = [
    { title: "Math Quiz", date: "Tomorrow", time: "10:00 AM" },
    { title: "CS Assignment Due", date: "Dec 15", time: "11:59 PM" },
    { title: "Group Study", date: "Dec 16", time: "2:00 PM" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Welcome back, Student!</h1>
          <p className="text-gray-600 mt-2">Here's your learning progress and upcoming activities</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
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
          {/* Left Column - Course Progress */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900">Course Progress</h2>
                <BarChart3 className="h-6 w-6 text-blue-500" />
              </div>
              
              <div className="space-y-6">
                {courses.map((course, index) => (
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
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mt-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Recent Activity</h2>
              <div className="space-y-4">
                {[
                  { action: "Completed", item: "Mathematics Chapter 5", time: "2 hours ago" },
                  { action: "Started", item: "CS Programming Assignment", time: "5 hours ago" },
                  { action: "Submitted", item: "Physics Lab Report", time: "1 day ago" }
                ].map((activity, index) => (
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

            {/* Quick Actions */}
            <div className="bg-gradient-to-br from-blue-500 to-green-400 rounded-xl shadow-sm p-6 text-white">
              <h2 className="text-xl font-semibold mb-6">Quick Actions</h2>
              
              <div className="space-y-3">
                {[
                  { icon: <BookOpen className="h-5 w-5" />, label: "Continue Learning" },
                  { icon: <Target className="h-5 w-5" />, label: "Set Goals" },
                  { icon: <Users className="h-5 w-5" />, label: "Join Study Group" }
                ].map((action, index) => (
                  <button
                    key={index}
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