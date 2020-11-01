import React, { useState, Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  AppBar,
  Box,
  Button,
  Collapse,
  CssBaseline,
  Drawer,
  Fade,
  Hidden,
  IconButton,
  MenuItem,
  MenuList,
  Popper,
  Toolbar,
  Typography,
} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Menu from "@material-ui/icons/Menu";
import withStyles from "@material-ui/core/styles/withStyles";

import compose from "recompose/compose";
import Header from "../Header";
const drawerWidth = 240;

const styles = (theme) => {
  console.log(theme);
  return {
    root: {
      flexGrow: 1,
      zIndex: 1,
      overflow: "hidden",
      position: "relative",
      display: "flex",
      width: "100%",
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
    navIconHide: {
      [theme.breakpoints.up("md")]: {
        display: "none",
      },
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth,
      [theme.breakpoints.up("md")]: {
        position: "relative",
      },
    },
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing(3),
    },
    nested: {
      paddingLeft: theme.spacing(4),
    },
    buttonNav: {
      width: "100%"
    }
  }
};



const FuseNavbar = (props) => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropSwitcher, setDropSwitcher] = useState(-1)
  const {
    classes,
    location: { pathname },
    children,
    writers,
    multiTheme
  } = props;

  const setThemeName = multiTheme;
  const handleDropdown = (event) => {
    setDropSwitcher((dropSwitcher == event.currentTarget.getAttribute("drop-index") ? -1 : event.currentTarget.getAttribute("drop-index")));
    console.log(event.currentTarget.getAttribute("drop-index"))
    //console.log(this.state.anchorEl);
  };
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const drawer = (
    <div>
      <Hidden smDown>
        <div className={classes.toolbar} />
      </Hidden>
      <MenuList>
        <MenuItem component={Link} to="/" selected={"/" === pathname}>
          Home
        </MenuItem>
        <MenuItem
          component={Link}
          to="/products"
          selected={"/products" === pathname}
        >
          Table Product
        </MenuItem>
        <MenuItem component={Link} to="/writers" selected={"/writers" === pathname} >
          Writers
        </MenuItem>
  {/* DROP down*/}
        <MenuItem component={Button} className={classes.buttonNav} drop-index={1} variant="text" onClick={handleDropdown}>
          toggle
        </MenuItem>

        <Collapse in={dropSwitcher == 1 ? true : false} timeout={300}>
          <MenuList>
            {writers.map(({ id, name }) => {
              const to = `/writers/${id}`;
              return (
                <MenuItem to={to} key={id} className={classes.nested} component={Link} selected={to === pathname} >
                  {name}
                </MenuItem>
              );
            })}
          </MenuList>
        </Collapse>
  {/* End DROP down*/}
        <MenuItem component={Button} className={classes.buttonNav} drop-index={1} variant="text" onClick={handleDropdown}>
          toggle
        </MenuItem>

        <Collapse in={dropSwitcher == 1 ? true : false} timeout={300}>
          <MenuList>
            {writers.map(({ id, name }) => {
              const to = `/writers/${id}`;
              return (
                <MenuItem to={to} key={id} className={classes.nested} component={Link} selected={to === pathname} >
                  {name}
                </MenuItem>
              );
            })}
          </MenuList>
        </Collapse>

      </MenuList>
    </div>
  );
  return (
    <Fragment>
      <CssBaseline />
      <div className={classes.root}>
        <AppBar position="absolute" className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerToggle}
              className={classes.navIconHide}
            >
              < Menu />
            </IconButton>
            <Typography variant="h6" color="inherit" noWrap>
              Writers Blog
            </Typography>
            <Button
              size="small"
              variant="contained"
              color="primary"
              onClick={() => {setThemeName("lightTheme")}}
            >
              Light
            </Button>
            <Button
              size="small"
              variant="contained"
              color="secondary"
              onClick={() => setThemeName("darkTheme")}
            >
              Dark
            </Button>
            <Button
              size="small"
              variant="contained"
              color="primary"
              onClick={() => {setThemeName("goldenTheme")}}
            >
              Golden
            </Button>
          </Toolbar>
        </AppBar>
        <Hidden mdUp>
          <Drawer variant="temporary" open={mobileOpen} onClose={handleDrawerToggle} classes={{ paper: classes.drawerPaper, }} ModalProps={{ keepMounted: true, }}>
            {drawer}
          </Drawer>
        </Hidden>

        <Hidden smDown implementation="css">
          <Drawer variant="permanent" open classes={{ paper: classes.drawerPaper, }}>
            {drawer}
          </Drawer>
        </Hidden>

        <main className={classes.content}>
          <div className={classes.toolbar} />
          {children}
        </main>
      </div>
    </Fragment>
  );
}

export default compose(withRouter, withStyles(styles))(FuseNavbar);
