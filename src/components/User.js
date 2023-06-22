import { useState,useEffect } from "react";

const User = ({name}) => {

    const [count] = useState(0);
    const [count2] = useState(2);

    // useEffect(() => {
    //   setInterval(() => {
    //     console.log("Running set interval in user functional")
    //   }, 1000)

    //   return []
    // }, [])

    useEffect(() => {
      const interval =    setInterval(() => {
            console.log("Running set interval in user functional")
          }, 1000)
    
      return () => {
        console.log("Clearing set interval in user functional")
        clearInterval(interval)
      }
    }, [])
    
    

    return (
        <div className="user-card">
            <h1>Count: {count}</h1>
            <h2>Name: {name}</h2>
            <h3>Location: Mumbai</h3>
            <h3>Contact: @evilsempire</h3>
        </div>
    )
}

export default User;