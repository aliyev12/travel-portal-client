import React from "react";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import { colors } from "../../utils/styles";

interface Props {
  auth: boolean;
}

const useStyles = makeStyles(theme => ({
  link: {
    fontSize: "1.6rem",
    margin: theme.spacing(1, 1.5),
    "&:hover": {
      textDecoration: "none"
    }
  }
}));

const Links: React.FC<Props> = ({ auth }) => {
  const classes = useStyles();

  return (
    <nav>
      {auth && (
        <Link
          variant="button"
          color="textPrimary"
          href="#"
          className={classes.link}
        >
          My Bookings
        </Link>
      )}
      {!auth && (
        <Link
          variant="button"
          color="textPrimary"
          href="#"
          className={classes.link}
        >
          Login
        </Link>
      )}
    </nav>
  );
};

export default Links;

//  {/* <Button href="#">Login</Button> */}
//     {/* <Button variant="outlined" color="primary">
//       Login
//     </Button> */}
//     {/* <Button
//       href="#"
//       color="primary"
//       variant="outlined"
//       className={classes.link}
//     >
//       Login
//     </Button> */}
