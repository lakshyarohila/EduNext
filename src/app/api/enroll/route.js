import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const data = await request.json();
    
    
    if (!data.courseId) {
      return NextResponse.json(
        { error: 'Course ID is required' },
        { status: 400 }
      );
    }
    
   
    await new Promise(resolve => setTimeout(resolve, 800));
    
    return NextResponse.json({
      success: true,
      message: 'Successfully enrolled in the course',
      enrollment: {
        courseId: data.courseId,
        enrolledAt: new Date().toISOString()
      }
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to enroll in the course' },
      { status: 500 }
    );
  }
}