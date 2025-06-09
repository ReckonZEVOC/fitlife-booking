'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import Image from 'next/image';
import { FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

export default function DashboardPage() {
  const router = useRouter();
  const [showGreeting, setShowGreeting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowGreeting(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const handleLogout = async () => {
    await fetch('/api/logout', { method: 'POST' });
    router.push('/login');
  };

  return (
    <main className="min-h-screen bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 p-8 flex flex-col">
      {/* Header */}
      <header className="flex justify-between items-center mb-10 max-w-6xl mx-auto w-full">
        <h1
          className={`text-4xl font-extrabold text-indigo-700 opacity-0 transform transition-opacity duration-700 ${
            showGreeting ? 'opacity-100 translate-y-0' : '-translate-y-5'
          }`}
        >
          🏋️‍♀️ FitLife Dashboard
        </h1>
        <Button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 transition-colors duration-300"
        >
          Logout
        </Button>
      </header>

      {/* Profile Section */}
      <section className="flex items-center space-x-6 max-w-6xl mx-auto w-full mb-12">
        <div className="relative w-28 h-28 rounded-full overflow-hidden shadow-xl hover:scale-105 transition-transform duration-500 cursor-pointer">
          <Image
            src="/myphoto.jpg" // Make sure this image exists in /public/profile/userpic.jpg
            alt="Profile Picture"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-indigo-900">
            Welcome back, <span className="text-indigo-600">John Doe</span>!
          </h2>
          <p className="mt-1 text-indigo-700">Ready for your next workout?</p>
        </div>
      </section>

      {/* Dashboard Cards */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto w-full">
        {[
          { title: 'Booked Classes', value: 5, icon: '📅' },
          { title: 'Achievements', value: 12, icon: '🏆' },
          { title: 'Progress', value: '75%', icon: '📈' },
          { title: 'Upcoming Sessions', value: 3, icon: '⏰' },
        ].map(({ title, value, icon }, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center justify-center cursor-pointer transform hover:scale-105 transition-transform duration-300"
          >
            <div className="text-5xl mb-4">{icon}</div>
            <div className="text-3xl font-bold text-indigo-600">{value}</div>
            <div className="mt-2 text-indigo-800 font-semibold">{title}</div>
          </div>
        ))}
      </section>

      {/* Main Links Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto w-full mt-12">
        <Link href="/classes" className="block">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg cursor-pointer h-full flex flex-col justify-center">
            <h2 className="text-xl font-semibold mb-2 text-indigo-700">📅 Book a Class</h2>
            <p className="text-indigo-800">Reserve your spot in Yoga, HIIT, Pilates, and more.</p>
          </div>
        </Link>

        <Link href="/progress" className="block">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg cursor-pointer h-full flex flex-col justify-center">
            <h2 className="text-xl font-semibold mb-2 text-indigo-700">📈 Track Progress</h2>
            <p className="text-indigo-800">Visualize your fitness streak, goals, and calories burned.</p>
          </div>
        </Link>

        <Link href="/trainers" className="block">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg cursor-pointer h-full flex flex-col justify-center">
            <h2 className="text-xl font-semibold mb-2 text-indigo-700">🧑‍🏫 Meet Trainers</h2>
            <p className="text-indigo-800">View trainer profiles, bios, and contact info.</p>
          </div>
        </Link>
      </section>

      {/* CTA Button */}
      <div className="mt-12 max-w-6xl mx-auto w-full text-center">
        <button className="bg-indigo-600 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-indigo-700 transition-colors duration-300 transform hover:scale-105">
          Book a New Class
        </button>
      </div>

      {/* Quick Links */}
      <section className="mt-16 max-w-6xl mx-auto w-full">
        <h3 className="text-2xl font-bold mb-4 text-indigo-700">Quick Links</h3>
        <div className="flex flex-wrap gap-6">
          <Link href="/classes" className="text-indigo-600 hover:underline">Class Booking</Link>
          <Link href="/progress" className="text-indigo-600 hover:underline">Progress Dashboard</Link>
          <Link href="/trainers" className="text-indigo-600 hover:underline">Trainer Info</Link>
          <Link href="/settings" className="text-indigo-600 hover:underline">Settings</Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto bg-indigo-900 text-indigo-100 p-8 mt-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-6">
          <div>
            <h4 className="font-semibold mb-3">Company</h4>
            <ul>
              <li><Link href="#" className="hover:underline">About Us</Link></li>
              <li><Link href="#" className="hover:underline">Careers</Link></li>
              <li><Link href="#" className="hover:underline">Press</Link></li>
              <li><Link href="#" className="hover:underline">Corporate Wellness</Link></li>
              <li><Link href="#" className="hover:underline">Reviews</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Resources</h4>
            <ul>
              <li><Link href="#" className="hover:underline">Benefit Blog</Link></li>
              <li><Link href="#" className="hover:underline">Resource Center</Link></li>
              <li><Link href="#" className="hover:underline">Support</Link></li>
              <li><Link href="#" className="hover:underline">Help Center</Link></li>
              <li><Link href="#" className="hover:underline">Language</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Partners</h4>
            <ul>
              <li><Link href="#" className="hover:underline">Partner Program</Link></li>
              <li><Link href="#" className="hover:underline">Affiliate</Link></li>
              <li><Link href="#" className="hover:underline">Earnings Calculator</Link></li>
              <li><Link href="#" className="hover:underline">API Docs</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Community</h4>
            <ul>
              <li><Link href="#" className="hover:underline">Refer a Friend</Link></li>
              <li><Link href="#" className="hover:underline">Blog</Link></li>
              <li><Link href="#" className="hover:underline">Activities</Link></li>
              <li><Link href="#" className="hover:underline">Popular Studios</Link></li>
            </ul>
          </div>
          <div>
             <h4 className="font-semibold mb-2">Follow Us</h4>
                        <div className="flex space-x-4 mt-2">
                          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-pink-400" aria-label="Instagram">
                            <FaInstagram className="w-6 h-6" />
                          </a>
                          <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-blue-600" aria-label="Facebook">
                            <FaFacebookF className="w-6 h-6" />
                          </a>
                          <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-sky-400" aria-label="Twitter">
                            <FaTwitter className="w-6 h-6" />
                          </a>
                          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-blue-700" aria-label="LinkedIn">
                            <FaLinkedinIn className="w-6 h-6" />
                          </a>
                        </div>
                        </div>
        </div>
        <p className="text-center mt-8 text-sm text-indigo-300">&copy; 2025 FitLife. All rights reserved.</p>
      </footer>
    </main>
  );
}
