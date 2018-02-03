import React, {Component} from 'react';
import {Container, Row, Col} from 'reactstrap';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Persons from './containers/Persons';
import About from './containers/About';
import './App.scss';
import Navigatin from './components/Navigation';

class App extends Component {
    render() {
        return (
            <Container className='h-100' fluid>
                <Router>
                    <Row className='justify-content-center h-100'>
                        <Col className='col-auto no-padding bg-dark pt-5'>
                            <Navigatin />
                        </Col>
                        <Col className='pt-5 is-scoll'>
                            <Route path="/about" component={About}/>
                            <Route path="/persons" component={Persons}/>
                        </Col>
                    </Row>
                </Router>
            </Container>
        );
    }
}

export default App;
