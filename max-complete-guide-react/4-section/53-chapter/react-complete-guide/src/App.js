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


    render() {
        return (
            <div className="App">
                <button onClick={this.togglePersonHandler}>Switch Name</button>

                {
                    this.state.showPersons ?
                        <div>
                            <Person
                                name={this.state.persons[0].name}
                                age={this.state.persons[0].age}> I am good at coding</Person>
                            <Person
                                name={this.state.persons[1].name}
                                age={this.state.persons[1].age}
                                click={this.switchNameHandler.bind(this, 'Hari Priya!!')}> Good at creative
                                things</Person>
                            <Person
                                name={this.state.persons[2].name}
                                age={this.state.persons[2].age}
                                changed={this.nameChangeHandler}> Good at playing</Person>
                        </div> : <div></div>}

            </div>
        );
    }
}

export default App;
