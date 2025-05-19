"use client";

import { useState } from 'react';
import useStore from '../store/useStore';
import toast from 'react-hot-toast';

const CourseCard = ({ course }) => {
  const [enrolling, setEnrolling] = useState(false);
  const { enrollInCourse, isEnrolled } = useStore();
  
  const enrolled = isEnrolled(course.id);

  const handleEnroll = async () => {
    if (enrolled) return;
    
    setEnrolling(true);
    
    try {
      
      const response = await fetch('/api/enroll', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ courseId: course.id }),
      });
      
      const data = await response.json();
      
      if (data.success) {
        // Update local state
        const success = enrollInCourse(course);
        
        if (success) {
          toast.success(`Enrolled in ${course.title}`);
        } else {
          toast.error('You are already enrolled in this course');
        }
      } else {
        toast.error(data.error || 'Failed to enroll in the course');
      }
    } catch (error) {
      toast.error('An error occurred while enrolling');
    } finally {
      setEnrolling(false);
    }
  };

  return (
    <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-700 hover:shadow-purple-900/20 hover:border-purple-800/40 transition-all duration-300 flex flex-col">
      {/* Course Image */}
      <div className="h-48 bg-gradient-to-br from-purple-900 to-indigo-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/api/placeholder/400/300')] bg-cover bg-center opacity-30"></div>
        {course.level && (
          <span className="absolute top-4 right-4 bg-purple-700/80 text-purple-100 text-xs font-medium px-2 py-1 rounded-lg backdrop-blur-sm">
            {course.level} Level
          </span>
        )}
      </div>
      
      {/* Course Content */}
      <div className="p-6 flex-grow flex flex-col">
        <div className="mb-4">
          <h3 className="font-bold text-xl mb-2 text-white">{course.title}</h3>
          <p className="text-gray-400 text-sm flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span className="text-gray-300">{course.instructor}</span>
          </p>
        </div>
        
        <div className="flex items-center mb-4 space-x-2">
          <span className="text-gray-200 bg-gray-700 px-3 py-1 rounded-full text-xs flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {course.duration}
          </span>
          
          {course.category && (
            <span className="text-gray-200 bg-gray-700 px-3 py-1 rounded-full text-xs flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
              </svg>
              {course.category}
            </span>
          )}
        </div>
        
        <p className="text-gray-300 text-sm mb-6 flex-grow">{course.description}</p>
        
        {/* Price and Enrollment Section */}
        <div className="mt-auto">
          <div className="flex justify-between items-center mb-4">
            <div className="text-white font-bold text-xl">
              {course.price ? `$${course.price}` : 'Free'}
            </div>
            {course.rating && (
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-gray-300 ml-1">{course.rating}</span>
              </div>
            )}
          </div>
          
          <button
            onClick={handleEnroll}
            disabled={enrolling || enrolled}
            className={`w-full py-3 px-4 rounded-lg transition-all duration-300 font-medium ${
              enrolled
                ? 'bg-green-600 text-white cursor-default'
                : enrolling
                ? 'bg-indigo-500/50 text-white cursor-wait'
                : 'bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-purple-500/30'
            }`}
          >
            {enrolled
              ? 'Enrolled'
              : enrolling
              ? 'Enrolling...'
              : 'Enroll Now'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;