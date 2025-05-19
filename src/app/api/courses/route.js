import { NextResponse } from 'next/server';
import courses from '@/data/data';

export async function GET() {
  
  await new Promise(resolve => setTimeout(resolve, 500));
  
  return NextResponse.json(courses);
}