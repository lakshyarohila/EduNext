import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useStore = create(
  persist(
    (set, get) => ({
    
      enrolledCourses: [],
      
     
      enrollInCourse: (course) => {
        const { enrolledCourses } = get();
        
        
        if (enrolledCourses.some(c => c.id === course.id)) {
          return false; // Already enrolled
        }
        
        
        const enrollmentData = {
          ...course,
          enrolledAt: new Date().toISOString(),
        };
        
        set({ 
          enrolledCourses: [...enrolledCourses, enrollmentData]
        });
        
        return true; 
      },
      
     
      isEnrolled: (courseId) => {
        const { enrolledCourses } = get();
        return enrolledCourses.some(course => course.id === courseId);
      },
      
     
      getEnrolledCourses: () => {
        return get().enrolledCourses;
      },
      
     
      getEnrollmentCount: () => {
        return get().enrolledCourses.length;
      }
    }),
    {
      name: 'course-enrollment-storage', 
    }
  )
);

export default useStore;