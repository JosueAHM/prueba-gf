import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";

function DeleteConfirmDialog({ open, onClose, onConfirm }) {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle sx={{ fontWeight: 700 }}>¿Eliminar Usuario?</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Esta acción eliminará al usuario permanentemente del sistema. ¿Estás seguro de que deseas continuar?
        </DialogContentText>
      </DialogContent>
      <DialogActions sx={{ p: 2.5 }}>
        <Button onClick={onClose} color="inherit">
          Cancelar
        </Button>
        <Button onClick={onConfirm} variant="contained" color="secondary" autoFocus>
          Eliminar
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default DeleteConfirmDialog;
