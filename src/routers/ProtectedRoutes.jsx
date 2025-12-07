import { Navigate } from 'react-router'
export default function ProtectedRoutes({ isAllowed, redirectPath, children}) {
    if(!isAllowed) return <Navigate to ={redirectPath} />
    return children
}

