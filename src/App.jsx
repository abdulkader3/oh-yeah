
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Nextpage from './pages/Nextpage'

function App() {
  const kader = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<Home />} />
        <Route path='/Nextpage' element={<Nextpage />} />
      </Route>
    )
  )
  
 

  return (
    <>
    <RouterProvider router={kader} />
     
    </>
  )
}

export default App
