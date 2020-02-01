import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

interface Props {}
//
// About us
// Download apps
// Become a guide
// Careers
// Contact
const useStyles = makeStyles(theme => ({
  linksContainer: {
    display: "flex",
    justifyContent: "center"
  },
  link: {
    margin: theme.spacing(1, 1.5)
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6)
    }
  }
}));

const Footer: React.FC<Props> = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="lg" component="footer" className={classes.footer}>
      <Grid container spacing={4} justify="space-evenly">
        <Grid item xs={12}>
          <ul className={classes.linksContainer}>
            <li className={classes.link}>
              <Link href="#" variant="subtitle1" color="textSecondary">
                About us
              </Link>
            </li>
            <li className={classes.link}>
              <Link href="#" variant="subtitle1" color="textSecondary">
                Download apps
              </Link>
            </li>
            <li className={classes.link}>
              <Link href="#" variant="subtitle1" color="textSecondary">
                Become a guide
              </Link>
            </li>
            <li className={classes.link}>
              <Link href="#" variant="subtitle1" color="textSecondary">
                Careers
              </Link>
            </li>
            <li className={classes.link}>
              <Link href="#" variant="subtitle1" color="textSecondary">
                Contact
              </Link>
            </li>
          </ul>
        </Grid>
      </Grid>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
};

export default Footer;

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://aaliyev.com/">
        Abdul Aliyev
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
