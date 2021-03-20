import React from "react";
import { Button, ButtonGroup, Grid, makeStyles } from "@material-ui/core";
import UserList from "../components/main/UserList";
import ModalUser from "../components/main/ModalUser";
import {connect} from "react-redux";
import {activeGenderHandler} from "../redux/actions/action";

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: "25px",
  },
  modal: {
    textAlign: 'right'
  }
}));

export const Main = ({activeGenderHandler, users}) => {
  const classes = useStyles();

  return (
    <>
      <Grid container>
        <Grid item xs={12} classes={{ root: classes.root }}>
          <Grid container>
            <Grid item xs={6}>
            <ButtonGroup
              color="primary"
              aria-label="outlined primary button group"
            >
              <Button onClick={() => activeGenderHandler('all')}>Все</Button>
              <Button onClick={() => activeGenderHandler('male')}>Мужчины</Button>
              <Button onClick={() => activeGenderHandler('female')}>Женщины</Button>
              <Button onClick={() => activeGenderHandler('other')}>Другие</Button>
            </ButtonGroup>
            </Grid>
            <Grid item xs={6} className={classes.modal}>
            <ModalUser />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <UserList />
        </Grid>
      </Grid>
    </>
  );
};

const mapDispatchToProps = {
  activeGenderHandler
}


export default connect(null, mapDispatchToProps)(Main)