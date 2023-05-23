import Home from "./components/Home"
import Details from "./components/Details";
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/product/{id}" element={< Details></Details>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App