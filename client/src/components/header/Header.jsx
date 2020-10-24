import { AppBar, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import FlareIcon from '@material-ui/icons/Flare';
import {makeStyles} from '@material-ui/styles'
const useStyles = makeStyles(()=>({
    typographyStyles: {
        flex: 1
    }
}));
const Header = () => {
    const classes = useStyles();
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography className={classes.typographyStyles}>
                    <FlareIcon/>
                    This is header
                </Typography>
            </Toolbar>
        </AppBar>
    )
}
export default Header;