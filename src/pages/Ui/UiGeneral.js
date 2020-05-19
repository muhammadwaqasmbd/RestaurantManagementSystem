import React, { Component } from "react";

import {
    Button, Popover, PopoverHeader, PopoverBody, Tooltip,
    Col, Row, Card, CardBody, CardTitle, CardSubtitle
} from 'reactstrap';

import { Link } from "react-router-dom";

//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';

class UiGeneral extends Component {
    constructor(props) {
        super(props);
        this.state = {  // Popover
            popovertop: false,
            popoverleft: false,
            popoverright: false,
            popoverbottom: false,
        };
        this.toggletop = this.toggletop.bind(this);
        this.toggleright = this.toggleright.bind(this);
        this.toggleleft = this.toggleleft.bind(this);
        this.togglebottom = this.togglebottom.bind(this);
        this.toggledismiss = this.toggledismiss.bind(this);
        this.toggledismissclose = this.toggledismissclose.bind(this);
    }
    toggletop() { this.setState({ popovertop: !this.state.popovertop }); }
    toggleleft() { this.setState({ popoverleft: !this.state.popoverleft }); }
    toggleright() { this.setState({ popoverright: !this.state.popoverright }); }
    togglebottom() { this.setState({ popoverbottom: !this.state.popoverbottom }); }
    toggledismiss() { this.setState({ popoverdismiss: !this.state.popoverdismiss }); }
    toggledismissclose() { this.setState({ popoverdismiss: false }); }


