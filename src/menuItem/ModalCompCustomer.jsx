// import { Modal, Header, Image, Button, Item } from "semantic-ui-react";

// const ModalComp = ({ open, setOpen, img, Name, Info, id, handleDelete }) => {
//   return (
//     <Modal
//       onClose={() => setOpen(false)}
//       onOpen={() => setOpen(true)}
//       open={open}
//     >
//       <Modal.Header>Item Detail</Modal.Header>
//       <Modal.Content image>
//         <Image size="medium" src={img} wrapped />
//         <Modal.Description>
//           <Header>{Name}</Header>
//           <p>{Info}</p>
//         </Modal.Description>
//       </Modal.Content>
//       <Modal.Actions>
//         <Button color="black" onClick={() => setOpen(false)}>
//           Cancel
//         </Button>
//         <Button
//           color="red"
//           content="Delete"
//           labelPosition="right"
//           onClick={() => handleDelete(id)}
//           icon="checkmark"
//         />
//       </Modal.Actions>
//     </Modal>
//   );
// };

// export default ModalComp;

import { Modal, Header, Image, Button } from "semantic-ui-react";

const ModalCompCustomer = ({ open, setOpen, img, Name, Info, id, handleDelete }) => {
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
        {/* <Button
          color="red"
          content="Delete"
          labelPosition="right"
          onClick={() => handleDelete(id)} // Ensure handleDelete function is defined and accessible
          icon="trash" // Changed icon to trash for consistency
        /> */}
      </Modal.Actions>
    </Modal>
  );
};

export default ModalCompCustomer
