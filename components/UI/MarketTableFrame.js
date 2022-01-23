import { Row, Container } from 'react-bootstrap';
import TableHeader from './TableHeader';
import AddAssetInput from './AddAssetInput';

const MarketTableFrame = props => {
  return (
    <Container>
      <Row
        style={{
          display: 'block',
          overflowX: 'auto',
          whiteSpace: 'nowrap',
        }}
      >
        <TableHeader columns={props.columns}></TableHeader>
        {props.children}
        <AddAssetInput
          onNewItemSubmit={props.onNewItemSubmit}
          xs={props.columns[0].xs}
          lg={props.columns[0].lg}
        ></AddAssetInput>
      </Row>
    </Container>
  );
};

export default MarketTableFrame;
