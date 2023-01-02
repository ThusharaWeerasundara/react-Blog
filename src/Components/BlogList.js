
const BlogList = ({blogs, title, handleDelete}) => {

    //if use const BlogList = (props) => {
    //const blogs = blogs;
    //const title = title;
    /// console.log(props.blogs);

    // dont define handleDelete fn here brcause bad to modify prop data. define it in the component where the prop is defined.Then pass it as a prop.

    return ( 

        <div className="blog-list">
        <h2>{ title }</h2>
        
        {blogs.map((blog) => (
            
            <div className="blog-preview" key={blog.id}>
            <h2> {blog.title} </h2>
            <p>Written By: {blog.author}</p>
            <button onClick={() => handleDelete(blog.id)}>Delete Blog</button>
            </div> 
            
        ))}


    </div>

     );
}
 
export default BlogList;