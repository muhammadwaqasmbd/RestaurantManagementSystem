import React, { Component } from 'react';

import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import { connect } from "react-redux";
import LightData from "./LightData";
import { Row, Col, Card, CardBody, CardTitle, CardSubtitle } from "reactstrap";
//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';

const LoadingContainer = props => <div>Loading...</div>;

class MapsGoogle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {}
    }
    this.onMarkerClick = this.onMarkerClick.bind(this);
  }

  onMarkerClick(props, marker, e) {
    alert("You clicked in this marker");
  }

  render() {
    return (
      <React.Fragment>
        <div className="page-content">
          <div className="container-fluid">

            <Breadcrumbs title="Maps" breadcrumbItem="Google Maps" />

            <Row>
              <Col lg={6}>
                <Card>
                  <CardBody>
                    <CardTitle>Markers</CardTitle>
                    <CardSubtitle className="mb-3">Example of google maps.</CardSubtitle>
                    <div
                      id="gmaps-markers"
                      className="gmaps"
                      style={{ position: "relative" }}
                    >
                      <Map
                        google={this.props.google}
                        style={{ width: "100%", height: "100%" }}
                        zoom={14}
                      >
                        <Marker
                          title={"The marker`s title will appear as a tooltip."}
                          name={"SOMA"}
                          position={{ lat: 37.778519, lng: -122.40564 }}
                        />
                        <Marker name={"Dolores park"} />
                        <InfoWindow>
                          <div>
                            <h1>{this.state.selectedPlace.name}</h1>
                          </div>
                        </InfoWindow>
                      </Map>
                    </div>
                  </CardBody>
                </Card>
              </Col>

              <Col lg={6}>
                <Card>
                  <CardBody>
                    <CardTitle>Overlays</CardTitle>
                    <CardSubtitle className="mb-3">Example of google maps.</CardSubtitle>
                    <div
                      id="gmaps-overlay"
                      className="gmaps"
                      style={{ position: "relative" }}
                    >
                      <Map
                        google={this.props.google}
                        zoom={14}
                        style={{ width: "100%", height: "100%" }}
                        initialCenter={{
                          lat: 40.854885,
                          lng: -88.081807
                        }}
                      >
                        <Marker onClick={this.onMarkerClick} />
                        <InfoWindow>
                          <div>
                            <h1>{this.state.selectedPlace.name}</h1>
                          </div>
                        </InfoWindow>
                      </Map>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>

            <Row>
              <Col lg={6}>
                <Card>
                  <CardBody>
                    <CardTitle>Basic</CardTitle>
                    <CardSubtitle className="mb-3">Example of google maps.</CardSubtitle>
                    <div
                      id="gmaps-markers"
                      className="gmaps"
                      style={{ position: "relative" }}
                    >
                      <Map
                        google={this.props.google}
                        zoom={14}
                        style={{ width: "100%", height: "100%" }}
                      >
                        <InfoWindow>
                          <div>
                            <h1>{this.state.selectedPlace.name}</h1>
                          </div>
                        </InfoWindow>
                      </Map>
                    </div>
                  </CardBody>
                </Card>
              </Col>

              <Col lg={6}>
                <Card>
                  <CardBody>
                    <CardTitle>Ultra Light</CardTitle>
                    <CardSubtitle className="mb-3">Example of google maps.</CardSubtitle>
                    <div
                      id="gmaps-overlay"
                      className="gmaps"
                      style={{ position: "relative" }}
                    >
                      <Map
                        google={this.props.google}
                        zoom={14}
                        styles={LightData.Data}
                        style={{ width: "100%", height: "100%" }}
                      >
                        <Marker onClick={this.onMarkerClick} />
                        <InfoWindow>
                          <div>
                            <h1>{this.state.selectedPlace.name}</h1>
                          </div>
                        </InfoWindow>
                      </Map>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </div>
        </div>
      </React.Fragment>

    );
  }
}

export default connect(
  null,
  {}
)(
  GoogleApiWrapper({
    apiKey: "AIzaSyAbvyBxmMbFhrzP9Z8moyYr6dCr-pzjhBE",
    LoadingContainer: LoadingContainer,
    v: "3"
  })(MapsGoogle)
);
