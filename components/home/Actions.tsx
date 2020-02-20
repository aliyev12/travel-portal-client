import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import red from "@material-ui/core/colors/red";
import Button from "@material-ui/core/Button";
import Link from "next/link";
import Router from "next/router";

interface Props {
  handleExpandClick: () => void;
  expanded: boolean;
  slug: string;
}

const useStyles = makeStyles(theme => ({
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  detailsBtn: {
    marginLeft: "1rem"
  },
  like: {},
  liked: {
    "& svg": {
      color: red[500]
    }
  },
  anchor: {}
}));

const Actions: React.FC<Props> = ({ handleExpandClick, expanded, slug }) => {
  const classes = useStyles();
  const [liked, setLiked] = React.useState(false);

  return (
    <CardActions disableSpacing>
      <IconButton
        aria-label="add to favorites"
        onClick={() => setLiked(l => !l)}
        className={clsx(classes.like, {
          [classes.liked]: liked
        })}
      >
        <FavoriteIcon />
      </IconButton>
      <IconButton aria-label="share">
        <ShareIcon />
      </IconButton>
      <Button
        className={classes.detailsBtn}
        variant="contained"
        color="primary"
        onClick={() => {
          Router.push("/tour/[slug]", `/tour/${slug}`);
        }}
      >
        Details
      </Button>
      <IconButton
        className={clsx(classes.expand, {
          [classes.expandOpen]: expanded
        })}
        onClick={handleExpandClick}
        aria-expanded={expanded}
        aria-label="show more"
      >
        <ExpandMoreIcon />
      </IconButton>
    </CardActions>
  );
};

export default Actions;
