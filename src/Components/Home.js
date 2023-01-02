import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {

        const [blogs, setBlogs] = useState([
            {title: '1', body: '111111111111', author: 'author 1', id: 1},
            {title: '2', body: '22222222222222222', author: 'author 2', id: 2},
            {title: '3', body: '3333333333333', author: 'author 3', id: 3}
        ])

        const handleDelete = (id) =>
        {
            const newBlogs = blogs.filter(blog => blog.id !== id ); // filter return a array with filtered elements 
            setBlogs(newBlogs);
        }

        const [name, setName] = useState('Thushara')
    // useEffect hook runs a code everytime a component is rerendered. (If state changed). Dont update states within this becs this will cause a loop
        useEffect(() => 
        {

        }, []) // 2 nd arg is a dependancy array gives conditions to run only on certain component rerenders 
    return (

            <div className="home">

        {/* props pass data from parent component to child component*/}
            <BlogList blogs = { blogs } title = "All Blogs" handleDelete = { handleDelete }/>

            </div>

      );
}
 
export default Home;