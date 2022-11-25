import { useLocation, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const PrivateRoute = ({ children }) => {
    const location = useLocation()
    const { userInfo } = useSelector((state) => state.user)
    const tokenACC = userInfo && userInfo.accessToken
    if (!tokenACC) {
        return <Navigate to="/login" state={{ from: location }} />
    }
    return children
}

export default PrivateRoute