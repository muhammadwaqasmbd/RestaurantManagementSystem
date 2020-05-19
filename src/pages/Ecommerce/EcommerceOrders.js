import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col, Input, Button, Card, CardBody, Table, Label, Badge, Modal, ModalHeader, ModalBody, ModalFooter, UncontrolledTooltip, Pagination, PaginationItem, PaginationLink } from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';

import img4 from "../../assets/images/product/img-4.png";
import img7 from "../../assets/images/product/img-7.png";


class EcommerceOrders extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Orders: [
                { id: "customCheck2", orderId: "#SK2540", billingName: "Neal Matthews", Date: "07 Oct, 2019", total: "$400", badgeclass: "success", paymentStatus: "Paid", methodIcon: "fa-cc-mastercard", paymentMethod: "Mastercard" },
                { id: "customCheck3", orderId: "#SK2541", billingName: "Jamal Burnett", Date: "07 Oct, 2019", total: "$380", badgeclass: "danger", paymentStatus: "Chargeback", methodIcon: "fa-cc-visa", paymentMethod: "Visa" },
                { id: "customCheck4", orderId: "#SK2542", billingName: "Juan Mitchell", Date: "06 Oct, 2019", total: "$384", badgeclass: "success", paymentStatus: "Paid", methodIcon: "fa-cc-paypal", paymentMethod: "Paypal" },
                { id: "customCheck5", orderId: "#SK2543", billingName: "Barry Dick", Date: "05 Oct, 2019", total: "$412", badgeclass: "success", paymentStatus: "Paid", methodIcon: "fa-cc-mastercard", paymentMethod: "Mastercard" },
                { id: "customCheck6", orderId: "#SK2544", billingName: "Ronald Taylor", Date: "04 Oct, 2019", total: "$404", badgeclass: "warning", paymentStatus: "Refund", methodIcon: "fa-cc-visa", paymentMethod: "Visa" },
                { id: "customCheck7", orderId: "#SK2545", billingName: "Jacob Hunter", Date: "04 Oct, 2019", total: "$392", badgeclass: "success", paymentStatus: "Paid", methodIcon: "fa-cc-paypal", paymentMethod: "Paypal" },
                { id: "customCheck8", orderId: "#SK2546", billingName: "William Cruz", Date: "03 Oct, 2019", total: "$374", badgeclass: "success", paymentStatus: "Paid", methodIcon: "fa-money-bill-alt", paymentMethod: "COD" },
                { id: "customCheck9", orderId: "#SK2547", billingName: "Dustin Moser", Date: "02 Oct, 2019", total: "$350", badgeclass: "success", paymentStatus: "Paid", methodIcon: "fa-cc-paypal", paymentMethod: "Mastercard" },
                { id: "customCheck10", orderId: "#SK2548", billingName: "Clark Benson", Date: "01 Oct, 2019", total: "$345", badgeclass: "warning", paymentStatus: "Refund", methodIcon: "fa-cc-paypal", paymentMethod: "Visa" },
            ],
            modal: false,
        }
        this.togglemodal.bind(this);
    }

    togglemodal = () => {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    render() {
        return (
            <React.Fragment>
                <div className="page-content">
                    <Container fluid>
                        <Breadcrumbs title="Ecommerce" breadcrumbItem="Orders" />
                        <Row>
                            <Col xs="12">
                                <Card>
                                    <CardBody>
                                        <Row className="mb-2">
                                            <Col sm="4">
                                                <div className="search-box mr-2 mb-2 d-inline-block">
                                                    <div className="position-relative">
                                                        <Input type="text" className="form-control" placeholder="Search..." />
                                                        <i className="bx bx-search-alt search-icon"></i>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col sm="8">
                                                <div className="text-sm-right">
                                                    <Button type="button" color="success" className="btn-rounded waves-effect waves-light mb-2 mr-2"><i className="mdi mdi-plus mr-1"></i> Add New Order</Button>
                                                </div>
                                            </Col>
                                        </Row>

                                        <div className="table-responsive">
                                            <Table className="table table-centered table-nowrap">
                                                <thead className="thead-light">
                                                    <tr>
                                                        <th style={{ width: "20px" }}>
                                                            <div className="custom-control custom-checkbox">
                                                                <Input type="checkbox" className="custom-control-input" id="customCheck1" />
                                                                <Label className="custom-control-label" htmlFor="customCheck1">&nbsp;</Label>
                                                            </div>
                                                        </th>
                                                        <th>Order ID</th>
                                                        <th>Billing Name</th>
                                                        <th>Date</th>
                                                        <th>Total</th>
                                                        <th>Payment Status</th>
                                                        <th>Payment Method</th>
                                                        <th>View Details</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        this.state.Orders.map((order, key) =>
                                                            <tr key={"_order_" + key}>
                                                                <td>
                                                                    <div className="custom-control custom-checkbox">
                                                                        <Input type="checkbox" className="custom-control-input" id={order.id} />
                                                                        <Label className="custom-control-label" htmlFor={order.id}>&nbsp;</Label>
                                                                    </div>
                                                                </td>
                                                                <td><Link to="#" className="text-body font-weight-bold">{order.orderId}</Link></td>
                                                                <td>{order.billingName}</td>
                                                                <td>
                                                                    {order.Date}
                                                                </td>
                                                                <td>
                                                                    {order.total}
                                                                </td>
                                                                <td>
                                                                    <Badge className={"font-size-12 badge-soft-" + order.badgeclass} color={order.badgeClass} pill>{order.paymentStatus}</Badge>
                                                                </td>
                                                                <td>
                                                                    <i className={"fab " + order.methodIcon + " mr-1"}></i> {order.paymentMethod}
                                                                </td>
                                                                <td>
                                                                    <Button type="button" color="primary" className="btn-sm btn-rounded" onClick={this.togglemodal}>
                                                                        View Details
                                                                    </Button>
                                                                </td>
                                                                <td>
                                                                    <Link to="#" className="mr-3 text-primary">
                                                                        <i className="mdi mdi-pencil font-size-18 mr-3" id="edittooltip"></i>
                                                                        <UncontrolledTooltip placement="top" target="edittooltip">
                                                                            Edit
                                                                        </UncontrolledTooltip >
                                                                    </Link>
                                                                    <Link to="#" className="text-danger">
                                                                        <i className="mdi mdi-close font-size-18 mr-3" id="deletetooltip"></i>
                                                                        <UncontrolledTooltip placement="top" target="deletetooltip">
                                                                            Delete
                                                                        </UncontrolledTooltip >
                                                                    </Link>
                                                                </td>
                                                            </tr>
                                                        )
                                                    }

                                                </tbody>
                                            </Table>
                                        </div>
                                        <Pagination className="pagination pagination-rounded justify-content-end mb-2">
                                            <PaginationItem disabled>
                                                <PaginationLink previous href="#" />
                                            </PaginationItem>
                                            <PaginationItem>
                                                <PaginationLink href="#">
                                                    1
                                                </PaginationLink>
                                            </PaginationItem>
                                            <PaginationItem active>
                                                <PaginationLink href="#">
                                                    2
                                                </PaginationLink>
                                            </PaginationItem>
                                            <PaginationItem>
                                                <PaginationLink href="#">
                                                    3
                                                </PaginationLink>
                                            </PaginationItem>
                                            <PaginationItem>
                                                <PaginationLink href="#">
                                                    4
                                                </PaginationLink>
                                            </PaginationItem>
                                            <PaginationItem>
                                                <PaginationLink href="#">
                                                    5
                                                </PaginationLink>
                                            </PaginationItem>
                                            <PaginationItem>
                                                <PaginationLink next href="#" />
                                            </PaginationItem>
                                        </Pagination>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </div>

                <Modal isOpen={this.state.modal} role="dialog" autoFocus={true} centered={true} className="exampleModal" tabindex="-1" toggle={this.togglemodal}>
                    <div className="modal-content">
                        <ModalHeader toggle={this.togglemodal}>
                            Order Details
                            </ModalHeader >
                        <ModalBody>
                            <p className="mb-2">Product id: <span className="text-primary">#SK2540</span></p>
                            <p className="mb-4">Billing Name: <span className="text-primary">Neal Matthews</span></p>

                            <div className="table-responsive">
                                <Table className="table table-centered table-nowrap">
                                    <thead>
                                        <tr>
                                            <th scope="col">Product</th>
                                            <th scope="col">Product Name</th>
                                            <th scope="col">Price</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">
                                                <div>
                                                    <img src={img7} alt="" className="avatar-sm" />
                                                </div>
                                            </th>
                                            <td>
                                                <div>
                                                    <h5 className="text-truncate font-size-14">Wireless Headphone (Black)</h5>
                                                    <p className="text-muted mb-0">$ 225 x 1</p>
                                                </div>
                                            </td>
                                            <td>$ 255</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">
                                                <div>
                                                    <img src={img4} alt="" className="avatar-sm" />
                                                </div>
                                            </th>
                                            <td>
                                                <div>
                                                    <h5 className="text-truncate font-size-14">Hoodie (Blue)</h5>
                                                    <p className="text-muted mb-0">$ 145 x 1</p>
                                                </div>
                                            </td>
                                            <td>$ 145</td>
                                        </tr>
                                        <tr>
                                            <td colspan="2">
                                                <h6 className="m-0 text-right">Sub Total:</h6>
                                            </td>
                                            <td>
                                                $ 400
                                                </td>
                                        </tr>
                                        <tr>
                                            <td colspan="2">
                                                <h6 className="m-0 text-right">Shipping:</h6>
                                            </td>
                                            <td>
                                                Free
                                                </td>
                                        </tr>
                                        <tr>
                                            <td colspan="2">
                                                <h6 className="m-0 text-right">Total:</h6>
                                            </td>
                                            <td>
                                                $ 400
                                                </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </ModalBody>
                        <ModalFooter>
                            <Button type="button" color="secondary" onClick={this.togglemodal}>Close</Button>
                        </ModalFooter>
                    </div>
                </Modal>
            </React.Fragment>
        );
    }
}

export default EcommerceOrders;