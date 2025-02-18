import { Route, Routes, Navigate } from 'react-router-dom'
import SignIn from '../pages/Admin/SignIn'
import NotFound from '../pages/NotFound'
import AdminDashboard from '../pages/Admin/AdminDashboard'
import { Toaster } from 'react-hot-toast'
import AdminProtectedRoute from './AdminProtectedRoute'

const AdminRoutes = () => {

  return (
    <div>
      <Toaster />
      <Routes>

        <Route path="/signin" element={<SignIn />} />
        
        <Route element={<AdminProtectedRoute />}>
          <Route path="/dashboard" element={<AdminDashboard />} />
        </Route>
        
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default AdminRoutes;
