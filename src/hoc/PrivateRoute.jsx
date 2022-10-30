import { useContext } from "react"
import { useLocation, Navigate } from 'react-router-dom'

import { ProviderStoreReact } from '../storeLocationRules/ProviderStoreReact'

const PrivateRoute = ({ children }) => {
    const location = useLocation()
    const { googleAds } = useContext(ProviderStoreReact)
    if (!googleAds) {
        return <Navigate to="/login" state={{ from: location }} />
    }
    return children
}

export default PrivateRoute