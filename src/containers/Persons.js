import React, {Component} from 'react';
import Person from './../components/Person';
import {Container, Row} from 'reactstrap';
import axios from 'axios';


export default class Persons extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: []
        }
    }

    componentWillMount() {
        axios.get('http://localhost:8080/v1/user').then(function (response) {
            this.setState({
                users: response.data
            })
        }.bind(this))
    };

    render() {
        return (
            <Container>
                <Row>
                    {
                        this.state.users.map(function (item, index) {
                            return <Person characteristics={item}/>
                        })
                    }
                </Row>
            </Container>
        );
    }
}
