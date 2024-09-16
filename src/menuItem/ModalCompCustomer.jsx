

import { Modal, Header, Image, Button } from "semantic-ui-react";

const ModalCompCustomer = ({
  open,
  setOpen,
  img,
  Name,
  Info,
  id,
  handleDelete,
}) => {
  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      size="large" // Use "large" to increase the modal size
    >
      <Modal.Header>Item Detail</Modal.Header>
      <Modal.Content image>
        <Image
          size="large"
          src={img}
          wrapped
          style={{
            width: "100vw", // Set width to 50% of the viewport width
            height: "auto", // Keep the aspect ratio intact
            maxWidth: "none", // Allow the image to be larger than the container
          }}
        />
        <Modal.Description>
          <Header>{Name}</Header>
          <p>{Info}</p>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color="black" onClick={() => setOpen(false)}>
          Cancel
        </Button>
        <Button
          color="red"
          content="Delete"
          labelPosition="right"
          onClick={() => handleDelete(id)} // Ensure handleDelete function is defined and accessible
          icon="trash" // Changed icon to trash for consistency
        />
      </Modal.Actions>
    </Modal>
  );
};

export default ModalCompCustomer;
