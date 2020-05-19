import React, { Component } from 'react';
import { Container, Row, Col, Card, CardBody, Table, Label, Input, Button, Badge, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Pagination, PaginationItem, PaginationLink } from 'reactstrap';

//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';


class EcommerceCustomers extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="page-content">
                    <Container fluid>

                        <Breadcrumbs title="Ecommerce" breadcrumbItem="Customers" />
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
                                                    <Button type="button" color="success" className="btn-rounded waves-effect waves-light mb-2 mr-2"><i className="mdi mdi-plus mr-1"></i> New Customers</Button>
                                                </div>
                                            </Col>
                                        </Row>

                                        <div className="table-responsive">
                                            <Table className="table-centered table-nowrap">
                                                <thead>
                                                    <tr>
                                                        <th>#</th>
                                                        <th>Username</th>
                                                        <th>Phone / Email</th>
                                                        <th>Address</th>
                                                        <th>Rating</th>
                                                        <th>Wallet Balance</th>
                                                        <th>Joining Date</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <div className="custom-control custom-checkbox">
                                                                <Input type="checkbox" className="custom-control-input" id="customCheck1" />
                                                                <Label className="custom-control-label" htmlFor="customCheck1">&nbsp;</Label>
                                                            </div>
                                                        </td>
                                                        <td>Stephen Rash</td>
                                                        <td>
                                                            <p className="mb-1">325-250-1106</p>
                                                            <p className="mb-0">StephenRash@teleworm.us</p>
                                                        </td>

                                                        <td>2470 Grove Street
                                                            Bethpage, NY 11714</td>
                                                        <td><Badge color="success" className="font-size-12"><i className="mdi mdi-star mr-1"></i> 4.2</Badge></td>
                                                        <td>$5,412</td>
                                                        <td>07 Oct, 2019</td>
                                                        <td>
                                                            <UncontrolledDropdown>
                                                                <DropdownToggle href="#" className="card-drop" tag="i">
                                                                    <i className="mdi mdi-dots-horizontal font-size-18"></i>
                                                                </DropdownToggle>
                                                                <DropdownMenu right>
                                                                    <DropdownItem href="#"><i className="mdi mdi-pencil font-size-16 text-success mr-2"></i>Edit</DropdownItem>
                                                                    <DropdownItem href="#"><i className="mdi mdi-trash-can font-size-16 text-danger mr-2"></i>Delete</DropdownItem>
                                                                </DropdownMenu>
                                                            </UncontrolledDropdown>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="custom-control custom-checkbox">
                                                                <Input type="checkbox" className="custom-control-input" id="customCheck2" />
                                                                <Label className="custom-control-label" htmlFor="customCheck2">&nbsp;</Label>
                                                            </div>
                                                        </td>
                                                        <td>Juan Mays</td>
                                                        <td>
                                                            <p className="mb-1">443-523-4726</p>
                                                            <p className="mb-0">JuanMays@armyspy.com</p>
                                                        </td>

                                                        <td>3755 Harron Drive
                                                                Salisbury, MD 21875</td>
                                                        <td><Badge color="success" className="font-size-12"><i className="mdi mdi-star mr-1"></i> 4.0</Badge></td>
                                                        <td>$5,632</td>
                                                        <td>06 Oct, 2019</td>
                                                        <td>
                                                            <UncontrolledDropdown>
                                                                <DropdownToggle href="#" className="card-drop" tag="i">
                                                                    <i className="mdi mdi-dots-horizontal font-size-18"></i>
                                                                </DropdownToggle>
                                                                <DropdownMenu right>
                                                                    <DropdownItem href="#"><i className="fas fa-pencil-alt text-success mr-1"></i>Edit</DropdownItem>
                                                                    <DropdownItem href="#"><i className="fas fa-trash-alt text-danger mr-1"></i>Delete</DropdownItem>
                                                                </DropdownMenu>
                                                            </UncontrolledDropdown>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="custom-control custom-checkbox">
                                                                <Input type="checkbox" className="custom-control-input" id="customCheck3" />
                                                                <Label className="custom-control-label" htmlFor="customCheck3">&nbsp;</Label>
                                                            </div>
                                                        </td>
                                                        <td>Juan Mays</td>
                                                        <td>
                                                            <p className="mb-1">443-523-4726</p>
                                                            <p className="mb-0">JuanMays@armyspy.com</p>
                                                        </td>

                                                        <td>3755 Harron Drive
                                                                Salisbury, MD 21875</td>
                                                        <td><Badge color="success" className="font-size-12"><i className="mdi mdi-star mr-1"></i> 4.0</Badge></td>
                                                        <td>$5,632</td>
                                                        <td>06 Oct, 2019</td>
                                                        <td>
                                                            <UncontrolledDropdown>
                                                                <DropdownToggle href="#" className="card-drop" tag="i">
                                                                    <i className="mdi mdi-dots-horizontal font-size-18"></i>
                                                                </DropdownToggle>
                                                                <DropdownMenu right>
                                                                    <DropdownItem href="#"><i className="fas fa-pencil-alt text-success mr-1"></i>Edit</DropdownItem>
                                                                    <DropdownItem href="#"><i className="fas fa-trash-alt text-danger mr-1"></i>Delete</DropdownItem>
                                                                </DropdownMenu>
                                                            </UncontrolledDropdown>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="custom-control custom-checkbox">
                                                                <Input type="checkbox" className="custom-control-input" id="customCheck4" />
                                                                <Label className="custom-control-label" htmlFor="customCheck4">&nbsp;</Label>
                                                            </div>
                                                        </td>
                                                        <td>Juan Mays</td>
                                                        <td>
                                                            <p className="mb-1">443-523-4726</p>
                                                            <p className="mb-0">JuanMays@armyspy.com</p>
                                                        </td>

                                                        <td>3755 Harron Drive
                                                                Salisbury, MD 21875</td>
                                                        <td><Badge color="success" className="font-size-12"><i className="mdi mdi-star mr-1"></i> 4.0</Badge></td>
                                                        <td>$5,632</td>
                                                        <td>06 Oct, 2019</td>
                                                        <td>
                                                            <UncontrolledDropdown>
                                                                <DropdownToggle href="#" className="card-drop" tag="i">
                                                                    <i className="mdi mdi-dots-horizontal font-size-18"></i>
                                                                </DropdownToggle>
                                                                <DropdownMenu right>
                                                                    <DropdownItem href="#"><i className="fas fa-pencil-alt text-success mr-1"></i>Edit</DropdownItem>
                                                                    <DropdownItem href="#"><i className="fas fa-trash-alt text-danger mr-1"></i>Delete</DropdownItem>
                                                                </DropdownMenu>
                                                            </UncontrolledDropdown>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="custom-control custom-checkbox">
                                                                <Input type="checkbox" className="custom-control-input" id="customCheck5" />
                                                                <Label className="custom-control-label" htmlFor="customCheck5">&nbsp;</Label>
                                                            </div>
                                                        </td>
                                                        <td>Juan Mays</td>
                                                        <td>
                                                            <p className="mb-1">443-523-4726</p>
                                                            <p className="mb-0">JuanMays@armyspy.com</p>
                                                        </td>

                                                        <td>3755 Harron Drive
                                                                Salisbury, MD 21875</td>
                                                        <td><Badge color="success" className="font-size-12"><i className="mdi mdi-star mr-1"></i> 4.0</Badge></td>
                                                        <td>$5,632</td>
                                                        <td>06 Oct, 2019</td>
                                                        <td>
                                                            <UncontrolledDropdown>
                                                                <DropdownToggle href="#" className="card-drop" tag="i">
                                                                    <i className="mdi mdi-dots-horizontal font-size-18"></i>
                                                                </DropdownToggle>
                                                                <DropdownMenu right>
                                                                    <DropdownItem href="#"><i className="fas fa-pencil-alt text-success mr-1"></i>Edit</DropdownItem>
                                                                    <DropdownItem href="#"><i className="fas fa-trash-alt text-danger mr-1"></i>Delete</DropdownItem>
                                                                </DropdownMenu>
                                                            </UncontrolledDropdown>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="custom-control custom-checkbox">
                                                                <Input type="checkbox" className="custom-control-input" id="customCheck6" />
                                                                <Label className="custom-control-label" htmlFor="customCheck6">&nbsp;</Label>
                                                            </div>
                                                        </td>
                                                        <td>Juan Mays</td>
                                                        <td>
                                                            <p className="mb-1">443-523-4726</p>
                                                            <p className="mb-0">JuanMays@armyspy.com</p>
                                                        </td>

                                                        <td>3755 Harron Drive
                                                                Salisbury, MD 21875</td>
                                                        <td><Badge color="success" className="font-size-12"><i className="mdi mdi-star mr-1"></i> 4.0</Badge></td>
                                                        <td>$5,632</td>
                                                        <td>06 Oct, 2019</td>
                                                        <td>
                                                            <UncontrolledDropdown>
                                                                <DropdownToggle href="#" className="card-drop" tag="i">
                                                                    <i className="mdi mdi-dots-horizontal font-size-18"></i>
                                                                </DropdownToggle>
                                                                <DropdownMenu right>
                                                                    <DropdownItem href="#"><i className="fas fa-pencil-alt text-success mr-1"></i>Edit</DropdownItem>
                                                                    <DropdownItem href="#"><i className="fas fa-trash-alt text-danger mr-1"></i>Delete</DropdownItem>
                                                                </DropdownMenu>
                                                            </UncontrolledDropdown>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="custom-control custom-checkbox">
                                                                <Input type="checkbox" className="custom-control-input" id="customCheck7" />
                                                                <Label className="custom-control-label" htmlFor="customCheck7">&nbsp;</Label>
                                                            </div>
                                                        </td>
                                                        <td>Juan Mays</td>
                                                        <td>
                                                            <p className="mb-1">443-523-4726</p>
                                                            <p className="mb-0">JuanMays@armyspy.com</p>
                                                        </td>

                                                        <td>3755 Harron Drive
                                                                Salisbury, MD 21875</td>
                                                        <td><Badge color="success" className="font-size-12"><i className="mdi mdi-star mr-1"></i> 4.0</Badge></td>
                                                        <td>$5,632</td>
                                                        <td>06 Oct, 2019</td>
                                                        <td>
                                                            <UncontrolledDropdown>
                                                                <DropdownToggle href="#" className="card-drop" tag="i">
                                                                    <i className="mdi mdi-dots-horizontal font-size-18"></i>
                                                                </DropdownToggle>
                                                                <DropdownMenu right>
                                                                    <DropdownItem href="#"><i className="fas fa-pencil-alt text-success mr-1"></i>Edit</DropdownItem>
                                                                    <DropdownItem href="#"><i className="fas fa-trash-alt text-danger mr-1"></i>Delete</DropdownItem>
                                                                </DropdownMenu>
                                                            </UncontrolledDropdown>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="custom-control custom-checkbox">
                                                                <Input type="checkbox" className="custom-control-input" id="customCheck8" />
                                                                <Label className="custom-control-label" htmlFor="customCheck8">&nbsp;</Label>
                                                            </div>
                                                        </td>
                                                        <td>Juan Mays</td>
                                                        <td>
                                                            <p className="mb-1">443-523-4726</p>
                                                            <p className="mb-0">JuanMays@armyspy.com</p>
                                                        </td>

                                                        <td>3755 Harron Drive
                                                                Salisbury, MD 21875</td>
                                                        <td><Badge color="success" className="font-size-12"><i className="mdi mdi-star mr-1"></i> 4.0</Badge></td>
                                                        <td>$5,632</td>
                                                        <td>06 Oct, 2019</td>
                                                        <td>
                                                            <UncontrolledDropdown>
                                                                <DropdownToggle href="#" className="card-drop" tag="i">
                                                                    <i className="mdi mdi-dots-horizontal font-size-18"></i>
                                                                </DropdownToggle>
                                                                <DropdownMenu right>
                                                                    <DropdownItem href="#"><i className="fas fa-pencil-alt text-success mr-1"></i>Edit</DropdownItem>
                                                                    <DropdownItem href="#"><i className="fas fa-trash-alt text-danger mr-1"></i>Delete</DropdownItem>
                                                                </DropdownMenu>
                                                            </UncontrolledDropdown>
                                                        </td>
                                                    </tr>
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
            </React.Fragment>
        );
    }
}

export default EcommerceCustomers;