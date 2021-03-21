import React from "react";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  makeStyles, Radio,
  RadioGroup
} from "@material-ui/core";
import UserList from "../components/main/UserList";
import ModalUser from "../components/main/ModalUser";
import { connect } from "react-redux";
import { activeGenderHandler } from "../redux/actions/action";
import {PlaceHolder} from "../components/main/PlaceHolder";

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: "25px",
  },
  modal: {
    textAlign: "right",
  },
}));

export const Main = ({ activeGenderHandler, activeGender, users }) => {
  const classes = useStyles();


  const handleChange = (event) => {
    activeGenderHandler(event.target.value)
  };


  return (
    <>
      <Grid justify={!users.length ? "center" : 'center'} container>
        <Grid item xs={12} classes={{ root: classes.root }}>
          <Grid container justify={"space-between"} spacing={2}>
            <Grid item>
              <FormControl component="fieldset">
                <FormLabel component="legend">Пол</FormLabel>
                <RadioGroup row aria-label="gender" name="gender1" value={activeGender} onChange={handleChange}>
                  <FormControlLabel value="all" control={<Radio />} label="Все" />
                  <FormControlLabel value="male" control={<Radio />} label="Мужчины" />
                  <FormControlLabel value="female" control={<Radio />} label="Женщины" />
                  <FormControlLabel value="other" control={<Radio />} label="Другие" />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item className={classes.modal}>
              <ModalUser />
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={12}>
          {users.length ? <UserList /> : <PlaceHolder />}

        </Grid>
      </Grid>
    </>
  );
};

const mapDispatchToProps = {
  activeGenderHandler,
};

const mapStateToProps = state => {
  return {
    activeGender: state.main.activeGender,
    users: state.main.users
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
