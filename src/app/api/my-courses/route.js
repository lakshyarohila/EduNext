import { NextResponse } from 'next/server';
import courses from '@/data/data';

export async function POST(request) {
  try {
    const data = await request.json();
    
   
    
    if (!data.courseIds || !Array.isArray(data.courseIds)) {
      return NextResponse.json(
        { error: 'Course IDs array is required' },
        { status: 400 }
      );
    }
    
    
    const enrolledCourses = courses.filter(course => 
      data.courseIds.includes(course.id)
    );
    
    
    await new Promise(resolve => setTimeout(resolve, 500));
    
    return NextResponse.json(enrolledCourses);
    
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch enrolled courses' },
      { status: 500 }
    );
  }
}