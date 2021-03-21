import React from "react";
import { Box, Button, Grid, Paper, Typography } from "@material-ui/core";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const User = ({ activeUser, users }) => {
  const selectGender = (gender) =>
    gender === "male" ? "Мужчина" : gender === "female" ? "Женщина" : "Другое";

  return (
    <>
      {activeUser === -1 ? (
        <Paper>
          <Box padding={5}>
            <Grid container spacing={4} justify={"center"}>
              <Grid item xs={12}>
                <Typography variant={"h5"} align={"center"}>
                  Выберите пользователя на главной странице для просмотра
                  подробной информации
                </Typography>
              </Grid>
              <Grid item>
                <Button variant={"contained"} color={"secondary"}>
                  <Link
                    style={{ textDecoration: "none", color: "#FFF" }}
                    to={"/"}
                  >
                    Главная
                  </Link>
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      ) : (
        <Paper>
          <Box padding={5}>
            <Grid container justify={"space-between"} spacing={4}>
              <Grid item md={4} >
                <Typography variant={"h3"}>ФИО:</Typography>
                <Typography variant={"h4"}>
                  {users[activeUser].fullName}
                </Typography>
              </Grid>
              <Grid item md={4}>
                <Typography variant={"h3"}>Эл. почта:</Typography>
                <Typography variant={"h4"}>
                  {users[activeUser].email}
                </Typography>
              </Grid>
              <Grid item md={4} >
                <Typography variant={"h3"}>Пол:</Typography>
                <Typography variant={"h4"}>
                  {selectGender(users[activeUser].sex)}
                </Typography>
              </Grid>
              <Grid item md={12} style={{ textAlign: "right" }}>
                  <Link
                    style={{ textDecoration: "none", color: "#FFF" }}
                    to={"/"}
                  >
                <Button variant={"contained"} color={"secondary"}>
                    Главная
                </Button>
                  </Link>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      )}
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
