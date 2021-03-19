import React from "react";
import {UserListItem} from "./UserListItem";
import {Grid} from "@material-ui/core";

export const UserList = () => {
  const mock = [
    {id: 1, fullName: 'Иванов Иван Иванович', email: 'ivanov.ivan@mail.ru', sex: 'male'},
    {id: 2, fullName: 'Иванов Иван Иванович', email: 'ivanov.ivan@mail.ru', sex: 'male'},
    {id: 3, fullName: 'Иванов Иван Иванович', email: 'ivanov.ivan@mail.ru', sex: 'female'},
    {id: 4, fullName: 'Иванов Иван Иванович', email: 'ivanov.ivan@mail.ru', sex: 'male'},
    {id: 5, fullName: 'Иванов Иван Иванович', email: 'ivanov.ivan@mail.ru', sex: 'male'},
    {id: 6, fullName: 'Иванов Иван Иванович', email: 'ivanov.ivan@mail.ru', sex: 'female'},
    {id: 7, fullName: 'Иванов Иван Иванович', email: 'ivanov.ivan@mail.ru', sex: 'male'},
    {id: 8, fullName: 'Иванов Иван Иванович', email: 'ivanov.ivan@mail.ru', sex: 'female'},
  ]


  return (
      <Grid container>
          {mock.map(user => <UserListItem key={user.id} {...user}/>)}
      </Grid>
  );
};