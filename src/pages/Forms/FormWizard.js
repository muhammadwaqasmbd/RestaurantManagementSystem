import React, { Component } from "react";
import { Row, Col, Card, CardBody, CardTitle } from "reactstrap";

// Form Wizard Steps
import WizardFormFirstPageRoot from "./FormWizardSteps/WizardFormFirstPage";
import WizardFormSecondPageRoot from "./FormWizardSteps/WizardFormSecondPage";
import WizardFormThirdPageRoot from "./FormWizardSteps/WizardFormThirdPage";
import WizardFormFourPageRoot from "./FormWizardSteps/WizardFormFourPage";

//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';


class FormWizard extends Component {
  constructor(props) {
    super(props);
    this.nextPageRoot = this.nextPageRoot.bind(this);
    this.previousPageRoot = this.previousPageRoot.bind(this);

    this.state = {
      pageRoot: 1
    };
  }

  nextPageRoot() {
    this.setState({ pageRoot: this.state.pageRoot + 1 });
  }

  previousPageRoot() {
    this.setState({ pageRoot: this.state.pageRoot - 1 });
  }

  render() {
    const { onSubmitRoot } = this.props;
    const { pageRoot } = this.state;

    return (
      <React.Fragment>
        <div className="page-content">
          <div className="container-fluid">

            <Breadcrumbs title="Form" breadcrumbItem="Form Wizard" />

            <Row className="form-wizard">
              <Col sm="12">
                <Card>
                  <CardBody>
                    <CardTitle>Form Wizard</CardTitle>
                    <p className="text-muted m-b-30 font-14">
                      A powerful React wizard plugin that supports accessibility
                    </p>

                    {pageRoot === 1 && (
                      <WizardFormFirstPageRoot onSubmit={this.nextPageRoot} />
                    )}
                    {pageRoot === 2 && (
                      <WizardFormSecondPageRoot
                        previousPage={this.previousPageRoot}
                        onSubmit={this.nextPageRoot}
                      />
                    )}
                    {pageRoot === 3 && (
                      <WizardFormThirdPageRoot
                        previousPage={this.previousPageRoot}
                        onSubmit={this.nextPageRoot}
                      />
                    )}
                    {pageRoot === 4 && (
                      <WizardFormFourPageRoot
                        previousPage={this.previousPageRoot}
                        onSubmit={onSubmitRoot}
                      />
                    )}
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

export default FormWizard;
