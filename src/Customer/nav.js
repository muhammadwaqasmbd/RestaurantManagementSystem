import React from 'react';
import $ from 'jquery';
import './ActiveMenuItem';
import {compose} from 'recompose';
import {withRouter} from 'react-router-dom';
import { Link } from "react-scroll";
import {baseUrl} from "../helpers/baseUrl";

class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            categoryNames:'',
            data : {},
            lat:0.0,
            lng:0.0
        };
    }

    sortCategories(categories){
        return categories.sort(function(a,b) {return (a.orderingNumber > b.orderingNumber) ? 1 : ((b.orderingNumber > a.orderingNumber) ? -1 : 0);} );
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

        $('a[href^="#"]').click(function () {
            $('html, body').animate({
                scrollTop: $('[name="' + $.attr(this, 'href').substr(1) + '"]').offset().top
            }, 500);

            return false;
        });
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
        var api = ''+baseUrl+'api/products/by-qr-code/'
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
                    data : response,
                })
                let categoryNames = [];
                let products = response['categories'];
                for (let [key, value] of Object.entries(products)) {
                    if(key == "priority"){
                        delete products[key]
                    }
                    if(key!="default")
                        categoryNames.push(key);
                }
                this.setState({
                    categoryNames: categoryNames
                })
            })
            .catch(error => console.log(error))
    }

    render() {
        return (
            <div id="top-menu" className="pb-3 pl-4 pr-4 pp-buttons fixed-buttons">
                <div className="row top-menu"> {this.buildTopMenu(this.state.categoryNames)} </div>
            </div>
        );
    }

    buildTopMenu(categoryNames) {
        var topMenu = [];
        for (var i = 0, max = categoryNames.length; i < max; i++) {
            var anchor = categoryNames[i];
            if (i === 0) {
                topMenu.push(<div key={i} className="top-category"><Link className="top-category-anchor active-menu" href={"#" + anchor} smooth={true}
                                                                         to={anchor}>{categoryNames[i]} </Link></div>);
            } else {
                topMenu.push(<div key={i} className="top-category"><Link className="top-category-anchor" href={"#" + anchor} smooth={true}
                                                                         to={anchor}>{categoryNames[i]}</Link></div>);
            }
        }
        return topMenu;
    }
}
const NavigationMenu = compose(
    withRouter,
)(Navigation);

export default NavigationMenu;
