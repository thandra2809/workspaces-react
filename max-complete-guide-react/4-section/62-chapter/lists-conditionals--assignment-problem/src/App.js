import React, {Component} from 'react';
import './App.css';
import ValidationComponent from "./ValidationComponent/ValidationComponent";
import CharComponent from './CharComponent/CharComponent'

class App extends Component {

    state = {
        userInput: ''
    }

    textChangeHandler = (event) => {
        this.setState({userInput: event.target.value});
    }


    deleteCharHandler = (index) => {
        const text = this.state.userInput.split('');

        text.splice(index, 1);
        const updatedText = text.join('');
        this.setState({userInput: updatedText});

    }


    render() {

        const charList = this.state.userInput.split('').map((char, index) => {
            return (<CharComponent character={char}
                                   key={index}
                                   clicked={() => this.deleteCharHandler(index)}/>);
        })


        return (
            <div className="App">
                <input type={'text'}
                       onChange={this.textChangeHandler}
                       value={this.state.userInput}/>
                <p>{this.state.userInput}</p>
                <ValidationComponent inputTextLength={this.state.userInput.length}></ValidationComponent>
                {charList}
            </div>
        );
    }
}

export default App;
