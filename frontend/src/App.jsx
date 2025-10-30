// import React from 'react'
// import { Route, Routes } from 'react-router-dom'
// import Navbar from './components/Navbar'
// import Home from './pages/Home'
// import Courses from './pages/Courses'
// import Contact from './pages/Contact'
// import Signup from './pages/Signup'
// import Login from './pages/Login'
// import Dashboard from './pages/Dashboard'

// const App = () => {
//   return (
//     <>
//       <Routes>
//         <Route path='/' element={<Home />}/>
//         <Route path='/courses' element={<Courses />}/>
//         <Route path='/contact' element={<Contact />}/>
//         <Route path='/signup' element={<Signup />}/>
//         <Route path='/login' element={<Login />}/>
//         <Route path='/dashboard' element={<Dashboard />}/>
        
//       </Routes>
//     </>
//   )
// }

// export default App







import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Courses from './pages/Courses'
import Contact from './pages/Contact'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/courses' element={<Courses />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/signup' element={<Signup />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/dashboard' element={<Dashboard />}/>
      </Routes>
    </div>
  )
}

export default App