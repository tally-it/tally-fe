import React, {Component} from 'react';
import {Container} from 'reactstrap';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Persons from './containers/Persons';
import './App.scss';
import Topbar from './components/Topbar';

class App extends Component {
    render() {
        return (
            <Container className='h-100' fluid>
                <Topbar/>
                <Router>
                    <Route path="/" component={Persons}/>
                </Router>
            </Container>
        )
    }
}

export default App;
