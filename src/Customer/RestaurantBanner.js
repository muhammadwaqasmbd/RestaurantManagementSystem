import React from 'react';
import {compose} from 'recompose';
import {withRouter} from 'react-router-dom';

class RestaurantBannerBase extends React.Component {
    constructor(props) {
        super(props);
        var url = new URL(window.location.href);
        var restaurantId = url.searchParams.get("restaurantId");
        var tableNumber = atob(url.searchParams.get("tn"));
        this.state = {
            imageUrl: '',
            restaurantName: '',
            tableNumber: tableNumber,
            restaurantId: restaurantId,
            response : {},
            lat: 0.0,
            lng: 0.0
        };
    }

    componentDidMount() {
            var lat = 0.0;
            var lng = 0.0;
            if (navigator.geolocation) {
                var location_timeout = setTimeout("geolocFail()", 10000);
                let self = this;
                navigator.geolocation.getCurrentPosition(function (position) {
                    clearTimeout(location_timeout);

                    lat = position.coords.latitude;
                    lng = position.coords.longitude;
                    self.setState({
                        lat: lat,
                        lng: lng
                    })
                    self.fetchData();
                }, function (error) {
                    clearTimeout(location_timeout);
                    console.log("error in fetching geolocation")
                });

            } else {
                // Fallback for no geolocation
                console.log("no geolocation")
            }
    }

    fetchData(){
        let path = this.props.location.pathname;
        let qrcode = '';
        if(!isNaN(path.substring(path.length - 8))){
            qrcode = path.substring(path.length - 8)
        }else if(!isNaN(path.substring(path.length - 7))){
            qrcode = path.substring(path.length - 7)
        }else if(!isNaN(path.substring(path.length - 6))){
            qrcode = path.substring(path.length - 6)
        }else if(!isNaN(path.substring(path.length - 4))){
            qrcode = path.substring(path.length - 4)
        }
        console.log("fetching products");
        let headers = {}
        let lat = this.state.lat;
        let lng = this.state.lng;
        let bodyData = {
            "qr_code": qrcode,
            "lat": this.state.lat.toString(),
            "lng": this.state.lng.toString()
        }
        headers = {
            'X-Requested-With': 'application/json',
            'Content-Type': 'application/json'
        }
        var api = 'https://cors-anywhere.herokuapp.com/https://orderme-stage.oldevops.nl/api/products/by-qr-code/'
        return fetch(api, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(bodyData)
        })
            .then(response => {
                    console.log("response: ",response)
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
                console.log("products response: ",response)
                this.setState({
                    response : response
                })
            })
            .catch(error => console.log(error))
    }
    render() {
        return (
            <div className="banner">
                <div id="current-table" className="w-100">
                    <h3 className="font-weight-bold tablenumber ml-3 mt-3">{this.state.response['table_number']} </h3>
                    {this.state.response['logo_url'] ? <img src={this.state.response['logo_url']} className="restaurant-logo mr-3"/> : ''}
                </div>

                <h3 id="restaurant-name" className="w-100 font-weight-bold">{this.state.response['restaurant_name']}</h3>
            </div>
        );
    }
}

const RestaurantBanner = compose(
    withRouter,
)(RestaurantBannerBase);

export default RestaurantBanner;
