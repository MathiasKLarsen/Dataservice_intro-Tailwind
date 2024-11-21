import { createBrowserRouter, RouterProvider } from "react-router-dom"

// Default Navbar
import About from "./pages/About"
import Contact from "./pages/Contact"
import News from "./pages/News"
import Home from "./pages/Home"
import Page404 from "./pages/Page404"

// Layout filerne
import Layout from "./layout/Layout"
import AdminLayout from "./layout/AdminLayout"

// Css
import './App.css'

// JSONPlaceholder API
import Posts from './pages/JSONplaceholder/Posts'
import PostDetails from "./pages/JSONplaceholder/PostDetails"
import Photos from "./pages/JSONplaceholder/Photos"
import Todos from "./pages/JSONplaceholder/Todos"

// Swapi API
import StarShips from "./pages/Swapi/StarShips"

// NewsAPI
import Everything from "./pages/NewsAPI/Everything"
import Headlines from "./pages/NewsAPI/Headlines"

// Weather 
import OpenWeather from "./pages/openWeather/OpenWeather"
import OpenWeather2 from "./pages/openWeather/OpenWeather2"
import OpenWeather3 from "./pages/openWeather/OpenWeather3"
import OpenWeather4 from "./pages/openWeather/OpenWeather4"

// RapidAPI
import Hobbies from "./pages/RapidAPI/Hobbies"

// PocketBase
import Gaming from "./pages/PocketBase/Gaming"

// Admin
import HomeAdmin from "./pages/ADMIN/HomeAdmin"

function App() {

  const router = createBrowserRouter (
    [
      {
        path: "/", 
        element: <Layout />, 
        // errorElement: <PageNotFound />,
        children: [
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
          // JsonPlaceHolder
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
          // Swapi
          {
            path: "/starships" , element: <StarShips />
          },
          // NewsApi
          {
            path: "/everything" , element: <Everything />
          },          {
            path: "/headlines" , element: <Headlines />
          },
          // OpenWeather
          {
            path: "/openweather" , element: <OpenWeather />
          },
          {
            path: "/openweather2" , element: <OpenWeather2 />
          },
          {
            path: "/openweather3" , element: <OpenWeather3 />
          },
          {
            path: "/openweather4" , element: <OpenWeather4 />
          },
          // RapidAPI
          {
            path: "/hobbies" , element: <Hobbies />
          },
          // RapidAPI
          {
            path: "/gaming" , element: <Gaming />
          },
          // Page not found
          {
            path: "*", element: <Page404 />
          }
        ]
      },
      {
        path: "/admin", 
        element: <AdminLayout />, 
        // errorElement: <PageNotFound />,
        // outlet filen
        children: [
          { element: <HomeAdmin /> }
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
