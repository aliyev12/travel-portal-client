import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { colors } from "../../utils/styles";

interface Props {
  auth?: boolean;
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  option: {
    fontSize: "1.6rem"
  },
  title: {
    flexGrow: 1
  },
  accountBtn: {
    // padding: 0
  },
  svgIcon: {
    width: "6rem",
    height: "6rem",
    color: colors.mainBlue
  },
  userImg: {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    margin: "5px"
  }
}));

const Account: React.FC<Props> = ({ auth = true }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  let imgSrc = "/static/user-14.jpg";
  // imgSrc = "";

  return (
    <div>
      <IconButton
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
        className={classes.accountBtn}
        color="inherit"
      >
        {imgSrc ? (
          <img src={imgSrc} className={classes.userImg} />
        ) : (
          <AccountCircle className={classes.svgIcon} />
        )}
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right"
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right"
        }}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} className={classes.option}>
          My account
        </MenuItem>
        <MenuItem onClick={handleClose} className={classes.option}>
          Logout
        </MenuItem>
      </Menu>
    </div>
  );
};

export default Account;
