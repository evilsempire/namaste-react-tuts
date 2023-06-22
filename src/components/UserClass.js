import React from "react";

class UserClass extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            userInfo: {
                name: "Loading",
                location: "Loading"
            }
        }
        // console.log("constructor method called!")

    }

    async componentDidMount(){
        // const result = await fetch("https://api.github.com/users/evilsempire");

        // const json = await result.json();

        // this.setState({
        //     userInfo : json
        // })

        // this.timer = setInterval(() => {
        //     console.log("Running set interval in user class")
        // }, 1000);
    }

    componentDidUpdate(){
        //Mounting
        // console.log("componentDidUpdate called")
    }

    componentWillUnmount(){
        // console.log("componentWillUnmount called")
        // clearInterval(this.timer)
    }

    render() {
        // console.log("render method called!")
        // const {name, location} = this.props;
        const {name, location, login} = this.state.userInfo;
        return (
            <div className="user-card">
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h3>Contact: @{login}</h3>
            </div>
        )
    }
}

export default UserClass;