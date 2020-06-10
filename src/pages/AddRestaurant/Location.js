import React, { Component } from 'react';
import { Container, Row, Col, Card, CardBody, InputGroup, CardTitle, Form, FormGroup, Input, Label, Button } from "reactstrap";
import {baseUrl} from "../../helpers/baseUrl";
import PlacesAutocomplete from 'react-places-autocomplete';
import {
    geocodeByAddress,
    geocodeByPlaceId,
    getLatLng,
} from 'react-places-autocomplete';

class Location extends Component {
    constructor() {
        super();
        this.state = {
            lng : '',
            lat : '',
            address: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFormChange = this.handleFormChange.bind(this);
    }

    handleChange = address => {
        this.setState({ address });
    };

    handleSelect = address => {
        geocodeByAddress(address)
            .then(results => getLatLng(results[0]))
            .then(latLng =>
                this.setState({
                    lat : latLng.lat,
                    lng : latLng.lng
                })
            )
            .catch(error => console.error('Error', error));
        this.setState({ address });
    };

    componentDidUpdate(prevProps) {
        let response = this.props.res;
        console.log("res: ",response)
        console.log(response.address)
        if (prevProps !== this.props) {
            this.setState({
                address : response.address,
                lat: response.lat,
                lng: response.lng

            })
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state.address);
        console.log(this.state.lat);
        console.log(this.state.lng);

        let resId = localStorage.getItem('restaurantId')
        let isStuff = localStorage.getItem('isStuff')
        const bearer = 'Bearer ' + localStorage.getItem('access');
        let headers = {}
        let formData = new FormData();
        formData.append('address', this.state.address);
        formData.append('lat', this.state.lat);
        formData.append('lng', this.state.lng);

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
                                        <CardTitle className="mb-4">Search Place</CardTitle>
                                        <Form
                                            onSubmit={this.handleSubmit}
                                            id="placeForm"
                                        >
                                        <PlacesAutocomplete
                                            value={this.state.address}
                                            onChange={this.handleChange}
                                            onSelect={this.handleSelect}
                                        >
                                            {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                                                <div>
                                                    <input className="form-control" style={{width:"100%"}}
                                                        {...getInputProps({
                                                            placeholder: 'Search Places ...',
                                                            className: 'location-search-input',
                                                        })}
                                                    />
                                                    <div className="autocomplete-dropdown-container">
                                                        {loading && <div>Loading...</div>}
                                                        {suggestions.map(suggestion => {
                                                            const className = suggestion.active
                                                                ? 'suggestion-item--active'
                                                                : 'suggestion-item';
                                                            // inline style for demonstration purpose
                                                            const style = suggestion.active
                                                                ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                                                                : { backgroundColor: '#ffffff', cursor: 'pointer' };
                                                            return (
                                                                <div
                                                                    {...getSuggestionItemProps(suggestion, {
                                                                        className,
                                                                        style,
                                                                    })}
                                                                >
                                                                    <span>{suggestion.description}</span>
                                                                </div>
                                                            );
                                                        })}
                                                    </div>
                                                </div>
                                            )}
                                        </PlacesAutocomplete>
                                    </Form>
                                    </CardBody>
                                </Card>
                <Col lg="12">
                    <Button type="submit" color="primary" form="placeForm" style={{width:"100%"}}>Save</Button>
                </Col>
            </React.Fragment>
        );
    }
}

export default Location;
