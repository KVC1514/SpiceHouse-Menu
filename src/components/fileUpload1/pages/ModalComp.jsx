import React from "react";
import { Navigate } from "react-router-dom";
import { Modal, Header, Image, Button, Item } from "semantic-ui-react";

const ModalComp = ({ open, setOpen, img, Name, Info, id, handleDelete }) => {
  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
    >
      <Modal.Header>Item Detail</Modal.Header>
      <Modal.Content image>
        <Image size="medium" src={img} wrapped />
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
          onClick={() => handleDelete(id)}
          icon="checkmark"
        />
      </Modal.Actions>
    </Modal>
  );
};

export default ModalComp;
