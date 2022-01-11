import { ListGroup, Button, Container, Row } from 'react-bootstrap';
import UserStockItemTable from './UserStockItemTable';
import { useSelector } from 'react-redux';
import { fetchStocks } from '../../../actions/userStocksActions';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import UserAddStockInput from './UserAddStockInput.js';

const UserStocks = props => {
  const dispatch = useDispatch();
  const userStocks = useSelector(state => state.stocks.items);
  useEffect(() => {
    dispatch(fetchStocks());
  }, []);
  return (
    <Container>
      <Row
        style={{
          display: 'block',
          overflowX: 'auto',
          whiteSpace: 'nowrap',
        }}
      >
        <UserStockItemTable
          header={[
            { name: 'Symbol', xs: '4', lg: '2' },
            { name: 'Price', xs: '4', lg: '2' },
            { name: 'Units', xs: '4', lg: '3' },
            { name: 'Total', xs: '4', lg: '2' },
          ]}
          stockList={userStocks}
        />
        {/* <UserAddStockInput /> */}
      </Row>
    </Container>
  );
};
export default UserStocks;
