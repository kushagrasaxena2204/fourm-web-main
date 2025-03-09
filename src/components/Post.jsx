import React from 'react';
import { useParams } from 'react-router-dom';

export default function Post() {
  const params = useParams();
  const id = localStorage.getItem('newData')
    ? JSON.parse(localStorage.getItem('newData'))
    : JSON.parse(localStorage.getItem('data'));

  const post = id.find((entry) => params.id === entry.id);

  if (!post) {
    return null; // Handle when the post is not found.
  }

  return (
    <div className='flex flex-col items-center bg-black text-white min-h-screen'>
      <div className='w-full max-w-screen-md bg-slate-800 my-5 p-4 rounded-xl'>
        <h1 className='text-2xl font-bold'>Posted by {post.username}</h1>
        <h1 className='text-4xl md:text-5xl text-yellow-400'>{post.heading}</h1>
        <p className='text-base md:text-xl py-3'>{post.content}</p>
        <h1 className='text-2xl py-3 px-4'>Comments</h1>
        {post.comments && post.comments.user && post.comments.sentence ? (
          <div className='p-4'>
            {post.comments.user.map((user, commentIndex) => (
              <div key={commentIndex} className='py-2'>
                <p className='font-bold'>{user}</p>
                <p>{post.comments.sentence[commentIndex]}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className='p-4'>No comments</p>
        )}
      </div>
    </div>
  );
}
