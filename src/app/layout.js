import Navbar from '../components/Navbar';
import { Toaster } from 'react-hot-toast';
import './globals.css';
import Footer from '@/components/Footer';



export const metadata = {
  title: 'Course Enrollment Portal',
  description: 'Browse and enroll in courses',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
    
      <body className={'inter.className '} >
        <Navbar />
        
       {children}
        <Toaster position="bottom-right" />
        <Footer/>
      </body>
    </html>
  );
}