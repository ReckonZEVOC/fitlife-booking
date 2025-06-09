// File: app/api/login/route.ts

import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { email, password } = await req.json();

  // Dummy user (simulate DB user)
  const validUser = {
    email: 'user@gmail.com',
    password: 'password'
  };

  if (email === validUser.email && password === validUser.password) {
    // Set cookie
    const response = NextResponse.json({ success: true, message: 'Login successful' });
    response.cookies.set('loggedIn', 'true', { httpOnly: true });
    return response;
  }

  return NextResponse.json({ success: false, message: 'Invalid credentials' }, { status: 401 });
}
