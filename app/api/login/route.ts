// File: app/api/login/route.ts
import { NextResponse } from 'next/server';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/lib/firebase'; // Adjust path if needed

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    const response = NextResponse.json({ success: true, message: 'Login successful', user: user.email });
    response.cookies.set('loggedIn', 'true', { httpOnly: true });
    return response;
  } catch (error: any) {
    return NextResponse.json({ success: false, message: error.message }, { status: 401 });
  }
}