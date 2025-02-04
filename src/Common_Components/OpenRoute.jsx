// This will prevent authenticated users from accessing this route
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function OpenRoute({ children }) {
    // Get Authentication Token From Redux Store
    const { authenticationToken, user } = useSelector((state) => state.auth);

    if (authenticationToken === null) {
        return children;
    } else {
    }
}

export default OpenRoute;
