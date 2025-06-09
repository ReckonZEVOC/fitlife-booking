// File: app/classes/page.tsx
'use client';

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import Footer from '@/app/components/Footer';

export default function ClassesPage() {
  const [selectedClass, setSelectedClass] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleBookClick = (type: string) => {
    setSelectedClass(type);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Class booked for ${selectedClass}!\nName: ${formData.name}\nEmail: ${formData.email}\nDate: ${formData.date}\nTime: ${formData.time}`);
    setSelectedClass(null);
    setFormData({ name: '', email: '', date: '', time: '' });
  };

  return (
    <>
    <main className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold mb-8 text-center text-blue-600">📅 Book a Fitness Class</h1>

      {selectedClass ? (
        <div className="max-w-xl mx-auto bg-white p-8 rounded-xl shadow">
          <h2 className="text-2xl font-semibold mb-4">Book {selectedClass} Class</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border rounded"
                required
              />
            </div>
            <div>
              <label className="block mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border rounded"
                required
              />
            </div>
            <div>
              <label className="block mb-1">Date</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full p-3 border rounded"
                required
              />
            </div>
            <div>
              <label className="block mb-1">Time</label>
              <select
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="w-full p-3 border rounded"
                required
              >
                <option value="">Select a time</option>
                <option value="06:00 AM">06:00 AM</option>
                <option value="09:00 AM">09:00 AM</option>
                <option value="12:00 PM">12:00 PM</option>
                <option value="06:00 PM">06:00 PM</option>
              </select>
            </div>
            <div className="flex justify-between">
              <Button type="submit" className="bg-green-500 hover:bg-green-600">Confirm Booking</Button>
              <Button type="button" onClick={() => setSelectedClass(null)} variant="outline">Cancel</Button>
            </div>
          </form>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {["Yoga", "HIIT", "Pilates", "Zumba", "Strength", "Cardio"].map((type) => (
            <div key={type} className="bg-white p-6 rounded-xl shadow hover:shadow-lg">
              <h2 className="text-xl font-semibold mb-2">{type} Class</h2>
              <p className="mb-4">Join our {type} sessions to improve flexibility, stamina, and energy levels.</p>
              <Button className="w-full" onClick={() => handleBookClick(type)}>Book Now</Button>
            </div>
          ))}
        </div>
      )}
    </main>
    <Footer />
    </>
  );
}
