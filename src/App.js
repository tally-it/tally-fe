import React, {Component} from 'react';
import {Container, Row, Col} from 'reactstrap';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Persons from './containers/Persons';
import About from './containers/About';
import './App.scss';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';

class App extends Component {
    render() {
        return (
                <Container className='h-100' fluid>
                    <Topbar/>
                    <Router>
                        <Route path="/persons" component={Persons}/>
                    </Router>
                </Container>
        )
    }
}

export default App;
