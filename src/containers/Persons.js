import React, {Component} from 'react';
import Person from './../components/Person';
import {Container, Row} from 'reactstrap';
import PersonsData from './../data/Persons.json';

export default class Persons extends Component {
    render() {
        return (
            <Container>
                <Row>
                    {
                        PersonsData.map(function (item) {
                            return <Person characteristics={item}/>
                        })
                    }
                </Row>
            </Container>
        );
    }
}
