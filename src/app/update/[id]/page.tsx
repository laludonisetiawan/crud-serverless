'use client';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
const Page = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const router = useRouter()

  const handlesubmit = (e: any) => {
    e.preventDefault();
    router.push('/')
  };
  return (
    <form className="w-[500px] mx-auto pt-20 flex flex-col gap-2 " onSubmit={handlesubmit}>
      <input
        type="text"
        placeholder='Masukkan Judul'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className='w-full border p-2 rounded-md '
      />
      <input
        type="text"
        placeholder='Masukkan Konten'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className='w-full border p-2 rounded-md '
      />
      <button>Update </button>
    </form>
  );
};

export default Page;
