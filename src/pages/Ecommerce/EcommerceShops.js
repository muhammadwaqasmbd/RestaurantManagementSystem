import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';

//Import Card
import CardShop from "./CardShop";

class EcommerceShops extends Component {
    state = {
        shops: [
            { id: 1, color: "primary", name: "Brendle's", product: 112, balance: "13,575", profileLink: "#" },
            { id: 2, color: "warning", name: "Tech Hifi", product: 104, balance: "11,145", profileLink: "#" },
            { id: 3, color: "danger", name: "Lafayette", product: 126, balance: "12,356", profileLink: "#" },
            { id: 4, color: "success", name: "Packer", product: 102, balance: "11,228", profileLink: "#" },
            { id: 5, color: "info", name: "Nedick's", product: 96, balance: "9,235", profileLink: "#" },
            { id: 6, color: "dark", name: "Hudson's", product: 120, balance: "14,794", profileLink: "#" },
            { id: 7, color: "dark", name: "Tech Hifi", product: 104, balance: "11,145", profileLink: "#" },
            { id: 8, color: "primary", name: "Brendle's", product: 112, balance: "13,575", profileLink: "#" },
            { id: 9, color: "success", name: "Lafayette", product: 120, balance: "12,356", profileLink: "#" },
        ]
    }
    render() {
        return (
            <React.Fragment>
                <div className="page-content">
                    <Container fluid>

                        {/* Render Breadcrumb */}
                        <Breadcrumbs title="Ecommerce" breadcrumbItem="Shops" />
                        <Row>
                            {
                                this.state.shops.map((shop, key) =>
                                    <CardShop shop={shop} key={"_shop_" + key} />
                                )
                            }
                        </Row>
                        <Row>
                            <Col xs="12">
                                <div className="text-center my-3">
                                    <Link to="#" className="text-success"><i className="bx bx-loader bx-spin font-size-18 align-middle mr-2"></i> Load more </Link>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </React.Fragment>
        );
    }
}

export default EcommerceShops;