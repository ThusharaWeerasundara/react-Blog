import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('Enter Title');
    const [body, setBody] = useState('Enter body');
    const [author, setAuthor] = useState('author 1');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory(); // this object represent history. Can go back/forward through history
    const handleSubmit = (e) => 
    {   
        setIsPending(true);
        // handle default refresh action on submit
        e.preventDefault();
        const blog = {title, body, author};
        console.log(blog);

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('new blog added');
            setIsPending(false);
            history.push('/'); // redirects
        })
    }
    return (  
        <div className="create">
            <h2>Add a New Blog</h2>

            <form onSubmit={handleSubmit}>

                <label>Blog Title</label>
                <input 
                type="text" 
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                />
                {/* title is dynamically added as value here. e.target.value gets the new value. using hooks, "title" is updated*/}

                <label>Blog Body</label>
                <textarea 
                type="text" 
                required
                value={body}
                onChange={(e) => setBody(e.target.value)}
                />

                <label>Blog author: </label>
                <select value={author} onChange={(e) => setAuthor(e.target.value)}>
                    <option value="author 1">author 1</option>
                    <option value="author 2">author 2</option>
                    <option value="author 3">author 3</option>
                </select>

                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Adding blog....</button>}
            
            </form>

        </div>

    );
}
 
export default Create;