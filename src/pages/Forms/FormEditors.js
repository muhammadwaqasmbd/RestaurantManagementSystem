import React, { Component } from "react";
import { Form, Card, CardBody, Col, Row, CardTitle, CardSubtitle } from "reactstrap";

// Form Editor
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';

class FormEditors extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <div className="page-content">
          <div className="container-fluid">

            <Breadcrumbs title="Form" breadcrumbItem="Form Editors" />

            <Row>
              <Col>
                <Card>
                  <CardBody>
                    <CardTitle>react-draft-wysiwyg</CardTitle>
                    <CardSubtitle className="mb-3">
                      Bootstrap-wysihtml5 is a javascript plugin that makes it
                      easy to create simple, beautiful wysiwyg editors with the
                      help of wysihtml5 and Twitter Bootstrap.
                    </CardSubtitle>

                    <Form method="post">
                      <Editor
                        toolbarClassName="toolbarClassName"
                        wrapperClassName="wrapperClassName"
                        editorClassName="editorClassName"
                      />
                    </Form>

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

export default FormEditors;
