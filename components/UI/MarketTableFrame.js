import { Row, Container } from 'react-bootstrap';
import AddAssetInput from './AddAssetInput';

const MarketTableFrame = props => {
  console.log('received list: ', props.autoCompleteList);
  return (
    <>
      {props.children}
      <AddAssetInput
        list={props.autoCompleteList}
        onNewItemSubmit={props.onNewItemSubmit}
      ></AddAssetInput>
    </>
  );
};

export default MarketTableFrame;
