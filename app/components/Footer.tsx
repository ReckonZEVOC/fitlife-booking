'use client';

import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white mt-16 p-10">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
        <div>
          <h4 className="font-semibold mb-2">Company</h4>
          <ul>
            <li>About us</li>
            <li>Why Studio Fitness</li>
            <li>Careers</li>
            <li>Press</li>
            <li>Reviews</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Support</h4>
          <ul>
            <li>Contact us</li>
            <li>Help center</li>
            <li>How credits work</li>
            <li>Corporate wellness</li>
            <li>BeneFit blog</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Resources</h4>
          <ul>
            <li>Playlist</li>
            <li>Our program</li>
            <li>How it works</li>
            <li>Refer your company</li>
            <li>Resource center</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Community</h4>
          <ul>
            <li>Refer a friend</li>
            <li>Become an affiliate</li>
            <li>Activities</li>
            <li>Popular studios</li>
          </ul>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-blue-400">Instagram</a>
            <a href="#" className="hover:text-blue-400">Facebook</a>
            <a href="#" className="hover:text-blue-400">Twitter</a>
            <a href="#" className="hover:text-blue-400">YouTube</a>
          </div>
        </div>
      </div>
      <div className="text-center mt-10 text-gray-400 text-xs">
        &copy; {new Date().getFullYear()} FitLife. All rights reserved. | Language: English (United States)
      </div>
    </footer>
  );
}
