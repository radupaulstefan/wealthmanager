import { Modal, Button } from 'react-bootstrap';

const UserAddStockModal = props => {
  const handleAddStockClicked = () => {
    props.onSubmit();
  };
  const handleCancelClicked = () => {
    props.onSubmit();
  };
  return (
    <Modal.Dialog>
      <Modal.Header>
        <Modal.Title>Add new stock</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>Modal body text goes here.</p>
      </Modal.Body>

      <Modal.Footer>
        <Button onClick={handleCancelClicked} variant="secondary">
          Cancel
        </Button>
        <Button onClick={handleAddStockClicked} variant="primary">
          Add stock
        </Button>
      </Modal.Footer>
    </Modal.Dialog>
  );
};

export default UserAddStockModal;
