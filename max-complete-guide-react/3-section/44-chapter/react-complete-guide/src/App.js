import React, {useState} from 'react';
import './App.css';
import Person from './Person/Person';

const app = (props) => {

    const [personState, setPersonState] = useState({
        persons: [
            {name: 'Srini', age: 38},
            {name: 'Priya', age: 33},
            {name: 'Shreyus', age: 3}
        ],
        otherState: 'Some Other State all together'
    });

    console.log(personState);

    const switchNameHandler = () => {

        setPersonState({
            persons: [
                {name: 'Srinivasa', age: 38},
                {name: 'Priya', age: 33},
                {name: 'Shreyus Thandra', age: 3.1}
            ]
        })


    }


    return (
        <div className="App">
            <button onClick={switchNameHandler}>Switch Name</button>
            <Person name={personState.persons[0].name} age={personState.persons[0].age}> I am good at coding</Person>
            <Person name={personState.persons[1].name} age={personState.persons[1].age}> Good at creative
                things</Person>
            <Person name={personState.persons[2].name} age={personState.persons[2].age}> Good at playing</Person>
        </div>
    );

}

export default app;


/*
   state = {
        persons: [
            {name: 'Srini', age: 38},
            {name: 'Priya', age: 33},
            {name: 'Shreyus', age: 3}
        ],
        otherState:'Some Other State all together'
    }

    switchNameHandler = () => {
        //console.log('This button is clicked');
        // DONT DO like this this.state.persons[0].name ='Srinivasa';

        this.setState({
            persons: [
                {name: 'Srinivasa', age: 38},
                {name: 'Priya', age: 33},
                {name: 'Shreyus Thandra', age: 3.1}
            ]
        })


    }

 */