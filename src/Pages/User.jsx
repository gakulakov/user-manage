import React from "react";
import { Box, Grid, Paper, Typography } from "@material-ui/core";
import { connect } from "react-redux";

const User = ({ activeUser, users }) => {
  return (
    <>
      <Paper>
        <Box padding={2}>
        <Grid container>
          <Grid item xs={6}>
            <Typography variant={"h3"}>ФИО:</Typography>
            <Typography variant={"h4"}>Иванов Иван Иванович</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant={"h3"}>Эл. почта:</Typography>
            <Typography variant={"h4"}>ivanov.ivan@mail.ru</Typography>
          </Grid>
          <Grid item>
            <Typography variant={"h3"}>Пол:</Typography>
            <Typography variant={"h4"}>Мужской</Typography>
          </Grid>
        </Grid>
        </Box>
      </Paper>

      {/*<Typography variant={'h1'}>*/}
      {/*    {users[activeUser].fullName}*/}
      {/*</Typography>*/}
      {/*<Typography variant={'h1'}>*/}
      {/*    {users[activeUser].email}*/}
      {/*</Typography>*/}
      {/*<Typography variant={'h1'}>*/}
      {/*    {users[activeUser].sex}*/}
      {/*</Typography>*/}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    activeUser: state.main.activeUser - 1,
    users: state.main.users,
  };
};

export default connect(mapStateToProps, null)(User);
