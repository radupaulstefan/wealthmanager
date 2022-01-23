import { InputGroup, FormControl, Button } from 'react-bootstrap';
import { SITE_THEME } from '../../helpers/constants';
import { useState, useEffect } from 'react';

const UnitsInput = props => {
  const [inputValue, setInputValue] = useState(+props.units);

  useEffect(() => {
    const identifier = setTimeout(() => {
      props.onChange(inputValue);
    }, 100);

    return () => {
      clearTimeout(identifier);
    };
  }, [inputValue]);

  const handleInputChange = ev => {
    setInputValue(+ev.target.value);
  };

  const handleMinusClick = () => {
    setInputValue(prevState => prevState - 1);
    props.onMinusClick();
  };
  const handlePlusClick = () => {
    setInputValue(prevState => prevState + 1);
    props.onPlusClick();
  };

  return (
    <InputGroup>
      <FormControl
        className="p-1"
        placeholder="0"
        aria-label=""
        onChange={handleInputChange}
        value={+props.units}
      />

      <Button
        onClick={handleMinusClick}
        size="sm"
        variant="light"
        className={`outline-${SITE_THEME}`}
      >
        -
      </Button>

      <Button
        onClick={handlePlusClick}
        size="sm"
        variant="light"
        className={`outline-${SITE_THEME}`}
      >
        +
      </Button>
    </InputGroup>
  );
};

export default UnitsInput;
