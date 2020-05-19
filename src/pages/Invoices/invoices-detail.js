import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, CardBody, Table } from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';

//Import Image
import logo from "../../assets/images/logo-dark.png";

class InvoiceDetail extends Component {
    constructor() {
        super();
        this.printInvoice.bind(this);
    }

    //Print the Invoice
    printInvoice() {
        window.print();
    }

    render() {
        return (
            <React.Fragment>
                <div className="page-content">
                    <Container fluid>

                        {/* Render Breadcrumbs */}
                        <Breadcrumbs title="Invoices" breadcrumbItem="Detail" />

                        <Row>
                            <Col lg="12">
                                <Card>
                                    <CardBody>
                                        <div className="invoice-title">
                                            <h4 className="float-right font-size-16">Order # 12345</h4>
                                            <div className="mb-4">
                                                <img src={logo} alt="logo" height="20" />
                                            </div>
                                        </div>
                                        <hr />
                                        <Row>
                                            <Col xs="6">
                                                <address>
                                                    <strong>Billed To:</strong><br />
                                                    John Smith<br />
                                                    1234 Main<br />
                                                    Apt. 4B<br />
                                                    Springfield, ST 54321
                                                </address>
                                            </Col>
                                            <Col xs="6" className="text-right">
                                                <address>
                                                    <strong>Shipped To:</strong><br />
                                                    Kenny Rigdon<br />
                                                    1234 Main<br />
                                                    Apt. 4B<br />
                                                    Springfield, ST 54321
                                                </address>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col xs="6" className="mt-3">
                                                <address>
                                                    <strong>Payment Method:</strong><br />
                                                    Visa ending **** 4242<br />
                                                    jsmith@email.com
                                                </address>
                                            </Col>
                                            <Col xs="6" className="mt-3 text-right">
                                                <address>
                                                    <strong>Order Date:</strong><br />
                                                    October 16, 2019<br /><br />
                                                </address>
                                            </Col>
                                        </Row>
                                        <div className="py-2 mt-3">
                                            <h3 className="font-size-15 font-weight-bold">Order summary</h3>
                                        </div>
                                        <div className="table-responsive">
                                            <Table className="table-nowrap">
                                                <thead>
                                                    <tr>
                                                        <th style={{ width: "70px" }}>No.</th>
                                                        <th>Item</th>
                                                        <th className="text-right">Price</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>01</td>
                                                        <td>Skote - Bootstrap 4 Admin Dashboard</td>
                                                        <td className="text-right">$499.00</td>
                                                    </tr>

                                                    <tr>
                                                        <td>02</td>
                                                        <td>Skote - Bootstrap 4 Landing Template</td>
                                                        <td className="text-right">$399.00</td>
                                                    </tr>

                                                    <tr>
                                                        <td>03</td>
                                                        <td>Veltrix - Bootstrap 4 Admin Template</td>
                                                        <td className="text-right">$499.00</td>
                                                    </tr>
                                                    <tr>
                                                        <td colSpan="2" className="text-right">Sub Total</td>
                                                        <td className="text-right">$1397.00</td>
                                                    </tr>
                                                    <tr>
                                                        <td colSpan="2" className="border-0 text-right">
                                                            <strong>Shipping</strong></td>
                                                        <td className="border-0 text-right">$13.00</td>
                                                    </tr>
                                                    <tr>
                                                        <td colSpan="2" className="border-0 text-right">
                                                            <strong>Total</strong></td>
                                                        <td className="border-0 text-right"><h4 className="m-0">$1410.00</h4></td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </div>
                                        <div className="d-print-none">
                                            <div className="float-right">
                                                <Link to="#" onClick={this.printInvoice} className="btn btn-success waves-effect waves-light mr-2"><i className="fa fa-print"></i></Link>
                                                <Link to="#" className="btn btn-primary w-md waves-effect waves-light">Send</Link>
                                            </div>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>

                    </Container>
                </div>
            </React.Fragment>
        );
    }
}

export default InvoiceDetail;