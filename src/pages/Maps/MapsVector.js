import React, { Component } from 'react';

import { Row, Col, Card, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import Vector from "./Vectormap";
//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';

class MapsVector extends Component {
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

            <Breadcrumbs title="Maps" breadcrumbItem="Vector Maps" />


            <Row>
              <Col lg={6}>
                <Card>
                  <CardBody>
                    <CardTitle>World Map</CardTitle>
                    <CardSubtitle className="mb-3">Example of vector map.</CardSubtitle>

                    <div id="world-map-markers" className="vector-map-height">
                      <Vector
                        value="world_mill"
                        width="500"
                        color="rgb(98, 110, 212)"
                      />
                    </div>
                  </CardBody>
                </Card>
              </Col>
              <Col lg={6}>
                <Card>
                  <CardBody>
                    <CardTitle>USA Map</CardTitle>
                    <CardSubtitle className="mb-3">Example of vector map.</CardSubtitle>

                    <div id="usa" className="vector-map-height">
                      <Vector
                        value="us_aea"
                        width="500"
                        color="rgb(98, 110, 212)"
                      />
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>

            <Row>
              <Col lg={6}>
                <Card>
                  <CardBody>
                    <CardTitle>Canada Map</CardTitle>
                    <CardSubtitle className="mb-3">Example of vector map.</CardSubtitle>

                    <div id="uk" className="vector-map-height">
                      <Vector
                        value="ca_lcc"
                        width="500"
                        color="rgb(98, 110, 212)"
                      />
                    </div>
                  </CardBody>
                </Card>
              </Col>

              <Col lg={6}>
                <Card>
                  <CardBody>
                    <CardTitle>Asia Vector Map</CardTitle>
                    <CardSubtitle className="mb-3">Example of vector map.</CardSubtitle>

                    <div id="chicago" className="vector-map-height">
                      <Vector
                        value="asia_mill"
                        width="500"
                        color="rgb(98, 110, 212)"
                      />
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

export default MapsVector;