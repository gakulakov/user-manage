import React from "react";
import UserListItem from "./UserListItem";
import { Grid } from "@material-ui/core";
import { connect } from "react-redux";

const UserList = ({ users, activeGender }) => {

  return (
    <Grid container>
      {activeGender === "male"
        ? users
            .filter((i) => i.sex === "male")
            .map((user) => <UserListItem key={user.id} user={user} />)
        : activeGender === "female"
        ? users
            .filter((i) => i.sex === "female")
            .map((user) => <UserListItem key={user.id} user={user} />)
        : activeGender === "other"
        ? users
            .filter((i) => i.sex === "other")
            .map((user) => <UserListItem key={user.id} user={user} />)
        : users.map((user) => <UserListItem key={user.id} user={user} />)}
    </Grid>
  );
};

const mapStateToProps = (state) => {
  return {
    users: state.main.users,
    activeGender: state.main.activeGender,
  };
};

export default connect(mapStateToProps, null)(UserList);
