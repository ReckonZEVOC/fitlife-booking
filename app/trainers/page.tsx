// File: app/trainers/page.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import { FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const trainers = [
  {
    name: 'Aarav Mehra',
    specialty: 'Yoga & Mindfulness',
    bio: 'Certified yoga instructor with 8+ years of experience in helping clients improve flexibility, reduce stress, and find balance.',
    image: '/aarav.jpg'
  },
  {
    name: 'Riya Kapoor',
    specialty: 'HIIT & Weight Loss',
    bio: 'Dynamic trainer focused on high intensity interval training, fat burn, and personalized diet plans.',
    image: '/riya.jpg'
  },
  {
    name: 'Kabir Singh',
    specialty: 'Strength Training',
    bio: 'Bodybuilding expert who helps you build muscle and boost endurance through tailored routines.',
    image: '/kabir.jpg'
  },
  {
    name: 'Neha Sharma',
    specialty: 'Zumba & Cardio',
    bio: 'Energetic Zumba coach known for turning workouts into fun dance parties while keeping it intense.',
    image: '/neha.jpg'
  },
];

export default function TrainersPage() {
  return (
    <>
      <main className="min-h-screen bg-gray-100 p-6">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-10">💪 Meet Our Trainers</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {trainers.map((trainer, index) => (
            <div key={index} className="bg-white rounded-xl shadow p-6 flex flex-col items-center hover:shadow-lg transition">
              <Image
                src={trainer.image}
                alt={trainer.name}
                width={150}
                height={150}
                className="rounded-full mb-4 object-cover"
              />
              <h2 className="text-2xl font-bold text-gray-800 mb-1">{trainer.name}</h2>
              <p className="text-blue-600 font-semibold mb-2">{trainer.specialty}</p>
              <p className="text-center text-gray-600">{trainer.bio}</p>
            </div>
          ))}
        </div>
      </main>

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
        <div className="text-center mt-10 text-gray-400 text-xs">
          &copy; {new Date().getFullYear()} FitLife. All rights reserved. | Language: English (United States)
        </div>
      </footer>
    </>
  );
}
