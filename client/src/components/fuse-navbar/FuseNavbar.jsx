import React, { useState, Fragment, Component } from "react";
import { Link, withRouter } from "react-router-dom";
import {
  AppBar,
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
import { withStyles } from "@material-ui/core/styles";
import { Menu as MenuIcon } from "@material-ui/icons";
import { compose } from "recompose";
const drawerWidth = 240;

const styles = (theme) => ({
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
});

class FuseNavbar extends Component {
  state = {
    mobileOpen: false,
    anchorEl: null,
    dropSwitcher: -1
  };

  handleDropdown = (event) => {
    this.setState({
      dropSwitcher: (this.state.dropSwitcher == event.currentTarget.getAttribute("drop-index") ? -1 : event.currentTarget.getAttribute("drop-index"))
    });
    console.log(event.currentTarget.getAttribute("drop-index"))
    //console.log(this.state.anchorEl);
  };

  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  };

  render() {
    const {
      classes,
      location: { pathname },
      children,
      writers,
    } = this.props;

    const { mobileOpen } = this.state;

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
          <MenuItem component={Button} className={classes.buttonNav} drop-index={0} variant="text" onClick={this.handleDropdown}>
            toggle
          </MenuItem>
          <Collapse in={this.state.dropSwitcher == 0 ? true : false} timeout={300}>
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

          <MenuItem component={Button} className={classes.buttonNav} drop-index={1} variant="text" onClick={this.handleDropdown}>
            toggle
          </MenuItem>

          <Collapse in={this.state.dropSwitcher == 1 ? true : false} timeout={300}>
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
                onClick={this.handleDrawerToggle}
                className={classes.navIconHide}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" color="inherit" noWrap>
                Writers Blog
              </Typography>
            </Toolbar>
          </AppBar>

          <Hidden mdUp>
            <Drawer variant="temporary" open={mobileOpen} onClose={this.handleDrawerToggle} classes={{ paper: classes.drawerPaper, }} ModalProps={{ keepMounted: true, }}>
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
}

export default compose(withRouter, withStyles(styles))(FuseNavbar);