
import Link from 'next/link';

const EnrolledCourseCard = ({ course }) => {
  // Format the enrollment date to be more readable
  const formattedDate = new Date(course.enrolledAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg border border-gray-200">
      <div className="px-6 py-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-xl text-gray-800">{course.title}</h3>
          <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
            Enrolled
          </span>
        </div>

        <p className="text-gray-600 mb-2">
          <span className="font-medium">Instructor:</span> {course.instructor}
        </p>
        <p className=" text-white px-3 py-1 w-fit rounded-full bg-yellow-500 mb-2">
          <span className="font-medium">Duration:</span> {course.duration}
        </p>
        <p className="text-gray-600 mb-4">
          <span className="font-medium">Enrolled on:</span> {formattedDate}
        </p>
        
        <div className="mt-4">
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors">
            Continue Learning
          </button>
        </div>
      </div>
    </div>
  );
};

export default EnrolledCourseCard;