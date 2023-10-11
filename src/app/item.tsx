import { Post } from '@prisma/client';
import React from 'react';
interface Props {
  post: Post;
}

const Item = ({ post }: Props) => {
  return (
    <div className="border runded-md p-4 flex flex-col">
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
  );
};

export default Item;
