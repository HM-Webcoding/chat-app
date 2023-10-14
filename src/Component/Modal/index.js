import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import "./style.css";
import UploadProfile from "../UploadProfile";

export default function BasicModal({ open, setOpen }) {
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="modal">
          <UploadProfile setOpen={setOpen} />
        </Box>
      </Modal>
    </div>
  );
}
