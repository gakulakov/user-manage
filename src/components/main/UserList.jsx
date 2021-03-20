import React from "react";
import { UserListItem } from "./UserListItem";
import { Grid } from "@material-ui/core";
import { connect } from "react-redux";

const UserList = ({ users, activeGender }) => {
  // const mock = [
  //   {id: 1, fullName: 'Иванов Иван Иванович', email: 'ivanov.ivan@mail.ru', sex: 'male'},
  //   {id: 2, fullName: 'Иванов Иван Иванович', email: 'ivanov.ivan@mail.ru', sex: 'male'},
  //   {id: 3, fullName: 'Иванов Иван Иванович', email: 'ivanov.ivan@mail.ru', sex: 'female'},
  //   {id: 4, fullName: 'Иванов Иван Иванович', email: 'ivanov.ivan@mail.ru', sex: 'male'},
  //   {id: 5, fullName: 'Иванов Иван Иванович', email: 'ivanov.ivan@mail.ru', sex: 'male'},
  //   {id: 6, fullName: 'Иванов Иван Иванович', email: 'ivanov.ivan@mail.ru', sex: 'female'},
  //   {id: 7, fullName: 'Иванов Иван Иванович', email: 'ivanov.ivan@mail.ru', sex: 'male'},
  //   {id: 8, fullName: 'Иванов Иван Иванович', email: 'ivanov.ivan@mail.ru', sex: 'female'},
  // ]

  console.log(users);

  return (
    <Grid container>
      {activeGender === "male"
        ? users
            .filter((i) => i.sex === "male")
            .map((user, index) => <UserListItem key={index} {...user} />)
        : activeGender === "female"
        ? users
            .filter((i) => i.sex === "female")
            .map((user, index) => <UserListItem key={index} {...user} />)
        : activeGender === "other"
        ? users
            .filter((i) => i.sex === "other")
            .map((user, index) => <UserListItem key={index} {...user} />)
        : users.map((user, index) => <UserListItem key={index} {...user}/>)}
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
