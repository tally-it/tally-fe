import React, {Component} from 'react';
import './App.scss';

import {
    Container,
    Row,
    Col,
    Nav,
    NavItem,
} from 'reactstrap';
import Persons from './containers/Persons';
import About from './containers/About';
import {
    BrowserRouter as Router,
    Route,
    NavLink
} from 'react-router-dom'

class App extends Component {
    render() {
        return (
            <Container className='h-100' fluid>
                <Router>
                    <Row className='justify-content-center h-100'>
                        <Col className='col-auto bg-dark pt-5 nav-pills'>
                            <Nav className='flex-column'>
                                <NavItem><NavLink className='nav-link text-light' activeClassName="active" exact={true} to="/">Home</NavLink></NavItem>
                                <NavItem><NavLink className='nav-link text-light' activeClassName="active" exact={true} to="/about">About</NavLink></NavItem>
                                <NavItem><NavLink className='nav-link text-light' activeClassName="active" exact={true} to="/persons">Persons</NavLink></NavItem>
                            </Nav>

                        </Col>
                        <Col className='pt-5'>
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
