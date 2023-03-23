import './App.css'
import Home from './home/index1'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  BrowserRouter,
} from 'react-router-dom'
import ThreeD from './3d'
import NotFound from './notFound' // added import statement for NotFound component
import DPage1 from './3dPage1'
import DPage2 from './3dPage2'

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/3d" element={<ThreeD />} /> // changed component prop to
          element prop
          <Route path="*" element={<NotFound />} /> // changed component prop to
          element prop and added path
          <Route path="/home/3D1" element={<DPage1 />} />
          <Route path="/home/3D2" element={<DPage2 />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
