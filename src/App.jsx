import { createBrowserRouter, RouterProvider } from "react-router-dom"

import About from "./pages/About"
import Contact from "./pages/Contact"
import News from "./pages/News"
import Home from "./pages/Home"
import Page404 from "./pages/Page404"
import Layout from "./layout/Layout"

import './App.css'
import Posts from './pages/JSONplaceholder/Posts'
import PostDetails from "./pages/JSONplaceholder/PostDetails"

import Photos from "./pages/JSONplaceholder/Photos"
import Todos from "./pages/JSONplaceholder/Todos"
import StarShips from "./pages/Swapi/StarShips"

function App() {

  const router = createBrowserRouter (
    [
      {
        path: "/", element: <Layout />, children: [
          {
            index: true, element: <Home />
          },
          {
            path: "/about", element: <About />
          },
          {
            path: "/news", element: <News />
          },
          {
            path: "/contact", element: <Contact />
          },
          {
            path: "/posts", element: <Posts />
          },
          {
            path: "/postdetails/:id", element: <PostDetails />
          },
          {
            path: "/photos", element: <Photos />
          },
          {
            path: "/todos" , element: <Todos />
          },
          {
            path: "/starships" , element: <StarShips />
          },
          {
            path: "*", element: <Page404 />
          }
        ]
      }
    ]
  )

  return (
    <section className="container mx-auto border-4 border-red-600 rounded-xl sm:border-green-800 md:border-blue-600 lg:border-purple-800 xl:border-yellow-300 2xl:border-orange-600">
      <RouterProvider router={router} />
    </section>
  )
}

export default App
