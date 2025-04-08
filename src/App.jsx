import './App.css'
// import components dari pages
import Loading from './pages/Loading'
import Home from './pages/Home'
// data portfolio
// memanggil route dom
import  {BrowserRouter, Routes, Route} from 'react-router-dom'
function App() {
  return (

    // membuat enyambung ke path lain
    <BrowserRouter>
    <Routes>
     
      < Route path='Home' element={<Home />} />
      < Route path='/' element={<Loading  />} />
     
    


    </Routes>
    </BrowserRouter>
    
  )
}

export default App