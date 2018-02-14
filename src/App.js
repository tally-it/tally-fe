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
                        <Row className={'justify-content-center content'}>
                            <Col className={'col-auto no-padding bg-dark pt-5'}>
                                <Sidebar/>
                            </Col>
                            <Col className='pt-5 is-scoll'>
                                <Route path="/about" component={About}/>
                                <Route path="/persons" component={Persons}/>
                            </Col>
                        </Row>
                    </Router>
                </Container>
        )
    }
}

export default App;
