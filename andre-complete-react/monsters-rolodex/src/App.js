import React, {Component} from 'react';
import './App.css';
import {CardList} from "./components/card-list/card-list.component";
import {SearchBox} from "./components/search-box/search-box.componet";


class App extends Component {

    constructor() {
        super();

        this.state = {
            monsters: [],
            searchField: ""
        };

        /** Very verbose way to bind.  This is related to this binding */
        /** this.handleChangeBind = this.handleChangeBind.bind(this)*/
    }


    handleChangeBind(e) {
        this.setState({searchField: e.target.value})
    }

    handleChange = (e) => {
        this.setState({searchField: e.target.value})
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                return response.json();
            }).then(users => {
            console.log(users);
            this.setState({monsters: users})
        })

    }

    render() {
        const {monsters, searchField} = this.state;

        const filteredMonsters =
            monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));

        return (
            <div className="App">
                <h1>Monsters Rolodex</h1>
                <SearchBox placeholder="Search monsters"
                           handleChange={this.handleChange}></SearchBox>
                <CardList monsters={filteredMonsters}>
                </CardList>
            </div>
        );
    }

}

export default App;
