import React from "react";
import { Button, Container, Row, Col, Breadcrumb } from "react-bootstrap";

class Home extends React.Component {
  render() {
    return (
      <div>
        <Container className="mt-3">
          <Row>
            <Col>
              <Breadcrumb>
                <Breadcrumb.Item href="#home">Home</Breadcrumb.Item>
              </Breadcrumb>
            </Col>
          </Row>
          <Row>
            <Col lg={4} md={4} sm={12} className="mb-3">
              <Button style={{ backgroundColor: "#2B2B52" }} size="lg" block>
                New Coustumer
              </Button>
            </Col>
            <Col lg={4} md={4} sm={12} className="mb-3">
              <Button style={{ backgroundColor: "#2B2B52" }} size="lg" block>
                Old Coustumers
              </Button>
            </Col>
            <Col lg={4} md={4} sm={12} className="mb-3">
              <Button style={{ backgroundColor: "#2B2B52" }} size="lg" block>
                All Coustumers
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default Home;
