import { NextResponse } from 'next/server';

type User = {
  fullName: string;
  email: string;
  password: string;
};

// For demo purposes, we’ll just save users in memory (won't persist on server restart)
const users: User[] = [];

export async function POST(req: Request) {
  const { fullName, email, password } = await req.json();

  if (!fullName || !email || !password) {
    return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
  }

  // Check if email already exists
  const userExists = users.find(user => user.email === email);
  if (userExists) {
    return NextResponse.json({ message: 'Email already registered' }, { status: 409 });
  }

  // Add new user to "database"
  users.push({ fullName, email, password });

  return NextResponse.json({ message: 'User registered successfully' });
}
