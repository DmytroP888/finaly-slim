import { useLocation, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const PrivateRoute = ({ children }) => {
    const location = useLocation()
    const { userInfo } = useSelector((state) => state.user)

    if (!userInfo) {
        return <Navigate to="/login" state={{ from: location }} />
    }

    return children
}

export default PrivateRoute