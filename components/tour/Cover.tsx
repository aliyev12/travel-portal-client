import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import TimeIcon from "@material-ui/icons/AccessTimeRounded";
import PlaceIcon from "@material-ui/icons/PlaceRounded";
import getHost from "../utils/getHost";
import { imgUrl } from "../utils/helpers";
import { colors } from "../utils/styles";
import { StartLocation } from "../home/TourCard";

interface Props {
  name: string;
  imageCover: string;
  duration: number;
  startLocation: StartLocation;
}

const useStyles = makeStyles(theme => ({
  Cover: {
    display: "flex",
    flexDirection: "column"
  },
  imageCover: {
    position: "relative",
    minHeight: "40rem",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
  },
  titleContainer: {
    position: "absolute",
    textAlign: "center",
    color: "#000",
    marginLeft: "auto",
    marginRight: "auto",
    width: "fit-content",
    padding: "3rem",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "rgba(255,255,255,0.7)",
    boxShadow: `rgba(255, 255, 255, 0.2) 0px 2px 4px -1px, 
      rgba(255, 255, 255, 0.14) 0px 4px 5px 0px, 
      rgba(255, 255, 255, 0.12) 0px 1px 10px 0px`
  },
  title: {
    display: "flex",
    justifyContent: "center"
  },
  details: {
    display: "flex",
    justifyContent: "center"
  },
  item: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "&:first-child": {
      marginRight: "3rem"
    },
    "& svg": {
      marginRight: "0.7rem",
      color: colors.mainBlue,
      width: "25px",
      height: "25px"
    }
  }
}));

const Cover: React.FC<Props> = ({
  name,
  imageCover,
  duration,
  startLocation
}) => {
  const classes = useStyles();

  return (
    <div className={classes.Cover}>
      <div
        className={classes.imageCover}
        style={{
          backgroundImage: `url("${imgUrl("tours", imageCover)}")`
        }}
      >
        <div className={classes.titleContainer}>
          <div className={classes.title}>
            <Typography variant="h1" component="h2" gutterBottom>
              {name}
            </Typography>
          </div>
          <div className={classes.details}>
            <div className={classes.item}>
              <TimeIcon />
              <Typography variant="h4">
                {duration} day{duration === 1 ? "" : "s"}
              </Typography>
            </div>
            <div className={classes.item}>
              <PlaceIcon />
              {console.log("startLocation = ", startLocation)}
              <Typography variant="h4">{startLocation.description}</Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cover;
