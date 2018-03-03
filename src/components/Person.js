import React, {Component} from 'react';
import Currency from 'react-currency-formatter';
import {Col, Card, CardBody, CardTitle, CardText, Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import './Person.scss'

class Person extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            name: props.characteristics.name,
            amount: props.characteristics.balance
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    IncrementItem = () => {
        this.setState({
            amount: (parseFloat(this.state.amount) + 1.00)
        });
    };

    IncrementItem2 = () => {
        this.setState({
            amount: (parseFloat(this.state.amount) + 2.00)
        });
    };

    IncrementItem25 = () => {
        this.setState({
            amount: (parseFloat(this.state.amount) + 2.50)
        });
    };

    // TODO: Insert users image (insert cat-image if no avatar is given)
    imageStyle = {
        backgroundImage: 'url(http://thecatapi.com/api/images/get?format=src&type=gif)',

    };

    render() {
        return <Col className={'mb-4'} lg={3} md={4} sm={6}>
            <Card inverse={true} color={'dark'} className={'person'}>
                <button type={'button'} onClick={this.toggle}>
                    <div class="card-img-top embed-responsive embed-responsive-16by9 avatar"
                         style={this.imageStyle}>
                    </div>
                    <CardBody>
                        <CardTitle>{this.state.name}</CardTitle>
                    </CardBody>
                </button>
            </Card>
            <Modal tabindex="-1" role="dialog" isOpen={this.state.modal} toggle={this.toggle}
                   className={this.props.className}>
                <ModalHeader toggle={this.toggle}>{this.state.name}</ModalHeader>
                <ModalBody>
                    Aktueller Kontostand: <Currency
                    quantity={this.state.amount}
                    currency="EUR"
                />
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={this.IncrementItem}>+ 1.0 €</Button>{' '}
                    <Button color="secondary" onClick={this.IncrementItem2}>+ 2.00 €</Button>
                    <Button color="secondary" onClick={this.IncrementItem25}>+ 2.50 €</Button>
                </ModalFooter>
            </Modal>
        </Col>;
    }
}

export default Person;
