import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const PropsAndGet = () => {

        const [blogs, setBlogs] = useState(null)

        const handleDelete = (id) =>
        {
            const newBlogs = blogs.filter(blog => blog.id !== id ); // filter return a array with filtered elements 
            setBlogs(newBlogs);
        }

        const [name, setName] = useState('Thushara')
    // useEffect hook runs a code everytime a component is rerendered. (If state changed). Dont update states within this becs this will cause a loop
    // this is good hook to fetch data because this runs initially as well
        useEffect(() => 
        {
            fetch('http://localhost:8000/blogs')
            .then(response => 
                {
                   return response.json()
                }
                ).then((data) =>
                    {
                        console.log(data);
                        setBlogs(data)
                    }
                )
        }, []) // 2 nd arg is a dependancy array gives conditions to run only on certain component rerenders. "[]" means this only fires on initial time 
    return (

            <div className="home">

        {/* props pass data from parent component to child component*/}
         {/* since initially blogs are null, cant iterate them. Therefore need to wait until the fetch*/}
         {/* if blogs == null, 2nd condition will be skipped bcz condision fails*/}
            
             {blogs && <BlogList blogs = { blogs } title = "All Blogs" handleDelete = { handleDelete }/>}  

           
            <p>{ name }</p>
            </div>

      );
}
 
export default PropsAndGet;