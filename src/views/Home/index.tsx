import { Card, CardText, CardTitle, Row, Col } from 'reactstrap';
import ComponentCard from '../../components/ComponentCard';

const Home = () => {
  return (
    <div>
      <Row>
        <Col sm="6">
          <Card body>
            <CardTitle tag="h3">About Me</CardTitle>
            <CardText>개발 1년차 이것 저것 해보고 싶은 개발자</CardText>
          </Card>
        </Col>
        <Col sm="6">
          <Card body>
            <CardTitle tag="h3">Contact</CardTitle>
            <CardText>추후 업데이트</CardText>
          </Card>
        </Col>
      </Row>
      <ComponentCard title={'Skills'}>
        <Row>
          <Col sm="6">
            <Card body>
              <CardTitle tag="h3"></CardTitle>
              <CardText>Node.js </CardText>
              <CardText>Express </CardText>
              <CardText>NestJS </CardText>
              <CardText> Mysql </CardText>
            </Card>
          </Col>
          <Col sm="6">
            <Card body>
              <CardTitle tag="h3"></CardTitle>
              <CardText> Vue </CardText>
              <CardText> React </CardText>
            </Card>
          </Col>
        </Row>
      </ComponentCard>
      <ComponentCard title={'Carrer'}>
        <Row>
          <Col sm="12">
            <Card body>
              <CardText>Kiosk App(Vue, Electron)</CardText>
              <CardText>Local Server(Express, Electron)</CardText>
            </Card>
          </Col>
        </Row>
      </ComponentCard>
      {/* --------------------------------------------------------------------------------*/}
      {/* Card-2*/}
      {/* --------------------------------------------------------------------------------*/}
      <ComponentCard title={'Project'}>
        <Row>
          <Col md="6" lg="3">
            <Card body color="primary" inverse>
              <CardTitle tag="h5">1</CardTitle>
              <CardText>project</CardText>
            </Card>
          </Col>
          <Col md="6" lg="3">
            <Card body color="info" inverse>
              <CardTitle tag="h5">2</CardTitle>
              <CardText>project</CardText>
            </Card>
          </Col>
          <Col md="6" lg="3">
            <Card body color="success" inverse>
              <CardTitle tag="h5">3</CardTitle>
              <CardText>project</CardText>
            </Card>
          </Col>
          <Col md="6" lg="3">
            <Card body color="danger" inverse>
              <CardTitle tag="h5">4</CardTitle>
              <CardText>project</CardText>
            </Card>
          </Col>
        </Row>
      </ComponentCard>
    </div>
  );
};

export default Home;
