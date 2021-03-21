import {Container, makeStyles, Paper, Typography} from "@material-ui/core";
import { Route, Switch } from "react-router-dom";
import  Main  from "./Pages/Main";
import User from "./Pages/User";
import { Error404 } from "./Pages/Error404";




const useStyles = makeStyles(() => ({
    root: {
        margin: '20px 0',
        padding: 25
    }
}))

function App() {
    const classes = useStyles()

  return (
    <>

      <Container maxWidth={"lg"}>
          <Typography variant={'h4'}>User Manage</Typography>
        <Paper elevation={3} classes={{root: classes.root}}>
          <Switch>
            <Route path={"/"} exact component={Main} />
            <Route path={"/user"} component={User} />
            <Route path={"*"} component={Error404} />
          </Switch>
        </Paper>
      </Container>
    </>
  );
}

export default App;
