import { ListGroup, Row } from 'react-bootstrap';
import { SITE_THEME } from '../../helpers/constants';
import { useState } from 'react';

const AutoCompleteListItem = props => {
  const [text, setText] = useState(props.text);
  const [isActive, setIsActive] = useState(false);
  const handleItemClick = () => {
    props.onClick(text);
  };
  return (
    <ListGroup.Item
      variant={`${SITE_THEME}`}
      as="li"
      key={`${props.text}-${props.index}`}
      onClick={handleItemClick}
      onMouseEnter={() => {
        setIsActive(true);
      }}
      onMouseLeave={() => {
        setIsActive(false);
      }}
      active={isActive}
    >
      <Row styles={{ cursor: 'default' }}>{props.text}</Row>
    </ListGroup.Item>
  );
};

export default AutoCompleteListItem;
