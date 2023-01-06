import { useState, useEffect } from "react";
    // useEffect hook runs a code everytime a component is rerendered. (If state changed). Dont update states within this becs this will cause a loop
    // this is good hook to fetch data because this runs initially as well
const useFetch = (url) => 
{

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);

    //const [name, setName] = useState('Thushara')

    const [error, setError] = useState(null);

    // add a cleanup function to avoid loading when unmounted
    useEffect(() => 
    {
        const abortConst = new AbortController(); // associate this with a fecth and then use it to abort

        fetch(url, {signal: abortConst.signal})
        .then(response => 
            {
                //console.log(response);
                if(!response.ok)
                {
                    throw Error('Could not fetch the data!');
                }
               return response.json()
            }
            ).then((data) =>
                {
                    console.log(data);
                    setData(data);
                    setIsPending(false);
                    setError(null);
                }
            ).catch(err =>
            {
                if(err.name === "AbortError") // to handle abort errors, we don't need to update states for this.
                {
                    console.log("fetch aborted")
                }
                else
                {
                    setError(err.message);
                    setIsPending(false);
                    console.log("caught error is: " +err.message);
                }

            })

            //return () => abortConst.abort(); // this runs when we load a different component after loading "Home"

    }, [url]) // 2 nd arg is a dependancy array gives conditions to run only on certain component rerenders. "[]" means this only fires on initial time 
    // here whenever the url changes, its gonna run and fetch data
    
    return {data, isPending, error};
}

export default useFetch;
// custom hooks needs to be started with "use"
