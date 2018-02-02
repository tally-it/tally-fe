import React, {Component} from 'react';
import Currency from 'react-currency-formatter';
import {Col, Card, CardBody, CardTitle, CardText, Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import './Person.scss'

class Person extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    render() {
        const characteristics = this.props.characteristics;
        return (
            <Col className={'mb-4'} lg={3} md={4} sm={6}>

                <Card inverse={true} className={'person'}>
                <button type={'button'} onClick={this.toggle}>
                    <CardBody>
                        <CardTitle>{characteristics.name}</CardTitle>
                        <CardText>
                            <Currency
                                quantity={characteristics.amount}
                                currency="EUR"
                            />
                        </CardText>
                    </CardBody>
                </button>
                </Card>
                <Modal tabindex="-1" role="dialog" isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>{characteristics.name}</ModalHeader>
                    <ModalBody>
                        Aktueller Kontostand: <Currency
                        quantity={characteristics.amount}
                        currency="EUR"
                    />
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </Col>
        );
    }
}

export default Person;
