import { BrowserRouter } from 'react-router-dom';
import React, { Component } from 'react';
import Router from './router';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faCoffee)

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Router />
            </BrowserRouter>
        );
    }
}

export default App;
