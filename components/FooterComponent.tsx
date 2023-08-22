import React from 'react';
import Link from 'next/link';

export default function FooterComponen() {
  return (
    <footer className="bg-gray-800 text-white py-8 w-full">
      <div className="container mx-auto text-center">
        <p className="text-xl font-semibold">Connect with Me</p>
        <div className="flex justify-center gap-4 mt-4">
          <Link href="https://github.com/yourusername">
            <i className="fab fa-github text-2xl cursor-pointer hover:text-gray-500 transition-colors"></i>
          </Link>
          <Link href="https://linkedin.com/in/yourusername">
            <i className="fab fa-linkedin-in text-2xl cursor-pointer hover:text-gray-500 transition-colors"></i>
          </Link>
          <Link href="mailto:youremail@example.com">
            <i className="fas fa-envelope text-2xl cursor-pointer hover:text-gray-500 transition-colors"></i>
          </Link>
        </div>
        <p className="mt-4">&copy; 2023 Your Name. All rights reserved.</p>
      </div>
    </footer>
  );
}
