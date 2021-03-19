import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";

export const ModalUser = ({ open, handleClose }) => {
  const [age, setAge] = useState("");
  const [openSelect, setOpenSelect] = useState(false);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleCloseSelect = () => {
    setOpenSelect(false);
  };

  const handleOpenSelect = () => {
    setOpenSelect(true);
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Создание пользователя</DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            label="ФИО"
            type="email"
            fullWidth
            onChange={e => console.log(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Email Address"
            type="text"
            fullWidth
            onChange={e => console.log(e.target.value)}
          />
          {/*TODO: Перенести */}
          <InputLabel id="demo-controlled-open-select-label">Age</InputLabel>
          <Select
            labelId="demo-controlled-open-select-label"
            id="demo-controlled-open-select"
            open={openSelect}
            onClose={handleCloseSelect}
            onOpen={handleOpenSelect}
            value={age}
            fullWidth
            onChange={handleChange}
          >
            <MenuItem value="">
              <em>-----</em>
            </MenuItem>
            <MenuItem value={10}>Мужчина</MenuItem>
            <MenuItem value={20}>Женщина</MenuItem>
            <MenuItem value={30}>Другое</MenuItem>
          </Select>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Отмена
          </Button>
          <Button onClick={handleClose} color="primary">
            Создать
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
