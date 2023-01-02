const Usingbuttonclicks = () => {

    const handleClick = () => console.log("hello");
  
    const handleClick2 = (name) => console.log("hello " + name);
    
      return (
  
          <div className="Usingbuttonclicks">
  
          <h1>Usingbuttonclicks</h1>
          {/* if use { handleClick() } it invokes when reload 
          
          therefore, anonymous functions are used for pass args for functions : {()=>fn(args)}*/}
          
          <button onClick = { handleClick }>Click ME</button>
  
  
          <button onClick = { () => handleClick2('thushara') }>Click ME with NAME</button>
  
          </div>
        );
  }
 
export default Usingbuttonclicks;