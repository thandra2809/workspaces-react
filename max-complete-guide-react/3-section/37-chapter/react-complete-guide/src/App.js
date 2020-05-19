import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Person name={"Srini"} age={38}> I am good at coding</Person>
                <Person name={"Priya"} age={33}> Good at creative things</Person>
                <Person name={"Shreyus"} age={3}> Good at playing</Person>
            </div>
        );
    }
}

export default App;
