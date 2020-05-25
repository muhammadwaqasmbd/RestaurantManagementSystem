import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Dropzone from 'react-dropzone';
import { Container, Row, Col, Card, CardBody, InputGroup, CardTitle, Form, FormGroup, Input, Label, Button } from "reactstrap";
import Select from "react-select";

const dropzoneStyle = {
    width  : "100%",
    height : "10px",
};

class Untill extends Component {
    constructor() {
        super();
        this.state = {
            username : '',
            password : '',
            IP: '',
            port : ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFormChange = this.handleFormChange.bind(this);
    }

    componentDidMount(){
        if(this.props.id > 0){
            const response = {username: 'test 1',password:'test',IP:'123.77.989',port:'8080'};
            
            this.state.username = response.username;
            this.state.password = response.password;
            this.state.IP = response.IP;
            this.state.port = response.port;
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state.username);
        console.log(this.state.password);
        console.log(this.state.IP);
        console.log(this.state.port);
        
        if(this.props.id > 0){
            console.log("Update")
        }else{
            console.log("create")
        }
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
                                        <CardTitle className="mb-4">UNTILL</CardTitle>
                                        <Form
                                        onSubmit={this.handleSubmit}
                                        id="untillForm"
                                        >
                                            <FormGroup className="mb-4" row>
                                                <Col lg="12">
                                                    <Input id="username" name="username" type="text" onChange={this.handleFormChange} value={this.state.username} className="form-control" placeholder="Enter Username" />
                                                </Col>
                                            </FormGroup>
                                            <FormGroup className="mb-4" row>
                                                <Col lg="12">
                                                    <Input id="password" name="password" type="text" onChange={this.handleFormChange} value={this.state.password} className="form-control" placeholder="Enter Password" />
                                                </Col>
                                            </FormGroup>
                                            <FormGroup className="mb-4" row>
                                                <Col lg="12">
                                                    <Input id="IP" name="IP" type="text" onChange={this.handleFormChange} value={this.state.IP} className="form-control" placeholder="Enter IP" />
                                                </Col>
                                            </FormGroup>
                                            <FormGroup className="mb-4" row>
                                                <Col lg="12">
                                                    <Input id="port" name="port" type="text" onChange={this.handleFormChange} value={this.state.port} className="form-control" placeholder="Enter Port" />
                                                </Col>
                                            </FormGroup>
                                        </Form>
                                        <Row className="justify-content-end">
                                            <Col lg="8">
                                                <Button type="submit" color="primary" form="untillForm" style={{width:"100%"}}>Save</Button>
                                            </Col>
                                            <Col lg="4">
                                                <Button type="cancel" color="white">Cancel</Button>
                                            </Col>
                                        </Row>

                                    </CardBody>
                                </Card>
            </React.Fragment>
        );
    }
}

export default Untill;