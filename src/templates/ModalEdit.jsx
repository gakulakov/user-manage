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
import EditIcon from "@material-ui/icons/Edit";
import { connect } from "react-redux";
import { userEdit } from "../redux/actions/action";

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: "250px",
  },
}));

const ModalEdit = ({ userData, userEdit, users }) => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const [user, setUser] = useState({ ...userData });
  const [errorMail, setErrorMail] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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

  // Проверки

  const validateEmail = (email) => {
    const regular = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

    return regular.test(String(email).toLowerCase());
  };

  const validateUser = () => user.email && user.fullName && user.sex;

  const showError = () =>
    !validateEmail(user.email) ? setErrorMail(true) : setErrorMail(false);

  return (
    <>
      <Button variant={"contained"} color={"secondary"} onClick={handleClickOpen}>
        <EditIcon cursor={"pointer"}  />
      </Button>
      <div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">
            Редактирование пользователя
          </DialogTitle>
          <DialogContent>
            <TextField
              margin="dense"
              label="ФИО"
              value={user.fullName}
              type="text"
              fullWidth
              onChange={(e) => nameHandler(e.target.value)}
            />
            <TextField
              margin="dense"
              label="Email Address"
              value={user.email}
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
                value={user.sex}
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
                userEdit(users, user);
                handleClose();
              }}
              disabled={!validateUser() || !validateEmail(user.email)}
              color="primary"
            >
              Изменить
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    users: state.main.users,
  };
};

const mapDispatchToProps = {
  userEdit,
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalEdit);
