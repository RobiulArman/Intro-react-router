import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home.jsx';
import About from './About.jsx';
import Contact from './Contact.jsx';
import User from './User.jsx';
import UserDetails from './UserDetails.jsx';
import ErrorPage from './ErrorPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path:'/about',
        element:<About></About>
      },
      {
        path:'/contact',
        element:<Contact></Contact>
      },
      {
        path:'/user',
        loader:() => fetch('https://jsonplaceholder.typicode.com/users'),
        element:<User></User>
      },
      {
        path:'/user/:userId',
        loader:({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`), 
        element:<UserDetails></UserDetails>
      }
    ]
  },

  // {
  //   path:'/about',
  //   element: <div>I am in the about page</div>
  // },
  // {
  //   path: '/contact',
  //   element:<div>Call me right Now</div>
  // }
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App />\
     */}
     <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
