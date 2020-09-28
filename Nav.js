import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import MyProjects from "./MyProjects";
import "./App.css";

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
          <Typography>{children}</Typography>
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
    "aria-controls": `nav-tabpanel-${index}`,
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

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    // backgroundColor: "#E6E5E5",
    backgroundColor: "#f9e6d5",
  },
  tab: {
    color: "white",
    "&:hover": {
      color: "#8B4411",
    },
  },
  label: {
    color: "white",
  },
  indicator: {
    // backgroundColor: "#8B4411",
    backgroundColor: "#2b6e3b",
    height: "5px",
    width: "3px",
  },
}));

export default function NavTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        style={{
          background: "#CC9767",
          maxWidth: "80%",
          margin: "0 auto",
        }}
      >
        <Tabs
          classes={{ root: classes.tab, indicator: classes.indicator }}
          variant="fullWidth"
          value={value}
          onChange={handleChange}
        >
          <LinkTab
            classes={{ label: classes.label }}
            label="About Me"
            href="/about"
            {...a11yProps(0)}
          />
          <LinkTab
            classes={{ label: classes.label }}
            label="My Projects"
            href="/projects"
            {...a11yProps(1)}
          />
          <LinkTab
            classes={{ label: classes.label }}
            label="Contact"
            href="/contact"
            {...a11yProps(2)}
          />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <AboutMe />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <MyProjects />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Contact />
      </TabPanel>
    </div>
  );
}
