import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../login/Login'
import Dashboard from '../dashboard/Dashboard'
import Inventory from '../inventory/Inventory'
import PrivateRoute from '../core/compoents/PrivateRoute'
type Props = {}

export default function AppRoutes({ }: Props) {
    return (
        <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/dashboard' element={<PrivateRoute><Dashboard /></PrivateRoute>} />
            <Route path='/inventory' element={<PrivateRoute><Inventory /></PrivateRoute>} />
        </Routes>
    )
}