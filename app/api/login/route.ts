// File: app/api/login/route.ts

import { NextResponse } from 'next/server';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/lib/firebase'; // Adjust the path based on your structure

export async function POST(req: Request) {
  const { email, password } = await req.json();

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // You could set a session or token here if needed
    const response = NextResponse.json({
      success: true,
      message: 'Login successful',
      uid: user.uid,
      email: user.email,
    });

    // Set cookie (optional)
    response.cookies.set('loggedIn', 'true', { httpOnly: true });

    return response;
  } catch (error: any) {
    return NextResponse.json({
      success: false,
      message: error.message || 'Login failed',
    }, { status: 401 });
  }
}
