import React, {useState, Fragment, Component} from 'react';
import { Link, withRouter } from 'react-router-dom';
import { 
  AppBar, CssBaseline, Drawer, Hidden,
  IconButton, MenuItem, MenuList, Toolbar, Typography
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { Menu as MenuIcon} from '@material-ui/icons'
import {compose} from 'recompose';
const drawerWidth = 240

const styles = theme => ({
  root: {
    flexGrow: 1,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  navIconHide: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    [theme.breakpoints.up('md')]: {
      position: 'relative',
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
})

class FuseNavbar extends Component {
  state = {
    mobileOpen: false
  }

  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen })
  }

  render() {
    const { classes, location: { pathname }, children, writersList } = this.props
    const { mobileOpen } = this.state

    const drawer = (
      <div>
        <Hidden smDown>
          <div className={classes.toolbar} />
        </Hidden>
        <MenuList>
          <MenuItem component={Link} to="/" selected={'/' === pathname}>
            Home
          </MenuItem>
          <MenuItem component={Link} to="/writers" selected={'/writers' === pathname}>
            Writers
          </MenuItem>
          <MenuList>{writersList}
            {/*writers.map(({ id, name }) => {
              const to = `/writers/${id}`

              return <MenuItem
                to={to}
                key={id}
                className={classes.nested}
                component={Link}
                selected={to === pathname}
              >
                {name}
              </MenuItem>
            })*/}
          </MenuList>
        </MenuList>
      </div>
    )

    return <Fragment>
      <CssBaseline/>

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
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={this.handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden smDown implementation="css">
          <Drawer
            variant="permanent"
            open
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          {children}
        </main>
      </div>
    </Fragment>
  }
}

export default compose(
  withRouter,
  withStyles(styles)
)(FuseNavbar)

/*
const drawerWidth = 240;
const styles = theme => ({
    root: {
      flexGrow: 1,
      zIndex: 1,
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
        width: '100%',
      },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
    navIconHide: {
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth,
      [theme.breakpoints.up('md')]: {
        position: 'relative',
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
})
const FuseNavbar = (props)=>{
    const [mobileOpen, setMobileOpen] = useState(false);
    const {classes, location: {pathname}, children, writers} = props;
    function handleDrawerToggle(){
        setMobileOpen({mobileOpen: !mobileOpen})
    }
    React.useEffect(() => {
      console.log("fuse props:" + props.writers);
      return () => {
      }
    }, [])
    const drawer = (
      <div>
              <Hidden smDown>
                <div className={classes.toolbar}></div>
            </Hidden>
            <MenuList>
              <MenuItem component={Link} to="/" selected={'/'===pathname}>
              Home
              </MenuItem>
              <MenuItem component={Link} to="/writers" selected={'/writers'===pathname}>
                Writers
              </MenuItem>
              <MenuList>
              {writers.map(({ id, name }) => {
              const to = `/writers/${id}`

              return <MenuItem
                to={to}
                key={id}
                className={classes.nested}
                component={Link}
                selected={to === pathname}
              >
                {name}
              </MenuItem>
            })}
                
              </MenuList>
            </MenuList>
        </div>
    )
    return(<Fragment>
        <CssBaseline>
          <div className={classes.root}>
            <AppBar position="absolute" className={classes.appBar}>
              <Toolbar>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  onClick={handleDrawerToggle}
                  className={classes.navIconHide}
                >
                  <MenuIcon/>
                </IconButton>
                <Typography variant="h6" color="inherit" noWrap>
                  Writers Blog
                </Typography>
              </Toolbar>
            </AppBar>
            <Hidden mdUp>
              <Drawer 
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                classes={{
                  papper: classes.drawerPaper,
                }}
                ModalProps={{
                  keepMounted: true,
                }}
              >
                {drawer}
              </Drawer>
            </Hidden>
          </div>
        </CssBaseline>
    </Fragment>)
}
export default compose(
  withRouter,
  withStyles(styles)
)(FuseNavbar);
*/