import './App.css'
import Home from './home'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import ThreeD from './3d'
import NotFound from './notFound' // added import statement for NotFound component

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/3d" element={<ThreeD />} /> // changed component prop to element prop
          <Route path="*" element={<NotFound />} /> // changed component prop to element prop and added path
        </Routes>
      </Router>
    </div>
  )
}

export default App
