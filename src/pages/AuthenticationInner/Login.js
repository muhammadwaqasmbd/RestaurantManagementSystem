import React, { Component } from 'react';

// Redux
import { Link } from 'react-router-dom';

import { Row, Col, CardBody, Card } from "reactstrap";

// availity-reactstrap-validation
import { AvForm, AvField } from 'availity-reactstrap-validation';

// import images
import profile from "../../assets/images/profile-img.png";
import logo from "../../assets/images/logo.svg";

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {

        return (
            <React.Fragment>
                <div className="home-btn d-none d-sm-block">
                    <Link to="/" className="text-dark"><i className="fas fa-home h2"></i></Link>
                </div>
                <div className="account-pages my-5 pt-sm-5">
                    <div className="container">
                        <Row className="justify-content-center">
                            <Col md={8} lg={6} xl={5}>
                                <Card className="overflow-hidden">
                                    <div className="bg-soft-primary">
                                        <Row>
                                            <Col className="col-7">
                                                <div className="text-primary p-4">
                                                    <h5 className="text-primary">Welcome Back !</h5>
                                                    <p>Sign in to continue to ORDER ME.</p>
                                                </div>
                                            </Col>
                                            <Col className="col-5 align-self-end">
                                                <img src={profile} alt="" className="img-fluid" />
                                            </Col>
                                        </Row>
                                    </div>
                                    <CardBody className="pt-0">
                                        <div>
                                            <Link to="/">
                                                <div className="avatar-md profile-user-wid mb-4">
                                                    <span className="avatar-title rounded-circle bg-light">
                                                        <img src={logo} alt="" className="rounded-circle" height="34" />
                                                    </span>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="p-2">

                                            <AvForm className="form-horizontal">

                                                <div className="form-group">
                                                    <AvField name="email" label="Email" value="" className="form-control" placeholder="Enter email" type="email" required />
                                                </div>

                                                <div className="form-group">
                                                    <AvField name="password" label="Password" value="" type="password" required placeholder="Enter Password" />
                                                </div>

                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="customControlInline" />
                                                    <label className="custom-control-label" htmlFor="customControlInline">Remember me</label>
                                                </div>

                                                <div className="mt-3">
                                                    <button className="btn btn-primary btn-block waves-effect waves-light" type="submit">Log In</button>
                                                </div>

                                                <div className="mt-4 text-center">
                                                    <Link to="/pages-forget-pwd" className="text-muted"><i className="mdi mdi-lock mr-1"></i> Forgot your password?</Link>
                                                </div>
                                            </AvForm>
                                        </div>
                                    </CardBody>
                                </Card>
                                <div className="mt-5 text-center">
                                    <p>Don't have an account ? <Link to="pages-register" className="font-weight-medium text-primary"> Signup now </Link> </p>
                                    <p>© {new Date().getFullYear()} ORDER ME. Crafted with <i className="mdi mdi-heart text-danger"></i></p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Login;

