import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

    state = {
        persons: [
            {name: 'Srini', age: 38},
            {name: 'Priya', age: 33},
            {name: 'Shreyus', age: 3}
        ],
        otherState: 'Some Other State all together',
        showPersons: false
    }

    switchNameHandler = (newName) => {
        //console.log('This button is clicked');
        // DONT DO like this this.state.persons[0].name ='Srinivasa';

        this.setState({
            persons: [
                {name: 'Srinivasa', age: 38},
                {name: newName, age: 33},
                {name: 'Shreyus Thandra', age: 3.1}
            ]
        })


    }

    nameChangeHandler = (event) => {
        this.setState({
            persons: [
                {name: 'Srinivasa', age: 38},
                {name: 'Priya', age: 33},
                {name: event.target.value, age: 3.1}
            ]
        })
    }

    togglePersonHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow})

    }

    deletePersonHandler = (personIndex) => {
        const persons = this.state.persons.slice();
        persons.splice(personIndex, 1);
        this.setState({persons: persons})

    }


    render() {

        /** This will always gets execute whenever state changes**/

        let persons = null;

        if (this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                        return (
                            <Person
                                click={() => this.deletePersonHandler(index)}
                                name={person.name}
                                age={person.age}
                                key={index}> I am good at coding
                            </Person>);
                    })}
                </div>);
        }


        return (
            <div className="App">
                <button onClick={this.togglePersonHandler}>Switch Name</button>

                {persons}


            </div>
        );
    }
}

export default App;
