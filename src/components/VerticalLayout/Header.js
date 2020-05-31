import React, { Component } from "react";

import { connect } from "react-redux";
import { Row, Col } from "reactstrap";

import {Link, Redirect} from "react-router-dom";

// Reactstrap
import { Dropdown, DropdownToggle, DropdownMenu } from "reactstrap";

// Import menuDropdown
import LanguageDropdown from "../CommonForBoth/TopbarDropdown/LanguageDropdown";
import NotificationDropdown from "../CommonForBoth/TopbarDropdown/NotificationDropdown";
import ProfileMenu from "../CommonForBoth/TopbarDropdown/ProfileMenu";

import megamenuImg from "../../assets/images/megamenu-img.png";
import logo from "../../assets/images/logo.svg";
import logoLightPng from "../../assets/images/logo-light.png";
import logoLightSvg from "../../assets/images/logo-light.svg";
import logoDark from "../../assets/images/logo-dark.png";

// import images
import github from "../../assets/images/brands/github.png";
import bitbucket from "../../assets/images/brands/bitbucket.png";
import dribbble from "../../assets/images/brands/dribbble.png";
import dropbox from "../../assets/images/brands/dropbox.png";
import mail_chimp from "../../assets/images/brands/mail_chimp.png";
import slack from "../../assets/images/brands/slack.png";

// Redux Store
import { toggleRightSidebar } from "../../store/actions";
import {baseUrl} from "../../helpers/baseUrl";
import {parse} from "echarts/extension-src/dataTool/gexf";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSearch: false,
      restaurants: [],
      restaurant_name :''
    };
    this.toggleMenu = this.toggleMenu.bind(this);
    this.toggleRightbar = this.toggleRightbar.bind(this);
    this.toggleFullscreen = this.toggleFullscreen.bind(this);
  }
  /**
   * Toggle sidebar
   */
  toggleMenu() {
    this.props.toggleMenuCallback();
  }

  /**
   * Toggles the sidebar
   */
  toggleRightbar() {
    this.props.toggleRightSidebar();
  }


  toggleFullscreen() {
    if (
      !document.fullscreenElement &&
      /* alternative standard method */ !document.mozFullScreenElement &&
      !document.webkitFullscreenElement
    ) {
      // current working methods
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen(
          Element.ALLOW_KEYBOARD_INPUT
        );
      }
    } else {
      if (document.cancelFullScreen) {
        document.cancelFullScreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
      }
    }
  }

  componentDidMount() {
      if(localStorage.getItem('access') && localStorage.getItem('isStuff') == "true"){
        this.fetchRestaurants();
      }
  }

  componentWillUnmount() {

  }

  fetchRestaurants(){
    console.log("fetching restaurants");
    const bearer = 'Bearer ' + localStorage.getItem('access');
    return fetch(baseUrl+'api/restaurants/', {
      method: 'GET',
      headers: {
        'X-Requested-With':'application/json',
        'Content-Type':'application/json',
        'Authorization': bearer
      }
    })
        .then(response => {
              console.log("register response: ",response)
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
          let resultsArr = response.results;
          const results = resultsArr.map(item => ({
            id: item.id,
            name: item.name
          }));
          console.log(results)
          this.setState({
            restaurants: results
          })
          if(localStorage.getItem('restaurantId') != "null"){
            results.forEach(item => {
              if(item.id === parseInt(localStorage.getItem('restaurantId'))){
                this.setState({
                  restaurant_name : item.name
                })
              }
            });
          }

        })
        .catch(error => console.log(error))
  }

  renderRestaurant(restaurant){
    let url = "/dashboard/"+restaurant.id+"";
    const itemrow = [
      <Row className="no-gutters" key={restaurant.id}>
        <Col>
          <Link to={url} className="dropdown-icon-item"  restaurantid={restaurant.id}>
            <span >{restaurant.name}</span>
          </Link>
        </Col>
      </Row>
    ]
    return itemrow
  }

  render() {
    const {restaurants} = this.state;
    let restaurantItems = []
    restaurants.forEach(item => {
      const restaurantItem = this.renderRestaurant(item);
      restaurantItems = restaurantItems.concat(restaurantItem)
    });
    return (
      <React.Fragment>
        <header id="page-topbar">
          <div className="navbar-header">
            <div className="d-flex">
              <div className="navbar-brand-box">
                <Link to="/" className="logo logo-dark">
                  <span className="logo-sm">
                    ORDER ME
                  </span>
                  <span className="logo-lg">
                  ORDER ME
                  </span>
                </Link>

                <Link to="/" className="logo logo-light">
                  <span className="logo-sm">
                  ORDER ME
                  </span>
                  <span className="logo-lg" style={{color:'white', fontSize:  "30px"}}>
                  ORDER ME
                  </span>
                </Link>
              </div>

              <button type="button" onClick={this.toggleMenu} className="btn btn-sm px-3 font-size-16 header-item waves-effect" id="vertical-menu-btn">
                <i className="fa fa-fw fa-bars"></i>
              </button>
            </div>

            <div className="d-flex">
              <Dropdown className="d-none d-lg-inline-block ml-1" isOpen={this.state.restaurantDrp} toggle={() => { this.setState({ restaurantDrp: !this.state.restaurantDrp }) }}>
                {localStorage.getItem('restaurantId') != "null" ? <span>{this.state.restaurant_name}</span> : ""}

                <DropdownToggle className="btn header-item noti-icon waves-effect" tag="button">
                  <i className="bx bx-caret-down"></i>
                </DropdownToggle>
                <DropdownMenu className="dropdown-menu-sm" right style={{textAlign:"right"}}>
                  <div className="px-lg-2">
                    {restaurantItems}
                  </div>
                </DropdownMenu>
              </Dropdown>
              <Dropdown className="d-none d-lg-inline-block ml-1" isOpen={this.state.socialDrp} toggle={() => { this.setState({ socialDrp: !this.state.socialDrp }) }}>
                <DropdownToggle className="btn header-item noti-icon waves-effect" tag="button">
                  <i className="bx bx-cog "></i>
                </DropdownToggle>
                <DropdownMenu className="dropdown-menu-sm" right>
                  <div className="px-lg-2">
                    <Row className="no-gutters">
                      <Col>
                      <Link to="/resturants" className="dropdown-icon-item">
                          <span>Restaurants</span>
                        </Link>
                      </Col>
                    </Row>

                    <Row className="no-gutters">
                      <Col>
                        <Link className="dropdown-icon-item" to="#">
                          <span>Account</span>
                        </Link>
                      </Col>
                    </Row>

                    <Row className="no-gutters">
                      <Col>
                        <Link className="dropdown-icon-item" to="/login">
                          <span>Logout</span>
                        </Link>
                      </Col>
                    </Row>
                  </div>
                </DropdownMenu>
              </Dropdown>
            </div>
          </div>
        </header>
      </React.Fragment>
    );
  }
}

const mapStatetoProps = state => {
  const { layoutType } = state.Layout;
  return { layoutType };
};

export default connect(mapStatetoProps, { toggleRightSidebar })(Header);
