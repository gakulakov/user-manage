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
  const [errorMail, setErrorMail] = useState(false)

  const handleCloseModal = () => setOpen(false);
  const handleClickOpenModal = () => setOpen(true);

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
        email: value.replace(/\s+/g, ''),
      };
    });

  const sexHandler = (value) =>
    setUser((prevState) => {
      return {
        ...prevState,
        sex: value,
      };
    });


  // Регулярка

  const validateEmail = (email) => {
    const regular = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

    return regular.test(String(email).toLowerCase());
  }

  const validateUser = () => user.email && user.fullName && user.sex

  const showError = () => !validateEmail(user.email) ? setErrorMail(true) : setErrorMail(false)


  return (
    <>
      <Button
        variant="contained"
        color="secondary"
        onClick={handleClickOpenModal}
      >
        Добавить пользователя
      </Button>
      <Dialog
        open={open}
        onClose={() => {
          setUser({})
          handleCloseModal();
        }}
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
            value={user.email ? user.email : ""}
            type="email"
            fullWidth
            onChange={(e) => emailHandler(e.target.value)}
            error={errorMail}
            onBlur={showError}
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
          <Button
            onClick={() => {
              handleCloseModal();
              setUser({});
            }}
            color="secondary"
            variant="contained"
          >
            Отмена
          </Button>
          <Button
            onClick={() => {
              addUserHandler(user);
              handleCloseModal();
              setUser({});
            }}
            variant="contained"
            color="primary"
            disabled={!validateUser() || !validateEmail(user.email)}
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
