import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import TimeIcon from "@material-ui/icons/AccessTimeRounded";
import FitnessIcon from "@material-ui/icons/FitnessCenterRounded";
import PeopleIcon from "@material-ui/icons/PeopleOutlineRounded";
import StarIcon from "@material-ui/icons/StarBorderRounded";
import PlaceIcon from "@material-ui/icons/PlaceRounded";
import getHost from "../utils/getHost";
import { colors } from "../utils/styles";
import { parseRole, imgUrl } from "../utils/helpers";
import { StartLocation, closestTourDate } from "../home/TourCard";
import SectionTitle from "./SectionTitle";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";

export interface Guide {
  id: string;
  role: string;
  name: string;
  email: string;
  photo: string;
  createdAt: string;
  updatedAt: string;
}

interface Props {
  guides: [Guide];
}

const useStyles = makeStyles(theme => ({
  TourGuides: {
    margin: "5rem 0"
  },
  factsContainer: {},
  factItem: {
    display: "flex",
    alignItems: "center",
    marginBottom: "1.5rem",
    "&:last-child": {
      marginBottom: "0"
    }
  },
  icon: {
    marginRight: "1rem",
    "& svg": {
      color: colors.mainBlue,
      width: "2.5rem",
      height: "2.5rem"
    }
  },
  heading: {
    marginRight: "2rem",
    fontSize: "1.6rem",
    fontWeight: "bold"
  },
  info: {
    fontSize: "1.6rem",
    textTransform: "capitalize"
  },
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  inline: {
    display: "inline"
  }
}));

const TourGuides: React.FC<Props> = ({ guides }) => {
  const classes = useStyles();

  console.log("guides = ", guides);
  // "photo": "user-12.jpg",

  // const place =
  //   startLocation && startLocation.description ? startLocation.description : "";

  // const factItems = (Icon, heading, info) => (
  //   <div className={classes.factItem}>
  //     <div className={classes.icon}>
  //       <Icon />
  //     </div>
  //     <div className={classes.heading}>{heading}</div>
  //     <div className={classes.info}>{info}</div>
  //   </div>
  // );

  return (
    <div className={classes.TourGuides}>
      <div className={classes.factsContainer}>
        <SectionTitle title="YOUR TOUR GUIDES" />
        <List className={classes.root}>
          {guides && Array.isArray(guides)
            ? guides.map((guide, i) => {
                return (
                  <React.Fragment key={guide.id}>
                    <ListItem alignItems="flex-start">
                      <ListItemAvatar>
                        <Avatar
                          alt={guide.name}
                          src={imgUrl("users", guide.photo)}
                        />
                      </ListItemAvatar>
                      <ListItemText
                        primary={parseRole(guide.role)}
                        secondary={
                          <React.Fragment>
                            <Typography
                              component="span"
                              variant="body2"
                              className={classes.inline}
                              color="textPrimary"
                            >
                              {guide.name}
                            </Typography>
                            {/* " — Some additional info..." */}
                          </React.Fragment>
                        }
                      />
                    </ListItem>
                    {i < guides.length - 1 && (
                      <Divider variant="inset" component="li" />
                    )}
                  </React.Fragment>
                );
              })
            : null}
        </List>
      </div>
    </div>
  );
};

export default TourGuides;

{
  /* <ListItem alignItems="flex-start">
<ListItemAvatar>
  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
</ListItemAvatar>
<ListItemText
  primary={parseRole()}
  secondary={
    <React.Fragment>
      <Typography
        component="span"
        variant="body2"
        className={classes.inline}
        color="textPrimary"
      >
        Ali Connors
      </Typography>
      {" — I'll be in your neighborhood doing errands this…"}
    </React.Fragment>
  }
/>
</ListItem>
<Divider variant="inset" component="li" />
<ListItem alignItems="flex-start">
<ListItemAvatar>
  <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
</ListItemAvatar>
<ListItemText
  primary="Summer BBQ"
  secondary={
    <React.Fragment>
      <Typography
        component="span"
        variant="body2"
        className={classes.inline}
        color="textPrimary"
      >
        to Scott, Alex, Jennifer
      </Typography>
      {" — Wish I could come, but I'm out of town this…"}
    </React.Fragment>
  }
/>
</ListItem>
<Divider variant="inset" component="li" />
<ListItem alignItems="flex-start">
<ListItemAvatar>
  <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
</ListItemAvatar>
<ListItemText
  primary="Oui Oui"
  secondary={
    <React.Fragment>
      <Typography
        component="span"
        variant="body2"
        className={classes.inline}
        color="textPrimary"
      >
        Sandra Adams
      </Typography>
      {" — Do you have Paris recommendations? Have you ever…"}
    </React.Fragment>
  }
/>
</ListItem> */
}
