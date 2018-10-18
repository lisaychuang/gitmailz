import React from "react";
import PropTypes from "prop-types";
import MenuList from "@material-ui/core/MenuList";
import MenuItem from "@material-ui/core/MenuItem";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import HomeIcon from "@material-ui/icons/Home";
import AccountIcon from "@material-ui/icons/AccountBox";
import InboxIcon from "@material-ui/icons/Inbox";
import InfoIcon from "@material-ui/icons/Info";
import { Link } from "react-router-dom";

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

function ListItemComposition(props) {
  const { classes } = props;

  return (
    <Paper>
      <MenuList>
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
        <MenuItem className={classes.menuItem}>
          <ListItemIcon className={classes.icon}>
            <InfoIcon />
          </ListItemIcon>
          <ListItemText
            classes={{ primary: classes.primary }}
            inset>
            <Link to="/about">About</Link>
          </ListItemText>
        </MenuItem>
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

ListItemComposition.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ListItemComposition);
