import { useState } from 'react';


const Usingstates = () => {

    const [name, setName] = useState('Thushara');

    const handleClick = () => {
        setName('Peshala');
        console.log(name);
    }
    
    return (
  
        <div className="Usingstates">

        <h1>Usingstates</h1>
        {/* if use { handleClick() } it invokes when reload 
        
        therefore, anonymous functions are used for pass args for functions : {()=>fn(args)}*/}
        
        <button onClick = { handleClick }>Click ME</button>
        {name}

        </div>
      );
    }
 
export default Usingstates;