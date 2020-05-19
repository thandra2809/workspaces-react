import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Person name={"Srini"} age={38}></Person>
                <Person name={"Priya"} age={33}></Person>
                <Person name={"Shreyus"} age={3}></Person>
            </div>
        );
    }
}

export default App;
