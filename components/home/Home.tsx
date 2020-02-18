import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import TourCards from "./TourCards";

interface Props {
  nodeEnv: string;
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  heroContent: {
    // padding: theme.spacing(8, 0, 6)
  }
}));

const Layout: React.FC<Props> = ({ nodeEnv }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth="lg" component="main" className={classes.heroContent}>
        <TourCards />
      </Container>
    </div>
  );
};

export default Layout;
