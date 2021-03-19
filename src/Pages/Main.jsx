import React, { useState } from "react";
import { Button, Grid, makeStyles, Typography } from "@material-ui/core";
import { UserList } from "../components/main/UserList";
import { ModalUser } from "../components/main/ModalUser";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "right",
    marginBottom: "25px",
  },
}));

export const Main = () => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);
  const handleClickOpen = () => setOpen(true);

  return (
    <>
      <Grid container>
        <Grid item xs={12} classes={{ root: classes.root }}>
          <Button variant="outlined" color="primary" onClick={handleClickOpen}>
            Добавить пользователя
          </Button>
        </Grid>
        <Grid item>
          <UserList />
        </Grid>
      </Grid>
      <ModalUser open={open} handleClose={handleClose} />
    </>
  );
};
