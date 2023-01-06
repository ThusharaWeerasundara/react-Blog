import { Link } from "react-router-dom";


const Navbar = () => {
    return ( 

        <nav className="navbar">
            <h1>The Dojo Blog</h1>
            <div className = "links">

            {/*Using Link tags, React router prevents these requests from going to bacjend and handle it by it self*/}
            <Link to="/">Home</Link>
            <Link to="/create">New Blog</Link>
           

            </div>
        </nav>

     );
}
 
export default Navbar;