import React from 'react';

export default function AdminPage() {
  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold mb-8 text-center">Admin Panel</h1>
      <p className="text-center text-gray-700 mb-4">Manage users, classes, and trainers here.</p>

      <div className="max-w-3xl mx-auto grid gap-6">
        <button className="bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition">
          Manage Users
        </button>
        <button className="bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
          Manage Classes
        </button>
        <button className="bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition">
          Manage Trainers
        </button>
      </div>
    </main>
  );
}
