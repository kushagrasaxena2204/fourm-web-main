import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ForumPage() {
  const [heading, setHeading] = useState('');
  const [content, setContent] = useState('');
  const [username] = useState(JSON.parse(localStorage.getItem('name')));
  const navigate = useNavigate();
  const id = Math.random() * 100;

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPost = { heading, content, username, id };
    const existingData = localStorage.getItem('newData')
      ? JSON.parse(localStorage.getItem('newData'))
      : JSON.parse(localStorage.getItem('data')) || [];
    existingData.push(newPost);
    localStorage.setItem('newData', JSON.stringify(existingData));

    setHeading('');
    setContent('');
    navigate('/');
  };

  return (
    <div className="bg-slate-800 text-white min-h-screen flex flex-col items-center p-8 space-y-4">
      <h1 className="text-2xl font-bold mb-4">Create Your Post</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
        <div>
          <label htmlFor="heading" className="text-lg font-medium">
            Title
          </label>
          <input
            id="heading"
            type="text"
            className="w-full p-2 text-black rounded-lg border border-gray-300 focus:outline-none focus:border-purple-400"
            value={heading}
            onChange={(e) => setHeading(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="content" className="text-lg font-medium">
            Content
          </label>
          <textarea
            id="content"
            className="w-full p-2 text-black rounded-lg border border-gray-300 focus:outline-none focus:border-purple-400"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows="8"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full py-3 bg-purple-500 text-white font-semibold rounded-lg hover:bg-purple-600 focus:outline-none focus:ring focus:ring-purple-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
