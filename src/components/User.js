import { useState } from "react";

const User = ({name}) => {

    const [count] = useState(0);
    const [count2] = useState(2);

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