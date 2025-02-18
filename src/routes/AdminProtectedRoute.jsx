import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const AdminProtectedRoute = () => {
    
const admin = useSelector((state) => state.admin.admin);
return admin ? <Outlet /> : <Navigate to="/admin/signin" replace />;
 
}

export default AdminProtectedRoute
