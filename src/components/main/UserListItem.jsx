import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import VisibilityIcon from "@material-ui/icons/Visibility";
import DeleteIcon from "@material-ui/icons/Delete";
import PersonIcon from "@material-ui/icons/Person";
import { Link } from "react-router-dom";
import MailIcon from "@material-ui/icons/Mail";
import WcIcon from "@material-ui/icons/Wc";
import {connect} from "react-redux";
import {activeUserHandler, userDelete} from "../../redux/actions/action";

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.25)",
    marginBottom: "25px",
    borderRadius: "5px",
  },
  icons: {
    padding: 20,
    display: "flex",
    justifyContent: "space-between",
    maxWidth: "200px",
  },
  centerRow: {
    display: "flex",
    alignItems: "center",
    padding: 20,
  },
}));

const UserListItem = ({activeUserHandler,userDelete, user, users}) => {
  const { id, fullName, email, sex } = user;

  const selectGender = (gender) =>
    gender === "male" ? "Мужчина" : gender === "female" ? "Женщина" : "Другое";

  const classes = useStyles();

  return (
    <>
      <Grid container className={classes.root}>
        <Grid item md={3} xs={12} className={classes.centerRow}>
          <PersonIcon />
          &nbsp; {fullName}
        </Grid>
        <Grid item md={3} xs={12} className={classes.centerRow}>
          <MailIcon />
          &nbsp; {email}
        </Grid>
        <Grid item md={3} xs={6} className={classes.centerRow}>
          <WcIcon />
          &nbsp; {selectGender(sex)}
        </Grid>
        <Grid item md={3} xs={6} className={classes.icons}>
          <Link to={"/user"}>
            {/* TODO: Передать id */}
            <VisibilityIcon onClick={() => activeUserHandler(id)} />
          </Link>
          <EditIcon />
          <DeleteIcon onClick={() => userDelete(users, id)} />
        </Grid>
      </Grid>
    </>
  );
};


const mapStateToProps = (state) => {
  return {
    users: state.main.users
  }
}

const mapDispatchToProps = {
  activeUserHandler,
  userDelete
}

export default connect(mapStateToProps, mapDispatchToProps)(UserListItem)