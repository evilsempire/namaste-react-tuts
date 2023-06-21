import React from "react";

class UserClass extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            count: 11,
            count2: 2
        }

        console.log(this.props.name+" Child constructor called!")
    }

    componentDidMount(){
        console.log(this.props.name+" Child componentDidMount called")
    }

    render() {

        console.log(this.props.name+" Child render called!")


        const {name, location} = this.props;
        const {count, count2} = this.state;
        return (
            <div className="user-card">
                <h1>Count: {count}</h1>
                <button onClick={() => {
                    this.setState({
                        count: this.state.count + 1
                    })
                }} >
                    Click me
                </button>
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h3>Contact: @evilsempire</h3>
            </div>
        )
    }
}

export default UserClass;