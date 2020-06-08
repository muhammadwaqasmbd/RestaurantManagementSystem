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
        var url = new URL(window.location.href);
        var restaurantId = url.searchParams.get("restaurantId");
        var tableNumber = atob(url.searchParams.get("tn"));
        this.state = {
            response : {},
            categoryNames:'',
            data : {},
            lat:0.0,
            lng:0.0,
            imageUrl: '',
            restaurantName: '',
            tableNumber: tableNumber,
            restaurantId: restaurantId,
        };
    }

    sortCategories(categories){
        return categories.sort(function(a,b) {return (a.orderingNumber > b.orderingNumber) ? 1 : ((b.orderingNumber > a.orderingNumber) ? -1 : 0);} );
    }

    componentDidMount() {
        var lat = 0.0;
        var lng = 0.0;
        let self = this;
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function () {
            }, function () {
            }, {});
            navigator.geolocation.getCurrentPosition(function (position) {
                lat = position.coords.latitude;
                lng = position.coords.longitude;
                self.setState({
                    lat: lat,
                    lng: lng
                })
                localStorage.removeItem("lat")
                localStorage.removeItem("lng")
                localStorage.setItem("lat", self.state.lat);
                localStorage.setItem("lng", self.state.lng);
                console.log("lat local: ", localStorage.getItem("lat"))
                console.log("lng local: ", localStorage.getItem("lng"))
                self.fetchData();
            }, function (e) {
                console.log("Geolocation not found")
            }, {
                enableHighAccuracy: true
            });
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
        localStorage.setItem("qrcode",qrcode)
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
                if(response.message && response.message!=""){
                    this.setState({
                        message: response.message
                    })
                }
                this.setState({
                    response : response,
                    data : response['categories']
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
                localStorage.setItem("restaurantId",response['restaurant_id']);
                localStorage.setItem("tableId",response['table_id']);
                localStorage.setItem("isFetched","true");
            })
            .catch(error => console.log(error))
    }

    render() {
        return (
            <div>
            <div className="banner">
                <div id="current-table" className="w-100">
                    <h3 style={{color:this.state.response['color']}} className="font-weight-bold tablenumber ml-3 mt-3">{this.state.response['table_number']} </h3>
                    {this.state.response['logo_url'] ?
                        <img src={this.state.response['logo_url']} className="restaurant-logo mr-3"/> : ''}
                </div>

                <h3 id="restaurant-name" style={{color:this.state.response['color']}}
                    className="w-100 font-weight-bold">{this.state.response['restaurant_name']}</h3>
            </div>
            <div id="top-menu">
                <div className="row top-menu"> {this.buildTopMenu(this.state.categoryNames)} </div>
            </div>
            </div>
        );
    }

    buildTopMenu(categoryNames) {
        var topMenu = [];
        for (var i = 0, max = categoryNames.length; i < max; i++) {
            var anchor = categoryNames[i];
            if (i === 0) {
                topMenu.push(<div key={i} className="top-category"><Link style={{backgroundColor:this.state.response['color']}} className="top-category-anchor active-menu" href={"#" + anchor} smooth={true}
                                                                         to={anchor}>{categoryNames[i]} </Link></div>);
            } else {
                topMenu.push(<div key={i} className="top-category"><Link style={{color:this.state.response['color']}}className="top-category-anchor" href={"#" + anchor} smooth={true}
                                                                         to={anchor}>{categoryNames[i]}</Link></div>);
            }
        }
        return topMenu;
    }
}
const NavigationMenu = compose(
    withRouter
)(Navigation);

export default NavigationMenu;
