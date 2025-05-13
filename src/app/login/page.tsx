'use client';

import * as React from 'react';
import * as Label from '@radix-ui/react-label';
import * as Toast from '@radix-ui/react-toast';
import { useState } from 'react';


export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [open, setOpen] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login
    if (email && password) {
      setOpen(true);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded shadow-md w-full max-w-md space-y-6"
      >
        <h2 className="text-2xl font-semibold text-gray-700">Staffing Portal Login</h2>

        <div>
          <Label.Root htmlFor="email" className="block mb-1 text-sm font-medium text-gray-600">
            Email
          </Label.Root>
          <input
            id="email"
            type="email"
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <Label.Root htmlFor="password" className="block mb-1 text-sm font-medium text-gray-600">
            Password
          </Label.Root>
          <input
            id="password"
            type="password"
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition"
        >
          Login
        </button>
      </form>

      <Toast.Provider swipeDirection="right">
        <Toast.Root open={open} onOpenChange={setOpen} className="bg-green-600 text-white p-4 rounded shadow-md">
          <Toast.Title className="font-medium">Login successful</Toast.Title>
          <Toast.Description>Welcome to the staffing portal.</Toast.Description>
        </Toast.Root>
        <Toast.Viewport className="fixed bottom-4 right-4" />
      </Toast.Provider>
    </div>
  );
}
