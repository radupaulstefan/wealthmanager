import { SITE_THEME } from '../../helpers/constants';
import { ListGroup, Col } from 'react-bootstrap';
import AutoCompleteListItem from './AutoCompleteListItem';
import { useState } from 'react';

const AutoCompleteList = props => {
  return (
    <Col sm="1" md="2" lg="3" className="p-0">
      {' '}
      <ListGroup sm="1" md="2" as="ul">
        {props.symbolList.map((el, index) => (
          <AutoCompleteListItem
            onClick={props.onClick}
            text={el}
            index={index}
          />
        ))}
      </ListGroup>
    </Col>
  );
};

export default AutoCompleteList;
