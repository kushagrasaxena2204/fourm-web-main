import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import unfilled from "./unfilled_upvote.svg";
import filled from "./upvote_filled.svg";
import comms from "./pngegg.png";
import AddInitialData from './forumdata';
import data from './forumdata';

export default function Data({ isAuthenticated }) {
  const [reversedForums, setReversedForums] = useState([]);

  useEffect(() => {
    const forumDataFromLocalStorage = localStorage.getItem('newData')
      ? JSON.parse(localStorage.getItem('newData'))
      : JSON.parse(localStorage.getItem('data')) || [];
    const forumsWithUpvote = forumDataFromLocalStorage.map(entry => ({
      ...entry,
      upvoted: false,
      comment: false
    }));
    setReversedForums(forumsWithUpvote.reverse());
  }, []);

  function handleUpvote(index) {
    const updatedForums = [...reversedForums];
    updatedForums[index].upvoted = !updatedForums[index].upvoted;
    setReversedForums(updatedForums);
  }

  function handleComments(index) {
    const updatedForums = [...reversedForums];
    updatedForums[index].comment = !updatedForums[index].comment;
    setReversedForums(updatedForums);
  }

  function handleSubmit(coments) {}

  return (
    <div className='flex flex-col items-center bg-black'>
      {isAuthenticated ? (
        <Link to="/forumpage" className='text-black p-3 rounded-xl bg-white absolute right-20 top-[7rem]'>
          Create Post
        </Link>
      ) : (
        <h1 className='text-white pt-10 left-2 top-[7rem]'>
          Kindly Login Or Register to Create A Post!
        </h1>
      )}
      {reversedForums.map((entry, index) => (
        <div key={index} className='w-full max-w-screen-md bg-red my-5 px-5 py-5 bg-slate-800 text-white rounded-xl'>
          <h1 className='flex mb-2'>
            <h2 className='text-gray-500 mr-1'>Posted by</h2>
            <Link to={`/${entry.id}`}>{entry.username}</Link>
          </h1>
          <Link to={`/${entry.id}`}><h1 className='text-2xl text-yellow-400'>{entry.heading}</h1></Link>
          <Link to={`/${entry.id}`}><p className='text-xl py-3'>{entry.content}</p></Link>
          <div className='flex items-center'>
            <img
              className='h-7 w-7 cursor-pointer mr-2'
              onClick={() => handleUpvote(index)}
              src={entry.upvoted ? filled : unfilled}
            />
            <span className="mr-4">Upvote</span>
            <img
              className='h-7 w-7 cursor-pointer'
              onClick={() => handleComments(index)}
              src={comms}
            />
            <span className="ml-2">Comments</span>
          </div>
          {entry.comment && entry.comments && entry.comments.user && entry.comments.sentence ? (
            <div className='px-5'>
              {entry.comments.user.map((user, commentIndex) => (
                <div key={commentIndex} className='py-2'>
                  <p className='font-bold'>{user}</p>
                  <p>{entry.comments.sentence[commentIndex]}</p>
                </div>
              ))
              }
            </div>
          ) : (
            <p className='px-5 py-2'></p>
          )}
        </div>
      ))}
    </div>
  );
}
localStorage.setItem('data', JSON.stringify(data));
