import React from "react";
import { Box, Button, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

export const Error404 = () => {
  return (
    <>
      <Box>
        <Typography variant={"h1"}>Error 404</Typography>
        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          padding={"20px 0"}
        >
          <Typography align={"center"} variant={"h5"}>
            Заплутали? Ничего страшного нажмите на кнопку, чтобы вернуться
          </Typography>
          <Link style={{ marginTop: 20, textDecoration: "none" }} to={"./"}>
            <Button variant={"contained"} color={"secondary"}>
              Главная
            </Button>
          </Link>
        </Box>
      </Box>
    </>
  );
};
