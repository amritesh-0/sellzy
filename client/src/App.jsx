import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { lazy } from "react"
import HomePage from "./pages/Home/homePage"


// Lazy Imports 
const LoginPage = lazy(()=> import("./pages/login/loginPage"))

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
      </Routes>
    </Router>
  )
}

export default App
