import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, CardBody, Button, Nav, NavItem, NavLink, TabContent, TabPane, Table, Media } from "reactstrap";
import classnames from 'classnames';

//Import Star Ratings
import StarRatings from 'react-star-ratings';

//Import Product Images
import img4 from "../../assets/images/product/img-4.png";
import img6 from "../../assets/images/product/img-6.png";
import img7 from "../../assets/images/product/img-7.png";
import img8 from "../../assets/images/product/img-8.png";
import avatar2 from "../../assets/images/users/avatar-2.jpg";
import avatar4 from "../../assets/images/users/avatar-4.jpg";
import avatar5 from "../../assets/images/users/avatar-5.jpg";

//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';

class EcommerceProductDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: [
                { id: 1, img: avatar2, name: "Brian", description: "If several languages coalesce, the grammar of the resulting language.", date: "5 hrs ago" },
                {
                    id: 2, img: avatar4, name: "Denver", description: "To an English person, it will seem like simplified English, as a skeptical Cambridge", date: "07 Oct, 2019",
                    childComment: [
                        { id: 1, img: avatar5, name: "Henry", description: "Their separate existence is a myth. For science, music, sport, etc.", date: "08 Oct, 2019" },
                    ]
                },
                { id: 3, img: "Null", name: "Neal", description: "Everyone realizes why a new common language would be desirable.", date: "05 Oct, 2019" },
            ],
            recentProducts: [
                { id: 1, img: img7, name: "Wirless Headphone", link: "", rating: 4, oldPrice: 240, newPrice: 225 },
                { id: 2, img: img4, name: "Phone patterned cases", link: "", rating: 3, oldPrice: 150, newPrice: 145 },
                { id: 3, img: img6, name: "Phone Dark Patterned cases", link: "", rating: 4, oldPrice: 138, newPrice: 135 },
            ],
            activeTab: '1',
        }
        this.toggleTab = this.toggleTab.bind(this);
        this.imageShow = this.imageShow.bind(this);
    }

    toggleTab(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    imageShow(img, id) {
        var expandImg = document.getElementById("expandedImg" + id);
        expandImg.src = img;
    }

    render() {
        return (
            <React.Fragment>
                <div className="page-content">
                    <Container fluid>
                        <Breadcrumbs title="Ecommerce" breadcrumbItem="Product Detail" />
                        <Row>
                            <Col>
                                <Card>
                                    <CardBody>
                                        <Row>
                                            <Col xl="6">
                                                <div className="product-detai-imgs">
                                                    <Row>
                                                        <Col md="2" xs="3">
                                                            <Nav className="flex-column" pills>
                                                                <NavItem>
                                                                    <NavLink
                                                                        className={classnames({ active: this.state.activeTab === '1' })}
                                                                        onClick={() => { this.toggleTab('1'); }}
                                                                    >
                                                                        <img src={img7} alt="" onClick={() => { this.imageShow(img7, 1) }} className="img-fluid mx-auto d-block rounded" />
                                                                    </NavLink>
                                                                </NavItem>
                                                                <NavItem>
                                                                    <NavLink
                                                                        className={classnames({ active: this.state.activeTab === '2' })}
                                                                        onClick={() => { this.toggleTab('2'); }}
                                                                    >
                                                                        <img src={img8} alt="" onClick={() => { this.imageShow(img8, 2) }} className="img-fluid mx-auto d-block rounded" />
                                                                    </NavLink>
                                                                </NavItem>
                                                                <NavItem>
                                                                    <NavLink
                                                                        className={classnames({ active: this.state.activeTab === '3' })}
                                                                        onClick={() => { this.toggleTab('3'); }}
                                                                    >
                                                                        <img src={img7} alt="" onClick={() => { this.imageShow(img7, 3) }} className="img-fluid mx-auto d-block rounded" />
                                                                    </NavLink>
                                                                </NavItem>
                                                                <NavItem>
                                                                    <NavLink
                                                                        className={classnames({ active: this.state.activeTab === '4' })}
                                                                        onClick={() => { this.toggleTab('4'); }}
                                                                    >
                                                                        <img src={img8} alt="" onClick={() => { this.imageShow(img8, 4) }} className="img-fluid mx-auto d-block rounded" />
                                                                    </NavLink>
                                                                </NavItem>
                                                            </Nav>
                                                        </Col>
                                                        <Col md={{ size: 7, offset: 1 }} xs="9">
                                                            <TabContent activeTab={this.state.activeTab}>
                                                                <TabPane tabId="1">
                                                                    <div>
                                                                        <img src={img7} alt="" id="expandedImg1" className="img-fluid mx-auto d-block" />
                                                                    </div>
                                                                </TabPane>
                                                                <TabPane tabId="2">
                                                                    <div>
                                                                        <img src={img8} id="expandedImg2" alt="" className="img-fluid mx-auto d-block" />
                                                                    </div>
                                                                </TabPane>
                                                                <TabPane tabId="3">
                                                                    <div>
                                                                        <img src={img7} id="expandedImg3" alt="" className="img-fluid mx-auto d-block" />
                                                                    </div>
                                                                </TabPane>
                                                                <TabPane tabId="4">
                                                                    <div>
                                                                        <img src={img8} id="expandedImg4" alt="" className="img-fluid mx-auto d-block" />
                                                                    </div>
                                                                </TabPane>
                                                            </TabContent>
                                                            <div className="text-center">
                                                                <Button type="button" color="primary" className="btn waves-effect waves-light mt-2 mr-1">
                                                                    <i className="bx bx-cart mr-2"></i> Add to cart
                                                            </Button>
                                                                <Button type="button" color="success" className="btn waves-effect  mt-2 waves-light">
                                                                    <i className="bx bx-shopping-bag mr-2"></i>Buy now
                                                            </Button>
                                                            </div>

                                                        </Col>
                                                    </Row>
                                                </div>
                                            </Col>

                                            <Col xl="6">
                                                <div className="mt-4 mt-xl-3">
                                                    <Link to="#" className="text-primary">Headphone</Link>
                                                    <h4 className="mt-1 mb-3">Wireless Headphone (Black)</h4>

                                                    <div className="text-muted float-left mr-3 mb-3">
                                                        <StarRatings
                                                            rating={4}
                                                            starRatedColor="#F1B44C"
                                                            starEmptyColor="#2D363F"
                                                            numberOfStars={5}
                                                            name='rating'
                                                            starDimension="14px"
                                                            starSpacing="3px"
                                                        />
                                                    </div>
                                                    <p className="text-muted mb-4">( 152 Customers Review )</p>

                                                    <h6 className="text-success text-uppercase">20 % Off</h6>
                                                    <h5 className="mb-4">Price : <span className="text-muted mr-2"><del>$240 USD</del></span> <b>$225 USD</b></h5>
                                                    <p className="text-muted mb-4">To achieve this, it would be necessary to have uniform grammar pronunciation and more common words If several languages coalesce</p>
                                                    <Row className="mb-3">
                                                        <Col md="6">
                                                            <div>
                                                                <p className="text-muted"><i className="bx bx-unlink font-size-16 align-middle text-primary mr-1"></i> Wireless</p>
                                                                <p className="text-muted"><i className="bx bx-shape-triangle font-size-16 align-middle text-primary mr-1"></i> Wireless Range : 10m</p>
                                                                <p className="text-muted"><i className="bx bx-battery font-size-16 align-middle text-primary mr-1"></i> Battery life : 6hrs</p>
                                                            </div>
                                                        </Col>
                                                        <Col md="6">
                                                            <div>
                                                                <p className="text-muted"><i className="bx bx-user-voice font-size-16 align-middle text-primary mr-1"></i> Bass</p>
                                                                <p className="text-muted"><i className="bx bx-cog font-size-16 align-middle text-primary mr-1"></i> Warranty : 1 Year</p>
                                                            </div>
                                                        </Col>
                                                    </Row>

                                                    <div className="product-color">
                                                        <h5 className="font-size-15">Color :</h5>
                                                        <Link to="#" className="active">
                                                            <div className="product-color-item border rounded">
                                                                <img src={img7} alt="" className="avatar-md" />
                                                            </div>
                                                            <p>Black</p>
                                                        </Link>
                                                        <Link to="#">
                                                            <div className="product-color-item border rounded">
                                                                <img src={img7} alt="" className="avatar-md" />
                                                            </div>
                                                            <p>Blue</p>
                                                        </Link>
                                                        <Link to="#">
                                                            <div className="product-color-item border rounded">
                                                                <img src={img7} alt="" className="avatar-md" />
                                                            </div>
                                                            <p>Gray</p>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>

                                        <div className="mt-5">
                                            <h5 className="mb-3">Specifications :</h5>

                                            <div className="table-responsive">
                                                <Table className="table mb-0 table-bordered">
                                                    <tbody>
                                                        <tr>
                                                            <th scope="row" style={{ width: "400px" }}>Category</th>
                                                            <td>Headphone</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">Brand</th>
                                                            <td>JBL</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">Color</th>
                                                            <td>Black</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">Connectivity</th>
                                                            <td>Bluetooth</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">Warranty Summary</th>
                                                            <td>1 Year</td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </div>
                                        </div>

                                        <div className="mt-5">
                                            <h5 className="mb-4">Reviews :</h5>
                                            {
                                                this.state.comments.map((comment, k) =>
                                                    <Media className={comment.id === 1 ? "border-bottom" : "border-bottom mt-3"} key={"__media__" + k}>
                                                        {
                                                            comment.img !== "Null" ?
                                                                <img src={comment.img} className="avatar-xs mr-3 rounded-circle" alt="img" />
                                                                : <div className="avatar-xs mr-3">
                                                                    <span className="avatar-title bg-soft-primary text-primary rounded-circle font-size-16">
                                                                        N
                                                                </span>
                                                                </div>
                                                        }
                                                        <Media body>
                                                            <h5 className="mt-0 mb-1 font-size-15">{comment.name}</h5>
                                                            <p className="text-muted">{comment.description}</p>
                                                            <ul className="list-inline float-sm-right">
                                                                <li className="list-inline-item">
                                                                    <Link to="#"><i className="far fa-thumbs-up mr-1"></i> Like</Link>
                                                                </li>
                                                                <li className="list-inline-item">
                                                                    <Link to="#"><i className="far fa-comment-dots mr-1"></i> Comment</Link>
                                                                </li>
                                                            </ul>
                                                            <div className="text-muted font-size-12"><i className="far fa-calendar-alt text-primary mr-1"></i>{comment.date}</div>
                                                            {
                                                                comment.childComment ?
                                                                    comment.childComment.map((child, key) =>
                                                                        <Media className="mt-4" key={"_media_" + key}>
                                                                            <img src={child.img} className="avatar-xs mr-3 rounded-circle" alt="img" />
                                                                            <Media body>
                                                                                <h5 className="mt-0 mb-1 font-size-15">{child.name}</h5>
                                                                                <p className="text-muted">{child.description}</p>
                                                                                <ul className="list-inline float-sm-right">
                                                                                    <li className="list-inline-item">
                                                                                        <Link to="#"><i className="far fa-thumbs-up mr-1"></i> Like</Link>
                                                                                    </li>
                                                                                    <li className="list-inline-item">
                                                                                        <Link to="#"><i className="far fa-comment-dots mr-1"></i> Comment</Link>
                                                                                    </li>
                                                                                </ul>
                                                                                <div className="text-muted font-size-12"><i className="far fa-calendar-alt text-primary mr-1"></i> {child.date}</div>
                                                                            </Media>
                                                                        </Media>
                                                                    )

                                                                    : null
                                                            }
                                                        </Media>
                                                    </Media>
                                                )
                                            }
                                        </div>

                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>

                        <Row className="mt-3">
                            <Col lg={12}>
                                <div>
                                    <h5 className="mb-3">Recent product :</h5>

                                    <Row>
                                        {
                                            this.state.recentProducts.map((product, key) =>
                                                <Col xl="4" sm="6" key={"__product__" + key}>
                                                    <Card>
                                                        <CardBody>
                                                            <Row className="align-items-center">
                                                                <Col md="4">
                                                                    <img src={product.img} alt="" className="img-fluid mx-auto d-block" />
                                                                </Col>
                                                                <Col md="8">
                                                                    <div className="text-center text-md-left pt-3 pt-md-0">
                                                                        <h5 className="mb-3 text-truncate"><Link to="#" className="text-dark">{product.name}</Link></h5>
                                                                        <div className="text-muted mb-3">
                                                                            <StarRatings
                                                                                rating={product.rating}
                                                                                starRatedColor="#F1B44C"
                                                                                starEmptyColor="#2D363F"
                                                                                numberOfStars={5}
                                                                                name='rating'
                                                                                starDimension="14px"
                                                                                starSpacing="3px"
                                                                            />
                                                                        </div>
                                                                        <h5 className="my-0"><span className="text-muted mr-2"><del>${product.oldPrice}</del></span> <b>${product.newPrice}</b></h5>
                                                                    </div>
                                                                </Col>
                                                            </Row>
                                                        </CardBody>
                                                    </Card>
                                                </Col>
                                            )
                                        }

                                    </Row>
                                </div>
                            </Col>
                        </Row>

                    </Container>
                </div>
            </React.Fragment>
        );
    }
}

export default EcommerceProductDetail;