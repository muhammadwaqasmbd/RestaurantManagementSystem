import React, { Component } from "react";

import { Row, Col, Card, CardBody, FormGroup, Button, CardTitle, CardSubtitle } from "reactstrap";
import { AvForm, AvField } from "availity-reactstrap-validation";

//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';

class FormValidations extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <div className="page-content">
          <div className="container-fluid">

            <Breadcrumbs title="Form" breadcrumbItem="Form Validation" />

            <Row>
              <Col lg={6}>
                <Card>
                  <CardBody>
                    <CardTitle>Validation type</CardTitle>
                    <CardSubtitle className="mb-3">
                      Parsley is a availity reactstrap validation. It helps you
                      provide your users with feedback on their form submission
                      before sending it to your server.
                  </CardSubtitle>

                    <AvForm>
                      <AvField
                        name="username"
                        label="Required  "
                        placeholder="Type Something"
                        type="text"
                        errorMessage="Enter Name"
                        validate={{ required: { value: true } }}
                      />
                      <label>Equal To</label>
                      <AvField
                        name="password"
                        type="text"
                        placeholder="Password"
                        errorMessage="Enter password"
                        validate={{ required: { value: true } }}
                      />
                      <AvField
                        name="password1"
                        type="text"
                        placeholder="Re-type Password"
                        errorMessage="Enter Re-password"
                        validate={{
                          required: { value: true },
                          match: { value: "password" }
                        }}
                      />
                      <AvField
                        name="email"
                        label="E-Mail  "
                        placeholder="Enter Valid Email"
                        type="email"
                        errorMessage="Invalid Email"
                        validate={{
                          required: { value: true },
                          email: { value: true }
                        }}
                      />
                      <AvField
                        name="digits"
                        label="Digits  "
                        placeholder="Enter Only Digits"
                        type="number"
                        errorMessage="Enter Only Digits"
                        validate={{
                          required: { value: true },
                          pattern: {
                            value: "^[0-9]+$",
                            errorMessage: "Only Digits"
                          }
                        }}
                      />
                      <AvField
                        name="number"
                        label="Number  "
                        placeholder="Enter Only number"
                        type="number"
                        errorMessage="Enter Only Number"
                        validate={{
                          required: { value: true },
                          pattern: {
                            value: "^[0-9]+$",
                            errorMessage: "Only Numbers"
                          }
                        }}
                      />
                      <AvField
                        name="alphanumeric"
                        label="Alphanumeric  "
                        placeholder="Enter Only alphanumeric value"
                        type="text"
                        errorMessage="Enter Only Alphanumeric"
                        validate={{
                          required: { value: true },
                          pattern: {
                            value: "^[0-9a-zA-Z]+$",
                            errorMessage: "Only Alphanumeric"
                          }
                        }}
                      />
                      <FormGroup className="mb-0">
                        <div>
                          <Button type="submit" color="primary" className="mr-1">
                            Submit
                        </Button>{" "}
                          <Button type="reset" color="secondary">
                            Cancel
                        </Button>
                        </div>
                      </FormGroup>
                    </AvForm>
                  </CardBody>
                </Card>
              </Col>

              <Col lg={6}>
                <Card>
                  <CardBody>
                    <CardTitle>Range validation</CardTitle>
                    <CardSubtitle className="mb-3">
                      Parsley is a availity reactstrap validation. It helps you
                      provide your users with feedback on their form submission
                      before sending it to your server.
                  </CardSubtitle>

                    <AvForm>
                      <AvField
                        name="Min_Length"
                        label="Min Length  "
                        placeholder="Min 6 chars"
                        type="number"
                        errorMessage="Min 6 chars."
                        validate={{
                          required: { value: true },
                          minLength: { value: 6, errorMessage: "Min 6 chars." }
                        }}
                      />
                      <AvField
                        name="Max_Length"
                        label="Max Length  "
                        placeholder="Max 6 chars"
                        type="number"
                        errorMessage="Max 6 chars."
                        validate={{
                          required: { value: true },
                          maxLength: { value: 6, errorMessage: "Max 6 chars." }
                        }}
                      />
                      <AvField
                        name="Min_Value"
                        label="Min Value  "
                        placeholder="Min 6 Chars"
                        min={6}
                        type="number"
                        errorMessage="Min Value 6"
                        validate={{
                          required: { value: true },
                          min: { value: 6 }
                        }}
                      />
                      <AvField
                        name="Max_Value"
                        label="Max Value  "
                        placeholder="max 5 Chars"
                        max={6}
                        type="number"
                        errorMessage="Max Value 6"
                        validate={{
                          required: { value: true },
                          max: { value: 6 }
                        }}
                      />
                      <AvField
                        name="Range_Value"
                        label="Range Length  "
                        placeholder="Text between 5 - 10 chars length"
                        type="number"
                        errorMessage="range between 5 to 10"
                        validate={{ required: { value: true } }}
                      />
                      <AvField
                        name="Regular_Exp"
                        label="Regular Exp  "
                        placeholder="Hex. Color"
                        type="number"
                        errorMessage="Hex Value"
                        validate={{
                          required: { value: true },
                          pattern: {
                            value: "^[#0-9]+$",
                            errorMessage: "Only Hex Value"
                          }
                        }}
                      />
                      <FormGroup className="mb-0">
                        <div>
                          <Button type="submit" color="primary" className="mr-1">
                            Submit
                        </Button>{" "}
                          <Button type="reset" color="secondary">
                            Cancel
                        </Button>
                        </div>
                      </FormGroup>
                    </AvForm>
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

export default FormValidations;
