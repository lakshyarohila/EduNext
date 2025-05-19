"use client";

import { useState, useEffect } from "react";
import CourseCard from "../components/CourseCard";

export default function Home() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch("/api/courses");

        if (!response.ok) {
          throw new Error("Failed to fetch courses");
        }

        const data = await response.json();
        setCourses(data);
      } catch (error) {
        console.error("Error fetching courses:", error);
        setError("Failed to load courses. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh] bg-gray-900 text-white">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-10 bg-gray-900 text-white">
        <div className="bg-red-900/30 border-l-4 border-red-500 text-red-200 p-4 rounded">
          <p>{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded transition-colors duration-200"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-purple-900 to-indigo-800 rounded-b-3xl shadow-2xl mb-12">
        <div className="absolute inset-0 opacity-20 bg-[url('/api/placeholder/1920/600')] bg-cover bg-center"></div>
        <div className="container mx-auto px-6 py-16 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-5xl font-bold leading-tight mb-4 text-white">
                Explore Our <span className="text-purple-300">Courses</span>
              </h1>
              <p className="text-xl text-gray-200 mb-8">
                Learn and grow with expert instructors at your own pace.
              </p>
              <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors duration-200 transform hover:scale-105">
                Browse All Courses
              </button>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="w-full max-w-md rounded-xl overflow-hidden shadow-2xl">
                <img 
                  src="https://cdn.pixabay.com/photo/2024/07/15/17/21/ai-generated-8897458_1280.jpg" 
                  alt="Learning Platform" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Course Catalog Section */}
      <div className="container mx-auto px-6 pb-16">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-white mb-2">Our Courses</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Browse our selection of premium courses designed to help you master new skills and advance your career.
          </p>
        </div>

        {/* Course Grid */}
        {courses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        ) : (
          <div className="bg-gray-800/50 rounded-xl p-10 text-center shadow-inner">
            <p className="text-gray-400 text-lg">No courses available at the moment.</p>
            <p className="text-gray-500 mt-2">Check back soon for our upcoming course catalog.</p>
          </div>
        )}
      </div>
    </div>
  );
}