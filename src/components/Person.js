import React, {Component} from 'react';
import {Col, Card, CardBody, CardTitle, Row, Modal, ModalHeader, ModalBody} from 'reactstrap';
import './Person.scss'
import Balance from './Balance.js';

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
                    <Row>
                        <Col sm={6}>
                            Produkt wählen
                        </Col>
                        <Col sm={6}>
                            <div class="balance text-center">
                                <h4>
                                    Kontostand
                                </h4>
                                <Balance balance={this.state.amount} />
                            </div>
                        </Col>
                        <Col sm={6}>
                            3
                        </Col>
                        <Col sm={6}>
                            4
                        </Col>
                    </Row>


                </ModalBody>
            </Modal>
        </Col>;
    }
}

export default Person;
