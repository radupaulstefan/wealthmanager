import StockGraph from '../components/stocks/StockGraph';
import StockList from '../components/stocks/StockList';
import { Container, Row } from 'react-bootstrap';

const HomePage = props => {
  return (
    <Container>
      <Row>
        <StockList />
        <StockGraph />
      </Row>
    </Container>
  );
};

export default HomePage;
