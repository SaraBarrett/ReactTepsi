import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Homepage } from './pages/Homepage'
import { Shopping } from './pages/Shopping'
import {Events} from './pages/Events'
import {Exs} from './pages/Exs'

const router = createBrowserRouter([
  {path:'/', element: <Homepage/>},
  {path:'/shopping', element:<Shopping/>},
  {path:'/events', element: <Events/>},
  {path:'/exs', element:<Exs/>},
])


function App() {

  return <RouterProvider router={router}/>

}

export default App;
