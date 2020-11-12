import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import TableProduct from '../TableProduct';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    'aria-controls': `nav-tabpanel-${index}`,
  };
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

function NavTabs(props) {
  const childrens = props.children;
  const classes = useStyles();
  const [value, setValue] = React.useState(1);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
        >
          <LinkTab label="Tất cả" href="/all" {...a11yProps(0)} />
          <LinkTab label="Đang xử lý" href="/pending" {...a11yProps(1)} />
          <LinkTab label="Sẵn sàng giao" href="/rts" {...a11yProps(2)} />
          <LinkTab label="Đang giao hàng" href="/shipped" {...a11yProps(3)} />
          <LinkTab label="Đã giao hàng" href="/delivered" {...a11yProps(4)} />
          <LinkTab label="Đã hủy" href="/canceled" {...a11yProps(5)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <TableProduct/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <TableProduct/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        Page Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Page Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Page Five
      </TabPanel>
      <TabPanel value={value} index={5}>
        Page Sĩ
      </TabPanel>
    </div>
  );
}

export default NavTabs;