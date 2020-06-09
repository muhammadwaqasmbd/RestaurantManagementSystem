import React, { Component } from "react";
import {Container, Row, Col, Button} from "reactstrap";
import Restaurant from "./Restaurant";
import Printer from "./Printer";
import Untill from "./Untill";
import Payment from "./Payment";
import Fee from "./Fee";
import {baseUrl} from "../../helpers/baseUrl";
import Location from "./Location";

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            response : {}
        };
        this.togglemodal.bind(this);
    }

    togglemodal = () => {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    componentDidMount() {
        this.fetchRestaurant()
    }

    fetchRestaurant(){
        let resId = localStorage.getItem('restaurantId')
        let isStuff = localStorage.getItem('isStuff')
        console.log("fetching restaurants");
        const bearer = 'Bearer ' + localStorage.getItem('access');
        let headers = {}
        if(isStuff == "true") {
            headers = {
                'X-Requested-With': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': bearer,
                'RESID': resId
            }
        }else{
            headers = {
                'X-Requested-With': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': bearer
            }
        }
        return fetch(baseUrl+'api/restaurants/'+this.props.match.params.id+'', {
            method: 'GET',
            headers: headers
        })
            .then(response => {
                    console.log("restaurant response: ",response)
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
            .then(response => response.json())
            .then(response => {
                // If response was successful, set the token in local storage
                console.log("restaurant response 2: ",response)
                if(parseInt(localStorage.getItem('restaurantId'))==response.id){
                this.setState({
                    response:response
                })}
            })
            .catch(error => console.log(error))
    }

    render() {
        return (
            <React.Fragment>
                <div className="page-content">
                    <Container fluid>
                        <Row>
                            <Col lg="4">
                                <Restaurant id = {this.props.match.params.id}  res={this.state.response}/>
                            </Col>
                            <Col lg="4">
                                <Printer id = {this.props.match.params.id} res={this.state.response}/>
                                <Payment id = {this.props.match.params.id} res={this.state.response}/>
                                <Fee id = {this.props.match.params.id} res={this.state.response}/>
                            </Col>
                            <Col lg="4">
                                <Untill id = {this.props.match.params.id} res={this.state.response}/>
                                <Location id = {this.props.match.params.id} res={this.state.response}/>
                            </Col>
                        </Row>
                    </Container>
                </div>

            </React.Fragment>
        );
    }
}

export default Dashboard;
