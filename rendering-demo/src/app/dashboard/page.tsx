"use client";

import { useState } from 'react';

export default function DashboardPage() {
  const [name, setName] = useState('');

  return (
    <>
      <h1>Dashboard</h1>
      <input
        defaultValue={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
      <p>Hello, {name}</p>
    </>
  );
}
