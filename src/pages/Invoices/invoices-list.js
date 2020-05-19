import React, { Component } from 'react';
import { Container, Row, Col } from "reactstrap";

import { Link } from "react-router-dom";

//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';

//Import Card invoice
import CardInvoice from "./card-invoice"

//Import Images
import avatar2 from "../../assets/images/users/avatar-2.jpg";

class InvoicesList extends Component {
    state = {
        invoice_list: [
            { id: 1, image: "Null", founder: "Marion Burton", founderAt: "Skote", invoiceID: "14251", company: "Skote Dashboard UI", invoicePrice: "1455", date: "10 Oct, 19", color: "primary" },
            { id: 2, image: avatar2, founder: "Francis Witte", founderAt: "Skote", invoiceID: "14252", company: "Brand logo design", invoicePrice: "1024", date: "11 Oct, 19" },
            { id: 3, image: avatar2, founder: "Joseph Flint", founderAt: "Skote", invoiceID: "14253", company: "Landing page Design", invoicePrice: "1189", date: "12 Oct, 19" },
            { id: 4, image: avatar2, founder: "Larry Nielsen", founderAt: "Skote", invoiceID: "14254", company: "Redesign - Landing page", invoicePrice: "1245", date: "12 Oct, 19" },
            { id: 5, image: avatar2, founder: "Mark Evans", founderAt: "Skote", invoiceID: "14255", company: "Blog Template Design", invoicePrice: "1024", date: "11 Oct, 19" },
            { id: 6, image: "Null", founder: "Timothy Lee", founderAt: "Skote", invoiceID: "14256", company: "Landing page Design", invoicePrice: "1189", date: "13 Oct, 19", color: "success" },
            { id: 7, image: avatar2, founder: "Stanley Bland", founderAt: "Skote", invoiceID: "14257", company: "Landing page UI", invoicePrice: "1148", date: "14 Oct, 19" },
            { id: 8, image: "Null", founder: "Tommy Wilson", founderAt: "Skote", invoiceID: "14258", company: "Redesign - Dashboard", invoicePrice: "1259", date: "15 Oct, 19", color: "info" },
            { id: 9, image: avatar2, founder: "Louis Brandon", founderAt: "Skote", invoiceID: "14259", company: "Email Template UI", invoicePrice: "1355", date: "15 Oct, 19" },
        ]
    }
    render() {
        return (
            <React.Fragment>
                <div className="page-content">
                    <Container fluid>

                        {/* Render Breadcrumbs */}
                        <Breadcrumbs title="Invoices" breadcrumbItem="Invoice List" />

                        <Row>
                            {
                                this.state.invoice_list.map((invoice, key) =>
                                    <CardInvoice data={invoice} key={"_invoice_" + key} />
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

export default InvoicesList;