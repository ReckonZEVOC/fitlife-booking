// File: app/register/page.tsx
import React from 'react';
import { Button } from "@/components/ui/button";

export default function RegisterPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100 p-6">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center">Create a FitLife Account</h1>
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700">Full Name</label>
            <input type="text" className="w-full p-3 border rounded" placeholder="John Doe" required />
          </div>
          <div>
            <label className="block text-gray-700">Email</label>
            <input type="email" className="w-full p-3 border rounded" placeholder="you@example.com" required />
          </div>
          <div>
            <label className="block text-gray-700">Password</label>
            <input type="password" className="w-full p-3 border rounded" placeholder="Create a password" required />
          </div>
          <Button className="w-full">Register</Button>
        </form>
        <p className="text-sm text-gray-600 mt-4 text-center">
          Already have an account? <a href="/login" className="text-blue-600 hover:underline">Login</a>
        </p>
      </div>
    </main>
  );
}
