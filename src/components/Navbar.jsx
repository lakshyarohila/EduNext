"use client";
import { BookOpen, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import useStore from "../store/useStore";
import { motion } from "framer-motion";
import { useState } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const enrollmentCount = useStore((state) => state.getEnrollmentCount());
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 text-white shadow-lg border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="text-xl flex gap-2 items-center font-bold hover:text-purple-300 transition-colors duration-200"
            >
              <motion.div
                animate={{ y: [2, -10, 3] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
              >
                <BookOpen className="text-purple-400" />
              </motion.div>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-300">
                EduNext
              </span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white p-2 rounded-lg hover:bg-gray-800"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-2 md:space-x-4">
            <Link
              href="/"
              className={`px-3 py-2 rounded-lg transition-all duration-200 flex items-center ${
                pathname === "/"
                  ? "bg-purple-700/70 text-white font-medium shadow-md"
                  : "hover:bg-gray-800 text-gray-300 hover:text-white"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 md:h-6 md:w-6 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                />
              </svg>
              Courses
            </Link>

            <Link
              href="/dashboard"
              className={`px-3 py-2 rounded-lg transition-all duration-200 flex items-center ${
                pathname === "/dashboard"
                  ? "bg-purple-700/70 text-white font-medium shadow-md"
                  : "hover:bg-gray-800 text-gray-300 hover:text-white"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 md:h-6 md:w-6 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              My Dashboard
              {enrollmentCount > 0 && (
                <span className="ml-2 bg-indigo-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center shadow-md">
                  {enrollmentCount}
                </span>
              )}
            </Link>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-2 space-y-2 bg-gray-900/80 backdrop-blur-sm rounded-lg mb-2">
            <Link
              href="/"
              className={`px-3 py-2 rounded-lg transition-all duration-200 flex items-center mx-2 ${
                pathname === "/"
                  ? "bg-purple-700/70 text-white font-medium shadow-md"
                  : "hover:bg-gray-800 text-gray-300 hover:text-white"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                />
              </svg>
              Courses
            </Link>

            <Link
              href="/dashboard"
              className={`px-3 py-2 rounded-lg transition-all duration-200 flex items-center mx-2 ${
                pathname === "/dashboard"
                  ? "bg-purple-700/70 text-white font-medium shadow-md"
                  : "hover:bg-gray-800 text-gray-300 hover:text-white"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              My Dashboard
              {enrollmentCount > 0 && (
                <span className="ml-2 bg-indigo-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center shadow-md">
                  {enrollmentCount}
                </span>
              )}
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;