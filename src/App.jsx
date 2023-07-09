import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  Route, 
  RouterProvider 
} from 'react-router-dom'

// importing components
import Home from './Pages/Home';
import Rootlayouts from './Layouts/Rootlayouts';


// creating routes

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Rootlayouts/>}>
      <Route index element={<Home/>}/>
    </Route>
    
  )
)

function App() {
  return (
    <RouterProvider router={router} />
    
  );
}

export default App;
