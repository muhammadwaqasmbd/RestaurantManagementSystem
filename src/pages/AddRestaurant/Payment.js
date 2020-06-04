import React, { Component } from 'react';
import { Container, Row, Col, Card, CardBody, InputGroup, CardTitle, Form, FormGroup, Input, Label, Button } from "reactstrap";
import {baseUrl} from "../../helpers/baseUrl";


class Payment extends Component {
    constructor() {
        super();
        this.state = {
            payment : ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFormChange = this.handleFormChange.bind(this);
    }

    componentDidUpdate(prevProps) {
        let response = this.props.res;
        console.log("res: ",response)
        console.log(response.company_name)
        if (prevProps !== this.props) {
            this.setState({
                payment : response.payment_method,

            })
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state.payment);

        let resId = localStorage.getItem('restaurantId')
        let isStuff = localStorage.getItem('isStuff')
        const bearer = 'Bearer ' + localStorage.getItem('access');
        let headers = {}
        let formData = new FormData();
        formData.append('payment_method', this.state.payment);

        if(isStuff == "true") {
            headers = {
                'X-Requested-With': 'application/json',
                'Authorization': bearer,
                'RESID': resId
            }
        }else{
            headers = {
                'X-Requested-With': 'application/json',
                'Authorization': bearer
            }
        }
        console.log(headers)
        for (var pair of formData.entries())
        {
            console.log(pair[0]+ ', '+ pair[1]);
            console.log(typeof(pair[1]));
        }
        var api = 'api/restaurants/'+this.props.id+'/';
        return fetch(baseUrl+api, {
            method: 'PUT',
            headers: headers,
            body: formData
        })
            .then(response => {
                    console.log(" response: ",response)
                    if (response.ok) {
                        return response;
                    } else {
                        var error = new Error('Error ' + response.status + ': ' + response.statusText);
                        error.response = response;
                        console.log(error)
                    }

                },
                error => {
                    console.log(error)
                })
            .catch(error => console.log(error))
    }

    handleFormChange(event) {
    const value = event.target.value;
    this.setState({
        [event.target.name]: value
    });
    console.log(event.target.name+": "+value);
    }

    render() {
        return (
            <React.Fragment>
                                <Card>
                                    <CardBody>
                                        <Form
                                        onSubmit={this.handleSubmit}
                                        id="paymentForm"
                                        >
                                            <FormGroup className="mb-4" row>
                                                <Col lg="12">
                                                    <label>Payment Option</label>
                                                    <select name="payment" onChange={this.handleFormChange} value={this.state.payment} className="form-control">
                                                        <option></option>
                                                        <option>Pay Now</option>
                                                        <option>Pay Later</option>
                                                        <option>Pay Both</option>
                                                    </select>
                                                </Col>
                                            </FormGroup>
                                        </Form>
                                        <Row className="justify-content-end">
                                            <Col lg="12">
                                                <Button type="submit" color="primary" form="paymentForm" style={{width:"100%"}}>Save</Button>
                                            </Col>
                                        </Row>

                                    </CardBody>
                                </Card>
            </React.Fragment>
        );
    }
}

export default Payment;
