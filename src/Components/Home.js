
import useFetch from "../Hooks/useFetch";
import BlogList from "./BlogList";

const Home = () => {
                                                                                       // therefore we need to stop the hook when it is unmounted 
    const { data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs'); // this use "useEffect" hook to load data. If we go to different page before this is completed, there will be a issue because after loading the data, this will try to update the previously used "Home" unmounted component.
    // grab the "data" from respose object and use it as "blogs"
       
    return (

            <div className="home">

        {error && <div> {error} </div>} {/* this only appears if error is true*/}

        {isPending && <div> Loading... </div>}

        {/* props pass data from parent component to child component*/}
         {/* since initially blogs are null, cant iterate them. Therefore need to wait until the fetch*/}
         {/* if blogs == null, 2nd condition will be skipped bcz condision fails*/}
         
             {blogs && <BlogList blogs = { blogs } title = "All Blogs"/>}  

           
            
            </div>

      );
}
 
export default Home;