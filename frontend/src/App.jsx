import React from 'react'
import {Route,Routes} from "react-router"
import ComplaintPage from './pages/complaintPage'
import TrackPage from './pages/trackPage'
import HomePage from './pages/homePage'
import RolePage from './pages/rolePage'
import AdminPage from './pages/adminPage'
import AdminLogin from './pages/adminLogin'
import ProtectedRoute from './components/protectedRoute'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<RolePage />} />

        <Route path="/home" element={<HomePage />} />
        <Route path="/submit" element={<ComplaintPage />} />
        <Route path="/status" element={<TrackPage />} />

        <Route path='/admin-login' element={<AdminLogin />} />
        <Route path='/admin' element={
          <ProtectedRoute>
          <AdminPage />
          </ProtectedRoute>} />
      </Routes>
    </div>
       
  )
}

export default App