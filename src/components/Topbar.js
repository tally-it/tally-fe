import React, {Component} from 'react';
import '../App.scss';
import PackageData from '../../package.json'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink} from 'reactstrap';
import './Topbar.scss';
import {ShoppingBag} from 'react-feather';

export default class Topbar extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (<div>
            <Navbar fixed={true} className={'topbar'} color={'dark'} dark expand="md">
                <NavbarBrand href="/"><ShoppingBag size={16} /> Hack And Pay v<span className={'small'}>{PackageData.version}</span></NavbarBrand>
                <NavbarToggler onClick={this.toggle}/>
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="/components/">Components</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/profile">Profil</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>);
    }
}
