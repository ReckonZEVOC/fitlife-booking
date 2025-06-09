// File: app/page.tsx
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <section className="text-center py-16 bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-xl shadow-md">
        <h1 className="text-5xl font-bold mb-4">FitLife - Your Fitness Class Companion</h1>
        <p className="text-lg mb-6">Book fitness classes, track progress, and stay motivated.</p>
        <Button asChild className="text-lg px-6 py-4 bg-white text-blue-600 hover:bg-gray-200">
          <Link href="/login">Get Started</Link>
        </Button>
      </section>

      <section className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-white shadow-lg">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-2">Class Booking</h2>
            <p>Book yoga, pilates, HIIT, and more fitness classes at your convenience.</p>
          </CardContent>
        </Card>

        <Card className="bg-white shadow-lg">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-2">Progress Tracking</h2>
            <p>Monitor your workouts, goals, calories, and streaks all in one place.</p>
          </CardContent>
        </Card>

        <Card className="bg-white shadow-lg">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-2">Trainer Profiles</h2>
            <p>Learn about your trainers, view schedules, and get personalized plans.</p>
          </CardContent>
        </Card>
      </section>

      <section className="mt-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Join the FitLife Community</h2>
        <p className="mb-6">Thousands have transformed their lives. Why wait?</p>
        <Button asChild className="text-lg px-6 py-4">
          <Link href="/register">Sign Up Now</Link>
        </Button>
      </section>

      <footer className="mt-16 p-6 text-center text-gray-600">
        <p>© 2025 FitLife. All rights reserved.</p>
        <div className="flex justify-center gap-4 mt-2">
          <Link href="/classes" className="hover:underline">Classes</Link>
          <Link href="/dashboard" className="hover:underline">Dashboard</Link>
          <Link href="/trainers" className="hover:underline">Trainers</Link>
          <Link href="/admin" className="hover:underline">Admin Panel</Link>
        </div>
      </footer>
    </main>
  );
}
