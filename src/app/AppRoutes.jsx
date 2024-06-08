import { Route, Routes } from 'react-router-dom'
import Signin from '../component/signin/Signin'
import SignUp from '../component/signup/SignUp'
import Dashboard from '../component/dashboard/Dashboard'

export default function AppRoutes() {
    return (
        <Routes>
                <Route path="/" element={<Signin />} />
                <Route path="/sign-up" element={<SignUp />} />

                <Route path="/dashboard" element={<Dashboard />} />


        </Routes>
    )
}
