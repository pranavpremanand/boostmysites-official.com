import { Navigate, useLocation } from "react-router-dom";

const NormalizeSlash = ({ children }) => {
    const location = useLocation();
    const { pathname } = location;
  
    // Redirect if the path ends with a slash (and is not just the root "/")
    if (pathname.length > 1 && pathname.endsWith('/')) {
      return <Navigate to={pathname.slice(0, -1)} replace />;
    }
  
    return children;
  };
  
  export default NormalizeSlash;