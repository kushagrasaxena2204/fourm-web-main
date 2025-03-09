import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Data from './data';
import SignUp from './pages/auth/SignUp';
import Layout from './components/Layout';
import ForumPage from './pages/forumPage';
import SignIn from './pages/auth/SignIn';
import UserPage from './pages/UserPage';

import { useState } from 'react';
import Post from './components/Post';

function App() {
  const [isAuthenticated,setIsAuthenticated]=useState(false)
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout isAuthenticated={isAuthenticated}/>,
      children: [
        {
          path: "/",
          element: <Data isAuthenticated={isAuthenticated}/>
        },

        {
          path: "/SignIn",
          element: <SignIn setIsAuthenticated={setIsAuthenticated}/>,
        },
        {
          path: "/SignUp",
          element: <SignUp setIsAuthenticated={setIsAuthenticated}/>
        },
        {
          path: "/forumpage",
          element: <ForumPage />
        },
        {
          path:'/user',
          element:<UserPage setIsAuthenticated={setIsAuthenticated}/>
        },
        {path:"/:id",
         element:<Post/>}
      ]
    }
  ]);

  return (
    <RouterProvider router={router} />
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
