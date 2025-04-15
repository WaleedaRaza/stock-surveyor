'use client'

import { useEffect, useState } from 'react';

export default function Home() {
  const [ping, setPing] = useState('');

  useEffect(() => {
    fetch('http://localhost:4000/api/ping')
      .then((res) => res.json())
      .then((data) => setPing(data.message))
      .catch((err) => console.error('Failed to reach BFF:', err));
  }, []);

  return (
    <main className="flex h-screen items-center justify-center bg-gray-900 text-white flex-col gap-4">
      <h1 className="text-4xl font-bold">StockSurveyor 🧠</h1>
      <p className="text-xl">Backend says: {ping || 'Loading...'}</p>
    </main>
  );
}
