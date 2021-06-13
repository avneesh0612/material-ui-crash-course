import { useState } from "react";
import Modal from "@material-ui/core/Modal";
import "./Modal.css";
import { Button } from "@material-ui/core";

export default function MuiModal() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button className="button" onClick={handleOpen}>
        Open Modal
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className="modal">
          <h1>This is our modal</h1>
        </div>
      </Modal>
    </div>
  );
}
