import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import { connect } from "react-redux";
import { addUserHandler } from "../../redux/actions/action";

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: "250px",
  },
}));

const ModalUser = ({ addUserHandler }) => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [user, setUser] = useState({});

  const handleClose = () => setOpen(false);
  const handleClickOpen = () => setOpen(true);

  const nameHandler = (value) =>
    setUser((prevState) => {
      return {
        ...prevState,
        fullName: value,
      };
    });

  const emailHandler = (value) =>
    setUser((prevState) => {
      return {
        ...prevState,
        email: value,
      };
    });

  const sexHandler = (value) =>
    setUser((prevState) => {
      return {
        ...prevState,
        sex: value,
      };
    });

  return (
    <>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Добавить пользователя
      </Button>
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
            type="text"
            fullWidth
            onChange={(e) => nameHandler(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Email Address"
            type="email"
            fullWidth
            onChange={(e) => emailHandler(e.target.value)}
          />
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="grouped-select">Пол</InputLabel>
            <Select
              defaultValue=""
              id="grouped-select"
              onChange={(e) => sexHandler(e.target.value)}
            >
              <MenuItem value="">
                <em>{"---"}</em>
              </MenuItem>
              <MenuItem value={"male"}>Мужчина</MenuItem>
              <MenuItem value={"female"}>Женщина</MenuItem>
              <MenuItem value={"other"}>Другое</MenuItem>
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Отмена
          </Button>
          <Button
            onClick={() => {
              addUserHandler(user);
              handleClose()
            }}
            color="primary"
          >
            Создать
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

const mapDispatchToProps = {
  addUserHandler,
};

export default connect(null, mapDispatchToProps)(ModalUser);
