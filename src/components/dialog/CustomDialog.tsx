import { Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material";
import { ReactElement } from "react";

interface DialogProps {
  children: ReactElement;
  open: boolean;
  handleClose: () => void;
  title: string;
}
const CustomDialog = ({ children, open, handleClose, title }: DialogProps) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>{children}</DialogContent>
      <DialogActions>
        <button onClick={handleClose}>Cancel</button>
      </DialogActions>
    </Dialog>
  );
};

export default CustomDialog;
