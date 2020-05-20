import React, {Component} from 'react';
import './App.css';
import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";

class App extends Component {
    state = {
        userName: 'Super Srini'
    }

    userInputChangeHandler = (e) => {
        this.setState({userName: e.target.value});
    }


    render() {
        return (
            <div className="App">
                <UserInput changeHandler={this.userInputChangeHandler}></UserInput>
                <UserOutput userName={this.state.userName}></UserOutput>
                <UserOutput userName={this.state.userName}></UserOutput>
                <UserOutput userName={"Srini"}></UserOutput>
            </div>
        );
    }
}

export default App;
