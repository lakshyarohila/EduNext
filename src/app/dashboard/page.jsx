"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import useStore from '../../store/useStore';
import EnrolledCourseCard from '../../components/EnrolledCourseCard';

export default function Dashboard() {
  const enrolledCourses = useStore(state => state.enrolledCourses);
  const enrollmentCount = useStore(state => state.getEnrollmentCount());
  const router = useRouter();

  if (enrollmentCount === 0) {
    return (
      <div className="min-h-screen bg-gray-900 text-gray-100">
        <div className="container mx-auto px-6 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-8">Your Learning Dashboard</h1>
            <div className="bg-gray-800/70 rounded-xl p-10 max-w-lg mx-auto shadow-lg border border-gray-700">
              <div className="flex justify-center mb-6">
                <div className="w-24 h-24 rounded-full bg-indigo-900/30 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
              </div>
              <h2 className="text-2xl font-semibold text-gray-200 mb-4">You're not enrolled in any courses yet</h2>
              <p className="text-gray-400 mb-8">Discover our catalog and find the perfect courses to help you reach your learning goals.</p>
              <button
                onClick={() => router.push('/')}
                className="bg-purple-600 hover:bg-purple-700 text-white py-3 px-8 rounded-lg font-medium transition-colors duration-200 transform hover:scale-105"
              >
                Explore Course Catalog
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div className="container mx-auto px-6 py-12">
        {/* Dashboard Header */}
        <div className="bg-gradient-to-r from-indigo-900 to-purple-900 rounded-xl p-8 mb-10 shadow-lg">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">Your Learning Dashboard</h1>
              <p className="text-indigo-200 text-lg">
                You're currently enrolled in <span className="font-semibold text-white">{enrollmentCount}</span> course{enrollmentCount !== 1 ? 's' : ''}.
              </p>
            </div>
            <div className="mt-6 md:mt-0">
              <button
                onClick={() => router.push('/')}
                className="bg-indigo-600/50 hover:bg-indigo-600 text-white border border-indigo-400 py-2 px-6 rounded-lg transition-colors duration-200"
              >
                Browse More Courses
              </button>
            </div>
          </div>
        </div>

        {/* Progress Summary (Optional enhancement) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-gray-800 rounded-lg p-6 shadow-md border border-gray-700">
            <h3 className="text-lg font-medium text-gray-300 mb-2">In Progress</h3>
            <p className="text-3xl font-bold text-white">{enrollmentCount}</p>
          </div>
          <div className="bg-gray-800 rounded-lg p-6 shadow-md border border-gray-700">
            <h3 className="text-lg font-medium text-gray-300 mb-2">Completed</h3>
            <p className="text-3xl font-bold text-white">0</p>
          </div>
          <div className="bg-gray-800 rounded-lg p-6 shadow-md border border-gray-700">
            <h3 className="text-lg font-medium text-gray-300 mb-2">Total Hours</h3>
            <p className="text-3xl font-bold text-white">0</p>
          </div>
        </div>

        {/* Enrolled Courses */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            <span className="mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </span>
            Your Enrolled Courses
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {enrolledCourses.map((course) => (
              <EnrolledCourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}