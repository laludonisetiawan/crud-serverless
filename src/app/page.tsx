import React from 'react';
import Link from 'next/link';
const page = () => {
  return (
    <div className="w-[1000px] mx-auto pt-20">
      <Link
        href={'/create'}
        className="px-3 py-2 bg-zinc-900 hover:bg-zinc-800 rounded-md text-white"
      >
        Create
      </Link>
      <div className="flex flex-col mt-8 gap-4  ">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_, i) => (
          <div key={i} className="border runded-md p-4 flex flex-col">
            <h2 className='text-sm'>ID ...</h2>
            <h1>Title</h1>
            <p>Content</p>
            <div className="inline-flex mt-4 gap-4">
              <button className="relative text-xs hover:text-zinc-800 font-bold">Update</button>
              <button className=" text-xs text-red-500 hover:text-red-400 font-bold">Delete</button >
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
