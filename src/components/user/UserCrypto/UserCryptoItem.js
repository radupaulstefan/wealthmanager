import {
  Col,
  InputGroup,
  FormControl,
  Button,
  Row,
  Container,
} from 'react-bootstrap';

const UserCryptoItem = props => {
  return (
    <Container>
      <Row>
        <Col className="border border-secondary">{props.symbol}</Col>
        <Col className="border border-secondary">{props.price}</Col>
        <Col className="border border-secondary">
          <InputGroup>
            <FormControl
              placeholder="0"
              aria-label=""
              defaultValue={props.units}
            />
            <Button size="sm" variant="outline-secondary">
              -
            </Button>
            <Button size="sm" variant="outline-secondary">
              +
            </Button>
          </InputGroup>
        </Col>
        <Col className="border border-secondary">3500</Col>
      </Row>
    </Container>
  );
};

export default UserCryptoItem;
