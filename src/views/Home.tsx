import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, CardGroup, Button, Row, Col } from 'reactstrap';

const Home = () => {
  return (
    <div>
      <Row>
        <h5 className="mb-3 mt-3">About Me</h5>
        <Col sm="6">
          <Card body>
            <CardTitle tag="h5">Intro</CardTitle>
            <CardText>blablabalbla</CardText>
          </Card>
        </Col>
        <Col sm="6">
          <Card body>
            <CardTitle tag="h5">contact</CardTitle>
            <CardText>blablabalbla</CardText>
          </Card>
        </Col>
      </Row>
      <Row>
        <h5 className="mb-3 mt-3"></h5>
        <Col sm="12">
          <Card body>
            <CardTitle tag="h5">skill</CardTitle>
            <CardText>blablabalbla</CardText>
          </Card>
        </Col>
      </Row>
      <Row>
        <h5 className="mb-3 mt-3"></h5>
        <Col sm="12">
          <Card body>
            <CardTitle tag="h5">career</CardTitle>
            <CardText>blablabalbla</CardText>
          </Card>
        </Col>
      </Row>
      {/* --------------------------------------------------------------------------------*/}
      {/* Card-2*/}
      {/* --------------------------------------------------------------------------------*/}
      <Row>
        <h5 className="mb-3 mt-3">Project</h5>
        <Col md="6" lg="3">
          <Card body color="primary" inverse>
            <CardTitle tag="h5">Special Title Treatment</CardTitle>
            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          </Card>
        </Col>
        <Col md="6" lg="3">
          <Card body color="info" inverse>
            <CardTitle tag="h5">Special Title Treatment</CardTitle>
            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          </Card>
        </Col>
        <Col md="6" lg="3">
          <Card body color="success" inverse>
            <CardTitle tag="h5">Special Title Treatment</CardTitle>
            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          </Card>
        </Col>
        <Col md="6" lg="3">
          <Card body color="danger" inverse>
            <CardTitle tag="h5">Special Title Treatment</CardTitle>
            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
