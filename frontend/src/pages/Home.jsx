import React from 'react';
import { BookOpen, Users, Award, TrendingUp, ArrowRight, Star } from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Comprehensive Courses",
      description: "Access a wide range of courses tailored for your academic success"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Expert Instructors",
      description: "Learn from industry professionals and experienced educators"
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Certification",
      description: "Get certified and boost your career prospects"
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Progress Tracking",
      description: "Monitor your learning journey with detailed analytics"
    }
  ];

  const stats = [
    { number: "50K+", label: "Active Students" },
    { number: "500+", label: "Courses" },
    { number: "100+", label: "Expert Instructors" },
    { number: "95%", label: "Success Rate" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Welcome to{' '}
              <span className="bg-gradient-to-r from-blue-500 to-green-400 bg-clip-text text-transparent">
                EduRev
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Your gateway to academic excellence. Join thousands of students achieving their educational goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105 flex items-center justify-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border-2 border-blue-500 text-blue-500 hover:bg-blue-50 font-semibold py-3 px-8 rounded-lg transition duration-300">
                Explore Courses
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-500 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose EduRev?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We provide the best learning experience with cutting-edge technology and expert guidance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="text-blue-500 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-500 to-green-400">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Learning Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join EduRev today and unlock your academic potential with our comprehensive platform.
          </p>
          <button className="bg-white text-blue-500 hover:bg-gray-100 font-bold py-4 px-12 rounded-lg transition duration-300 transform hover:scale-105 inline-flex items-center">
            Register Now
            <Star className="ml-2 h-5 w-5" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;