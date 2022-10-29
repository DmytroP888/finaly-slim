import { useLocation, Navigate } from 'react-router-dom'

import { GoogleAds } from '../store/userSlice'

const PrivateRoute = ({ children }) => {
    const google = GoogleAds('google')
    const location = useLocation()
    if (!google) {
        return <Navigate to="/login" state={{ from: location }} />
    }

    return children
}

export default PrivateRoute