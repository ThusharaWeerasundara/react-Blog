import { useHistory, useParams } from "react-router-dom";
import useFetch from "../Hooks/useFetch";

const BlogDetails = () => {

    const {id} = useParams();
    const { data: blog, isPending, error} = useFetch('http://localhost:8000/blogs/' + id);
    const history = useHistory();
    const hancleClick = () => {

        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: 'DELETE'
        }).then(() => {
            console.log('Blog deleted');
            
            history.push('/'); // redirects
        })
    }

    return (  
        <div className="blog-details">
            <h2>Blog Details: {id}</h2>

            {error && <div> {error} </div>} {/* this only appears if error is true*/}

            {isPending && <div> Loading... </div>}

            {/* props pass data from parent component to child component*/}
            {/* since initially blogs are null, cant iterate them. Therefore need to wait until the fetch*/}
            {/* if blogs == null, 2nd condition will be skipped bcz condision fails*/}
         
            {blog && (
                <article>
                <h2>{blog.title}</h2>
                <p>Written by: {blog.author}</p>
                <div>{blog.body}</div>

                <button onClick={hancleClick}> Delete </button>

            </article>

            )}
             

        </div>
    );
}
 
export default BlogDetails;