    render() {
        return (
            <React.Fragment>
                <div className="page-content">
                    <div className="container-fluid">

                        <Breadcrumbs title="UI Elements" breadcrumbItem="General" />

                        <Row>
                            <Col lg={12}>
                                <Card>
                                    <CardBody>
                                        <Row>
                                            <Col lg={6}>
                                                <CardTitle>Badges</CardTitle>
                                                <CardSubtitle className="mb-3">Add any of the below mentioned modifier classes to change the appearance of a badge.</CardSubtitle>
                                                <div>
                                                    <span className="badge badge-primary">Primary</span>{' '}
                                                    <span className="badge badge-success">Success</span>{' '}
                                                    <span className="badge badge-info">Info</span>{' '}
                                                    <span className="badge badge-warning">Warning</span>{' '}
                                                    <span className="badge badge-danger">Danger</span>{' '}
                                                    <span className="badge badge-dark">Dark</span>
                                                </div>

                                                <div className="mt-1">
                                                    <span className="badge badge-soft-primary">Primary</span>{' '}
                                                    <span className="badge badge-soft-success">Success</span>{' '}
                                                    <span className="badge badge-soft-info">Info</span>{' '}
                                                    <span className="badge badge-soft-warning">Warning</span>{' '}
                                                    <span className="badge badge-soft-danger">Danger</span>{' '}
                                                    <span className="badge badge-soft-dark">Dark</span>
                                                </div>
                                            </Col>
                                            <Col lg={6}>
                                                <CardTitle>Pill badges</CardTitle>
                                                <CardSubtitle className="mb-3">Use the <code>.badge-pill</code> modifier className to make
                                                    badges more rounded (with a larger <code>border-radius</code>
                                                    and additional horizontal <code>padding</code>).
                                                    Useful if you miss the badges from v3.</CardSubtitle>

                                                <div>
                                                    <span className="badge badge-pill badge-primary">Primary</span>{' '}
                                                    <span className="badge badge-pill badge-success">Success</span>{' '}
                                                    <span className="badge badge-pill badge-info">Info</span>{' '}
                                                    <span className="badge badge-pill badge-warning">Warning</span>{' '}
                                                    <span className="badge badge-pill badge-danger">Danger</span>{' '}
                                                    <span className="badge badge-pill badge-dark">Dark</span>
                                                </div>

                                                <div className="mt-1">
                                                    <span className="badge badge-pill badge-soft-primary">Primary</span>{' '}
                                                    <span className="badge badge-pill badge-soft-success">Success</span>{' '}
                                                    <span className="badge badge-pill badge-soft-info">Info</span>{' '}
                                                    <span className="badge badge-pill badge-soft-warning">Warning</span>{' '}
                                                    <span className="badge badge-pill badge-soft-danger">Danger</span>{' '}
                                                    <span className="badge badge-pill badge-soft-dark">Dark</span>
                                                </div>
                                            </Col>
                                        </Row>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>

                        <Row>
                            <Col lg={6}>
                                <Card>
                                    <CardBody>
                                        <CardTitle>Popovers</CardTitle>
                                        <CardSubtitle className="mb-3">Add small overlay content, like those found in iOS, to any element for housing secondary information.</CardSubtitle>
                                        <div className="button-items">
                                            <Button id="Popovertop" color="secondary" onClick={this.toggletop} >
                                                Popover on top
                                            </Button>
                                            <Popover placement="top" isOpen={this.state.popovertop} target="Popovertop" toggle={this.toggletop}>
                                                <PopoverHeader>Popover Title</PopoverHeader>
                                                <PopoverBody>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</PopoverBody>
                                            </Popover> &nbsp;

                                            <Button id="Popoverright" onClick={this.toggleright} color="secondary">
                                                Popover on right
                                            </Button>
                                            <Popover placement="right" isOpen={this.state.popoverright} target="Popoverright" toggle={this.toggleright}>
                                                <PopoverHeader>Popover Title</PopoverHeader>
                                                <PopoverBody>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</PopoverBody>
                                            </Popover> &nbsp;

                                            <Button id="Popoverbottom" onClick={this.togglebottom} color="secondary">
                                                Popover on bottom
                                            </Button>
                                            <Popover placement="bottom" isOpen={this.state.popoverbottom} target="Popoverbottom" toggle={this.togglebottom}>
                                                <PopoverHeader>Popover Title</PopoverHeader>
                                                <PopoverBody>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</PopoverBody>
                                            </Popover> &nbsp;

                                            <Button id="Popoverleft" onClick={this.toggleleft} color="secondary">
                                                Popover on left
                                            </Button>
                                            <Popover placement="left" isOpen={this.state.popoverleft} target="Popoverleft" toggle={this.toggleleft}>
                                                <PopoverHeader>Popover Title</PopoverHeader>
                                                <PopoverBody>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</PopoverBody>
                                            </Popover> &nbsp;

                                            <Button id="Popoverdismiss" className="btn btn-success" onClick={this.toggledismiss}>
                                                Dismissible popover
                                            </Button>
                                            <Popover onClick={this.toggledismissclose} placement="bottom" isOpen={this.state.popoverdismiss} target="Popoverdismiss" toggle={this.toggledismiss}>
                                                <PopoverHeader>Popover Title</PopoverHeader>
                                                <PopoverBody>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</PopoverBody>
                                            </Popover>
                                        </div>
                                    </CardBody>

                                </Card>
                            </Col>

                            <Col lg={6}>
                                <Card>
                                    <CardBody>
                                        <CardTitle>Tooltips</CardTitle>
                                        <CardSubtitle className="mb-3">Hover over the links below to see tooltips:</CardSubtitle>

                                        <div className="button-items">
                                            <Tooltip placement="top" isOpen={this.state.tttop} target="TooltipTop" toggle={() => this.setState({ tttop: !this.state.tttop })}>Hello world!</Tooltip>
                                            <Tooltip placement="right" isOpen={this.state.ttright} target="TooltipRight" toggle={() => this.setState({ ttright: !this.state.ttright })}>Hello world!</Tooltip>
                                            <Tooltip placement="bottom" isOpen={this.state.ttbottom} target="TooltipBottom" toggle={() => this.setState({ ttbottom: !this.state.ttbottom })}>Hello world!</Tooltip>
                                            <Tooltip placement="left" isOpen={this.state.ttleft} target="TooltipLeft" toggle={() => this.setState({ ttleft: !this.state.ttleft })}>Hello world!</Tooltip>

                                            <button type="button" className="btn btn-primary" id="TooltipTop"> Tooltip on top</button>
                                            <button type="button" className="btn btn-primary" id="TooltipBottom"> Tooltip on Bottom</button>
                                            <button type="button" className="btn btn-primary" id="TooltipLeft"> Tooltip on Left</button>
                                            <button type="button" className="btn btn-primary" id="TooltipRight"> Tooltip on Right</button>
                                        </div>

                                    </CardBody>
                                </Card>
                            </Col>

                            <Col lg={12}>
                                <Card>
                                    <CardBody>
                                        <CardTitle className="mb-4">Pagination</CardTitle>
                                        <Row>
                                            <Col lg={6}>
                                                <CardTitle>Default Example</CardTitle>
                                                <CardSubtitle className="mb-3">Pagination links indicate a series of related content exists across multiple pages.</CardSubtitle>

                                                <nav aria-label="Page navigation example">
                                                    <ul className="pagination">
                                                        <li className="page-item"><Link className="page-link" to="#">Previous</Link></li>
                                                        <li className="page-item"><Link className="page-link" to="#">1</Link></li>
                                                        <li className="page-item"><Link className="page-link" to="#">2</Link></li>
                                                        <li className="page-item"><Link className="page-link" to="#">3</Link></li>
                                                        <li className="page-item"><Link className="page-link" to="#">Next</Link></li>
                                                    </ul>
                                                </nav>

                                                <nav aria-label="Page navigation example">
                                                    <ul className="pagination">
                                                        <li className="page-item">
                                                            <Link className="page-link" to="#" aria-label="Previous">
                                                                <span aria-hidden="true">&laquo;</span>
                                                                <span className="sr-only">Previous</span>
                                                            </Link>
                                                        </li>
                                                        <li className="page-item"><Link className="page-link" to="#">1</Link></li>
                                                        <li className="page-item"><Link className="page-link" to="#">2</Link></li>
                                                        <li className="page-item"><Link className="page-link" to="#">3</Link></li>
                                                        <li className="page-item">
                                                            <Link className="page-link" to="#" aria-label="Next">
                                                                <span aria-hidden="true">&raquo;</span>
                                                                <span className="sr-only">Next</span>
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </nav>
                                            </Col>

                                            <Col lg={6}>
                                                <CardTitle>Disabled and active states</CardTitle>
                                                <CardSubtitle className="mb-3">Pagination links are customizable for
                                                        different circumstances. Use <code>.disabled</code> for links that appear
                                                        un-clickable and <code>.active</code> to
                                                        indicate the current page.</CardSubtitle>

                                                <nav aria-label="...">
                                                    <ul className="pagination">
                                                        <li className="page-item disabled">
                                                            <Link className="page-link" to="#" tabIndex="-1">Previous</Link>
                                                        </li>
                                                        <li className="page-item"><Link className="page-link" to="#">1</Link></li>
                                                        <li className="page-item active">
                                                            <Link className="page-link" to="#">2 <span className="sr-only">(current)</span></Link>
                                                        </li>
                                                        <li className="page-item"><Link className="page-link" to="#">3</Link></li>
                                                        <li className="page-item">
                                                            <Link className="page-link" to="#">Next</Link>
                                                        </li>
                                                    </ul>
                                                </nav>

                                                <nav aria-label="...">
                                                    <ul className="pagination">
                                                        <li className="page-item disabled">
                                                            <span className="page-link">Previous</span>
                                                        </li>
                                                        <li className="page-item"><Link className="page-link" to="#">1</Link></li>
                                                        <li className="page-item active">
                                                            <span className="page-link">
                                                                2
                                                                <span className="sr-only">(current)</span>
                                                            </span>
                                                        </li>
                                                        <li className="page-item"><Link className="page-link" to="#">3</Link></li>
                                                        <li className="page-item">
                                                            <Link className="page-link" to="#">Next</Link>
                                                        </li>
                                                    </ul>
                                                </nav>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col lg={6}>
                                                <CardTitle>Sizing</CardTitle>
                                                <CardSubtitle className="mb-3">Fancy larger or smaller pagination? Add <code>.pagination-lg</code> or <code>.pagination-sm</code> for additional
                                                        sizes.</CardSubtitle>

                                                <nav aria-label="...">
                                                    <ul className="pagination pagination-lg">
                                                        <li className="page-item disabled">
                                                            <Link className="page-link" to="#" tabIndex="-1">Previous</Link>
                                                        </li>
                                                        <li className="page-item"><Link className="page-link" to="#">1</Link></li>
                                                        <li className="page-item"><Link className="page-link" to="#">2</Link></li>
                                                        <li className="page-item"><Link className="page-link" to="#">3</Link></li>
                                                        <li className="page-item">
                                                            <Link className="page-link" to="#">Next</Link>
                                                        </li>
                                                    </ul>
                                                </nav>

                                                <nav aria-label="...">
                                                    <ul className="pagination pagination-sm">
                                                        <li className="page-item disabled">
                                                            <Link className="page-link" to="#" tabIndex="-1">Previous</Link>
                                                        </li>
                                                        <li className="page-item"><Link className="page-link" to="#">1</Link></li>
                                                        <li className="page-item"><Link className="page-link" to="#">2</Link></li>
                                                        <li className="page-item"><Link className="page-link" to="#">3</Link></li>
                                                        <li className="page-item">
                                                            <Link className="page-link" to="#">Next</Link>
                                                        </li>
                                                    </ul>
                                                </nav>

                                            </Col>

                                            <Col lg={6}>
                                                <CardTitle>Alignment</CardTitle>
                                                <CardSubtitle className="mb-3">Change the alignment of pagination
                                                        components with flexbox utilities.</CardSubtitle>

                                                <nav aria-label="Page navigation example">
                                                    <ul className="pagination justify-content-center">
                                                        <li className="page-item disabled">
                                                            <Link className="page-link" to="#" tabIndex="-1">Previous</Link>
                                                        </li>
                                                        <li className="page-item"><Link className="page-link" to="#">1</Link></li>
                                                        <li className="page-item"><Link className="page-link" to="#">2</Link></li>
                                                        <li className="page-item"><Link className="page-link" to="#">3</Link></li>
                                                        <li className="page-item">
                                                            <Link className="page-link" to="#">Next</Link>
                                                        </li>
                                                    </ul>
                                                </nav>

                                                <nav aria-label="Page navigation example">
                                                    <ul className="pagination justify-content-end">
                                                        <li className="page-item disabled">
                                                            <Link className="page-link" to="#" tabIndex="-1">Previous</Link>
                                                        </li>
                                                        <li className="page-item"><Link className="page-link" to="#">1</Link></li>
                                                        <li className="page-item"><Link className="page-link" to="#">2</Link></li>
                                                        <li className="page-item"><Link className="page-link" to="#">3</Link></li>
                                                        <li className="page-item">
                                                            <Link className="page-link" to="#">Next</Link>
                                                        </li>
                                                    </ul>
                                                </nav>

                                            </Col>
                                        </Row>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>

                        <Row>
                            <Col lg={6}>
                                <Card>
                                    <CardBody>
                                        <CardTitle>Border spinner</CardTitle>
                                        <CardSubtitle className="mb-3">Use the border spinners for a lightweight loading indicator.</CardSubtitle>
                                        <div>
                                            <div className="spinner-border text-primary m-1" role="status">
                                                <span className="sr-only">Loading...</span>
                                            </div>
                                            <div className="spinner-border text-secondary m-1" role="status">
                                                <span className="sr-only">Loading...</span>
                                            </div>
                                            <div className="spinner-border text-success m-1" role="status">
                                                <span className="sr-only">Loading...</span>
                                            </div>
                                            <div className="spinner-border text-info m-1" role="status">
                                                <span className="sr-only">Loading...</span>
                                            </div>
                                            <div className="spinner-border text-warning m-1" role="status">
                                                <span className="sr-only">Loading...</span>
                                            </div>
                                            <div className="spinner-border text-danger m-1" role="status">
                                                <span className="sr-only">Loading...</span>
                                            </div>
                                            <div className="spinner-border text-dark m-1" role="status">
                                                <span className="sr-only">Loading...</span>
                                            </div>
                                        </div>

                                    </CardBody> </Card>
                            </Col>
                            <Col lg={6}>
                                <Card>
                                    <CardBody>
                                        <CardTitle>Growing spinner</CardTitle>
                                        <CardSubtitle className="mb-3">If you don’t fancy a border spinner, switch to the grow spinner. While it doesn’t technically spin, it does repeatedly grow!</CardSubtitle>
                                        <div>
                                            <div className="spinner-grow text-primary m-1" role="status">
                                                <span className="sr-only">Loading...</span>
                                            </div>
                                            <div className="spinner-grow text-secondary m-1" role="status">
                                                <span className="sr-only">Loading...</span>
                                            </div>
                                            <div className="spinner-grow text-success m-1" role="status">
                                                <span className="sr-only">Loading...</span>
                                            </div>
                                            <div className="spinner-grow text-info m-1" role="status">
                                                <span className="sr-only">Loading...</span>
                                            </div>
                                            <div className="spinner-grow text-warning m-1" role="status">
                                                <span className="sr-only">Loading...</span>
                                            </div>
                                            <div className="spinner-grow text-danger m-1" role="status">
                                                <span className="sr-only">Loading...</span>
                                            </div>
                                            <div className="spinner-grow text-dark m-1" role="status">
                                                <span className="sr-only">Loading...</span>
                                            </div>
                                        </div>

                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </div>
            </React.Fragment >
        );
    }
}

export default UiGeneral;
