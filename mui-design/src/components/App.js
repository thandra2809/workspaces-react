import React from 'react';
import {ThemeProvider} from "@material-ui/styles";

import theme from './ui/Theme';
import Header from './ui/Header';


function App() {
    return (
        <ThemeProvider theme={theme}>
        <div className="App">
            <Header/>
            <div>Hello!</div>
        </div>
        </ThemeProvider>
    );
}

export default App;
