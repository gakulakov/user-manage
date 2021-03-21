import React from "react";
import AddIcon from '@material-ui/icons/Add';
import {Box, Typography} from "@material-ui/core";


export const PlaceHolder = () => {
    return (
        <Box textAlign={'center'}>
            <AddIcon htmlColor={'rgba(0, 0, 0, 0.1)'} style={{width: 250, height: 250, textAlign: "center"}} />
            <Typography style={{color: 'rgba(0, 0, 0, 0.2)'}} variant={'h4'}>Пользователей пока нет</Typography>
        </Box>
    )
}