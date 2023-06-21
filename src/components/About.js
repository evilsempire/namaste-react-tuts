import React from "react";
import User from "./User";
import UserClass from "./UserClass";


class About extends React.Component {

    constructor(props) {
        super(props)
        console.log("Parent constructor called!");
    }


    componentDidMount(){
        console.log("Parent componentDidMount called")
    }

    render() {
        console.log("Parent render called!");

        return (
            <div>
                About us from Class component

                <User name={"Ashutosh (functional)"} />

                <UserClass name={"First"} location={"Mumbai Class"} />
                <UserClass name={"Second"} location={"Mumbai Class"} />
                <UserClass name={"Third"} location={"Mumbai Class"} />
            </div>
        )
    }


}

// const About = () => {
//     return <div>
//         About us

//         <User name={"Ashutosh (functional)"} />

//         <UserClass name={"Ashutosh (Class)"} location={"Mumbai Class"} />
//     </div>
// }

export default About;