import React from "react";
import {Button, Grid, makeStyles, Typography} from "@material-ui/core";
import VisibilityIcon from "@material-ui/icons/Visibility";
import DeleteIcon from "@material-ui/icons/Delete";
import PersonIcon from "@material-ui/icons/Person";
import { Link } from "react-router-dom";
import MailIcon from "@material-ui/icons/Mail";
import WcIcon from "@material-ui/icons/Wc";
import { connect } from "react-redux";
import { activeUserHandler, userDelete } from "../../redux/actions/action";
import ModalEdit from "../../templates/ModalEdit";

const useStyles = makeStyles(() => ({
  root: {
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.25)",
    marginBottom: "25px",
    borderRadius: "5px",
    minWidth: "33%",
    alignContent: 'space-between'
  },
  icons: {
    padding: 20,
    display: "flex",
    justifyContent: "space-between",
  },
  centerRow: {
    minHeight: 82,
    display: "flex",
    alignItems: "center",
    padding: 20,
  },
}));

const UserListItem = ({ activeUserHandler, userDelete, user, users }) => {
  const { id, fullName, email, sex } = user;

  const selectGender = (gender) =>
    gender === "male" ? "Мужчина" : gender === "female" ? "Женщина" : "Другое";

  const classes = useStyles();

  return (
    <>
      <Grid item md={4} sm={12}>
        <Grid
          container
          className={classes.root}
          justify={"space-between"}
          alignItems={"center"}
        >
          <Grid item style={{textAlign: "center", padding: 15}} md={12} xs={12}>
            <Typography variant={'h6'}>Информация о пользователе:</Typography>
          </Grid>
          <Grid item className={classes.centerRow} md={12}>
            <PersonIcon />
            &nbsp; {fullName}
          </Grid>
          <Grid item className={classes.centerRow}>
            <MailIcon />
            &nbsp; {email}
          </Grid>
          <Grid item className={classes.centerRow}>
            <WcIcon />
            &nbsp; {selectGender(sex)}
          </Grid>
          <Grid item xs={12}  className={classes.icons}>
            <Grid container wrap={"nowrap"} alignItems={'center'} justify={"space-between"}>
              <Grid item>
                  <Link style={{ color: "#fff", display: 'flex' }} to={"/user"}>
                <Button variant={"contained"} color={'secondary'}>
                    <VisibilityIcon onClick={() => activeUserHandler(id)} />
                </Button>
                  </Link>
              </Grid>
              <Grid item>
                  <ModalEdit userData={user} />
              </Grid>
              <Grid item>
                <Button variant={"contained"} color={'secondary'} onClick={() => userDelete(users, id)}>
                  <DeleteIcon
                    cursor={"pointer"}
                  />
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    users: state.main.users,
  };
};

const mapDispatchToProps = {
  activeUserHandler,
  userDelete,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserListItem);
