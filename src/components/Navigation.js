import React, {Component} from 'react';
import {Nav, NavItem} from 'reactstrap';
import {NavLink} from 'react-router-dom'
import '../App.scss';
import { Home, Users, Book } from 'react-feather';

class Navigation extends Component {

    render() {
        return <Nav pills={true} className={'nav-main'} vertical={true}>
            <NavItem><NavLink className='nav-link text-light' activeClassName="active" exact={true} to="/"><span className={'svg-wrapper'}><Home size={16}/></span> Home</NavLink></NavItem>
            <NavItem><NavLink className='nav-link text-light' activeClassName="active" exact={true} to="/persons"><span className={'svg-wrapper'}><Users size={16}/></span> Persons</NavLink></NavItem>
            <NavItem><NavLink className='nav-link text-light' activeClassName="active" exact={true} to="/about"><span className={'svg-wrapper'}><Book size={16}/></span> About</NavLink></NavItem>
        </Nav>;
    }
}

export default Navigation;
