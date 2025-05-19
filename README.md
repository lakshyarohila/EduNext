🚀 EduNext - Modern Course Selling Platform

https://cdn.pixabay.com/photo/2024/07/15/17/21/ai-generated-8897458_1280.jpg
✨ Overview
CourseHub is a modern course marketplace built with Next.js 15, offering a seamless experience for browsing and enrolling in courses. The platform features a responsive design, fluid animations, and a lightweight architecture focusing on performance.
🛠️ Tech Stack

Frontend: Next.js 15, Tailwind CSS, Framer Motion
Backend: Next.js API Routes
State Management: Zustand with persistence
Development: JavaScript

🔥 Key Features

📚 Browse a curated collection of courses
🔖 One-click enrollment system
📋 Track enrolled courses in personal dashboard
⚡ Fast, responsive UI with smooth animations
💾 Persistent state management (courses remain enrolled after page refresh)

🏗️ Architecture
API Endpoints
EndpointMethodDescription/api/coursesGETFetch all available courses/api/enrollPOSTEnroll in a specific course/api/my-coursesGETRetrieve user's enrolled courses
Backend Implementation
The backend uses Next.js API routes for simplicity and performance:
javascriptimport { NextResponse } from 'next/server';
import courses from '@/data/data';

export async function GET() {
  // Simulate a short delay to mimic a real API call
  await new Promise(resolve => setTimeout(resolve, 500));
  
  return NextResponse.json(courses);
}
State Management
CourseHub uses Zustand for global state management with localStorage persistence:
javascriptimport { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useStore = create(
  persist(
    (set, get) => ({
      // Store for enrolled courses
      enrolledCourses: [],
      
      // Action to add a course to enrolled courses
      enrollInCourse: (course) => {
        const { enrolledCourses } = get();
        
        // Check if already enrolled
        if (enrolledCourses.some(c => c.id === course.id)) {
          return false; // Already enrolled
        }
        
        // Add enrollment date
        const enrollmentData = {
          ...course,
          enrolledAt: new Date().toISOString(),
        };
        
        set({ 
          enrolledCourses: [...enrolledCourses, enrollmentData]
        });
        
        return true; // Successfully enrolled
      },
      
      // Check if a course is already enrolled
      isEnrolled: (courseId) => {
        const { enrolledCourses } = get();
        return enrolledCourses.some(course => course.id === courseId);
      },
      
      // Get all enrolled courses
      getEnrolledCourses: () => {
        return get().enrolledCourses;
      },
      
      // Get enrollment count
      getEnrollmentCount: () => {
        return get().enrolledCourses.length;
      }
    }),
    {
      name: 'course-enrollment-storage', // name of the item in localStorage
    }
  )
);

export default useStore;
📱 Responsive Design
CourseHub is fully responsive, providing an optimal viewing experience across a wide range of devices:

💻 Desktop
💻 Laptop
📱 Tablet
📱 Mobile

🚀 Getting Started
Prerequisites

Node.js 18.x or later
npm or yarn

Installation

Clone the repository:

bashgit clone https://github.com/lakshyarohila/EduNext
cd coursehub

Install dependencies:

bashnpm install
# or
yarn install

Run the development server:

bashnpm run dev
# or
yarn dev



🔮 Future Improvements

🔐 User authentication and authorization
💳 Payment integration
🎞️ Video streaming for course content
📊 Analytics dashboard for instructors
📝 Course rating and review system

📝 License
This project is licensed under the MIT License - see the LICENSE file for details.
👏 Acknowledgements

Next.js team for the amazing framework
Tailwind CSS for the utility-first CSS framework
Framer Motion for the animation library
Zustand for the simple state management


⭐ Built with ❤️ by Lakshya Rohila ⭐