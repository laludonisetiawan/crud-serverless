import React from 'react';
import Link from 'next/link';
const getPosts = async () => {
  const res = await fetch(process.env.BASE_URL + '/api/post', {
    next: { revalidate: 0 },
  });
  const json = await res.json();
  return json;
};

const page = async () => {
  const posts = await getPosts();
  return (
    <div className="w-[1000px] mx-auto pt-20">
      <Link
        href={'/create'}
        className="px-3 py-2 bg-zinc-900 hover:bg-zinc-800 rounded-md text-white"
      >
        Create
      </Link>
      <div className="flex flex-col mt-8 gap-4  ">
        {posts.posts.map((post: any, index: number) => (
          <div key={index} className="border runded-md p-4 flex flex-col">
            <h2 className="text-sm">ID {post.id}</h2>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
            <div className="inline-flex mt-4 gap-4">
              <button className="relative text-xs hover:text-zinc-800 font-bold">
                Update
              </button>
              <button className=" text-xs text-red-500 hover:text-red-400 font-bold">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
