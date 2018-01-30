import React, {Component} from 'react';
import Currency from 'react-currency-formatter';
import {Col, Card, CardBody, CardTitle, CardText} from 'reactstrap';

class Person extends Component {
    render() {
        const characteristics = this.props.characteristics;
        return (
            <Col className={'mb-4'} lg={3} md={4} sm={6}>
                <Card>
                    <CardBody>
                        <CardTitle>{characteristics.name}</CardTitle>
                        <CardText>
                            <Currency
                                quantity={characteristics.amount}
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
