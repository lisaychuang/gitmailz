import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// material-ui components
import MenuList from "@material-ui/core/MenuList";
import MenuItem from "@material-ui/core/MenuItem";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import HomeIcon from "@material-ui/icons/Home";
import AccountIcon from "@material-ui/icons/AccountBox";
import InboxIcon from "@material-ui/icons/Inbox";

const styles = theme => ({
  menuItem: {
    "&:focus": {
      backgroundColor: theme.palette.primary.main,
      "& $primary, & $icon": {
        color: theme.palette.common.white
      }
    }
  },
  primary: {},
  icon: {}
});

function Sidebar(props) {
  const { classes } = props;

  return (
    <Paper>
      <MenuList>
      {/* Menu option for Home */}
        <MenuItem className={classes.menuItem}>
          <ListItemIcon className={classes.icon}>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText
            classes={{ primary: classes.primary }}
            inset>
            <Link to="/">Home</Link>
          </ListItemText>
        </MenuItem>

        {/* Menu option for Account page */}
        <MenuItem className={classes.menuItem}>
          <ListItemIcon className={classes.icon}>
            <AccountIcon />
          </ListItemIcon>
          <ListItemText
            classes={{ primary: classes.primary }}
            inset>
            <Link to="/account">Account</Link>
          </ListItemText>
        </MenuItem>
        
        {/* Menu option for Notifications */}
        <MenuItem className={classes.menuItem}>
        <ListItemIcon className={classes.icon}>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText
          classes={{ primary: classes.primary }}
          inset>
          <Link to="/notifications">Notifications</Link>
        </ListItemText>
      </MenuItem>

      </MenuList>
    </Paper>
  );
}

Sidebar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Sidebar);
