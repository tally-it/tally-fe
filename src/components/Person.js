import React, {Component} from 'react';
import Currency from 'react-currency-formatter';
import {Col, Card, CardBody, CardTitle, CardText} from 'reactstrap';

class Person extends Component {
    render() {
        const characteristics = this.props.characteristics;
        return (
            <Col>
                <Card>
                    <CardBody>
                        <CardTitle>{characteristics.name}</CardTitle>
                        <CardText>
                            <Currency
                                quantity={characteristics.debt}
                                currency="EUR"
                            />
                        </CardText>
                    </CardBody>
                </Card>
            </Col>
        );
    }
}

export default Person;
