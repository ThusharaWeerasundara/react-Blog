import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <p>That page is not found</p>
            <Link to = "/"> Back to Home...</Link>
        </div>
     );
}
 
export default NotFound;