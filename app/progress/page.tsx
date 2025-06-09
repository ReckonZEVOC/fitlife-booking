// File: app/progress/page.tsx
'use client';

import React from 'react';
import Image from 'next/image';

export default function ProgressPage() {
  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-blue-600 mb-8 text-center">📈 Your Fitness Progress</h1>

      <div className="bg-white p-8 rounded-xl shadow max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col items-center">
          <Image
            src="/myphoto.jpg"
            alt="Profile"
            width={150}
            height={150}
            className="rounded-full mb-4"
          />
          <h2 className="text-2xl font-bold mb-1">John Doe</h2>
          <p className="text-gray-600 mb-1">Email: john@example.com</p>
          <p className="text-gray-600 mb-1">Age: 28</p>
          <p className="text-gray-600">Member Since: Jan 2024</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">🏆 Achievements</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Completed 50+ Fitness Classes</li>
            <li>7-Day Workout Streak</li>
            <li>Lost 8 Kg in 3 Months</li>
            <li>Participated in Monthly Challenges</li>
          </ul>
        </div>
      </div>

      <div className="mt-10 max-w-4xl mx-auto">
        <h3 className="text-2xl font-bold mb-4 text-center">📊 Your Weekly Stats</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow text-center">
            <h4 className="text-xl font-bold text-green-600">6</h4>
            <p>Workouts This Week</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow text-center">
            <h4 className="text-xl font-bold text-blue-600">3,200</h4>
            <p>Calories Burned</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow text-center">
            <h4 className="text-xl font-bold text-purple-600">5 hrs</h4>
            <p>Total Workout Time</p>
          </div>
        </div>
      </div>
    </main>
  );
}
