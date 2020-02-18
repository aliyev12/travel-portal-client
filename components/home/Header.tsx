import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import CardActionArea from "@material-ui/core/CardActionArea";
import moment from "moment";
import colorPerLetter from "../utils/colorPerLetter";
import getHost from "../utils/getHost";
import Spotlights from "./Spotlights";
import { colors } from "../utils/styles";
import CardCollapsible from "./CardCollapsible";
import Difficulty from "./Difficulty";
import Actions from "./Actions";
import closestDate from "./closestDate";

interface Props {
  name: string;
  createdAt: number;
}

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 345
  },
  avatar: {
    backgroundColor: red[500]
  }
}));

const Header: React.FC<Props> = ({ name, createdAt }) => {
  const classes = useStyles();

  const firstLetter = name
    .toLowerCase()
    .split("the ")[1][0]
    .toUpperCase();

  return (
    <CardHeader
      avatar={
        <Avatar
          aria-label="recipe"
          className={classes.avatar}
          style={{ backgroundColor: colorPerLetter(firstLetter) }}
        >
          {firstLetter}
        </Avatar>
      }
      action={
        <IconButton aria-label="settings">
          <MoreVertIcon />
        </IconButton>
      }
      title={name}
      subheader={moment(createdAt * 1).format("MMMM Do YYYY")}
    />
  );
};

export default Header;
