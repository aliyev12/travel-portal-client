import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import NextLink from "next/link";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import { fade, makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import Logo from "./Logo";
import Links from "./Links";
import Account from "./Account";
import { colors } from "../../utils/styles";

interface Props {}

const useStyles = makeStyles(theme => ({
  "@global": {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: "none"
    }
  },
  appBar: {
    borderBottom: `0`,
    backgroundColor: "transparent"
  },
  toolbar: {
    flexWrap: "wrap",
    minHeight: "130px"
  },
  toolbarTitle: {
    flexGrow: 1,
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    "& svg": {
      marginRight: "2rem"
    },
    "& h6": {
      marginTop: "0.2rem"
    },
    "&:hover": {
      textDecoration: "none"
    }
  },
  menuButton: {
    marginLeft: theme.spacing(2),
    "& svg": {
      width: "3rem",
      height: "3rem"
    }
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  search: {
    position: "relative",
    border: `1px solid ${colors.mainBlue}`,
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "& svg": {
      width: "2rem",
      height: "2rem"
    }
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    fontSize: "1.6rem",
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: 120,
      "&:focus": {
        width: 200
      }
    }
  }
}));

const Navbar: React.FC<Props> = () => {
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);

  return (
    <AppBar
      position="static"
      color="default"
      elevation={0}
      className={classes.appBar}
    >
      <Toolbar className={classes.toolbar}>
        <NextLink href="/">
          <Link
            variant="button"
            color="textPrimary"
            href="#"
            className={classes.toolbarTitle}
          >
            <Logo title="Globe with airplace flying" />
            <Typography variant="h4" color="inherit" noWrap>
              Travel Portal
            </Typography>
          </Link>
        </NextLink>
        <Links auth={auth} />
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon width="20" />
          </div>
          <InputBase
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput
            }}
            inputProps={{ "aria-label": "search" }}
          />
        </div>
        {auth && <Account auth={auth} />}
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="open drawer"
          onClick={() => setAuth(ath => !ath)}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
