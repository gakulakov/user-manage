import React from "react";
import { Button, Grid} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import VisibilityIcon from "@material-ui/icons/Visibility";
import DeleteIcon from "@material-ui/icons/Delete";
import { Link } from "react-router-dom";

export const UserListItem = (props) => {
  const { id, fullName, email, sex } = props;

  return (
    <>
      <Grid container>
        <Grid item md={3} xs={12}>ФИО: {fullName}</Grid>
        <Grid item md={3} xs={12}>Эл. почта: {email}</Grid>
        <Grid item md={3} xs={12}>Пол: {sex}</Grid>
        <Grid item md={3} xs={12}>
          <Link to={"/user"}>
            {/* TODO: Передать id */}
            <Button>
              <VisibilityIcon />
            </Button>
          </Link>
          <Button>
            <EditIcon />
          </Button>
          <Button>
            <DeleteIcon />
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

//<div>
//           <Link to={"/user"}>
//             {/* TODO: Передать id */}
//             <Button>
//               <VisibilityIcon />
//             </Button>
//           </Link>
//           <Button>
//             <EditIcon />
//           </Button>
//           <Button>
//             <DeleteIcon />
//           </Button>
//         </div>
