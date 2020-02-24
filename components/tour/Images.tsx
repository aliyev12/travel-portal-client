import React from "react";
import Slider from "react-slick";
import { makeStyles } from "@material-ui/core/styles";
import Img from "react-image";
import PauseIcon from "@material-ui/icons/PauseRounded";
import PlayIcon from "@material-ui/icons/PlayArrowRounded";
import IconButton from "@material-ui/core/IconButton";
import { imgUrl } from "../utils/helpers";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Props {
  images: [string];
}

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", color: "#333" }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", color: "#333" }}
      onClick={onClick}
    />
  );
}

const sliderSettings = {
  dots: true,
  infinite: true,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  speed: 500,
  slidesToShow: 1,
  pauseOnHover: true,
  pauseOnFocus: true,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />
};

const useStyles = makeStyles(theme => ({
  Images: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "5rem 0",
    width: "100%"
  },
  sliderContainer: {
    // height: "500px",
    width: "500px"
  },
  image: {
    width: "100%"
    // height: "200px"
  }
}));

const Images: React.FC<Props> = ({ images }) => {
  const [playing, setPlaying] = React.useState(true);
  const [slickImages, setSlickImages] = React.useState([]);
  const classes = useStyles();

  let slider;

  React.useEffect(() => {
    const imagesArr = [];
    if (images && images.length && Array.isArray(images)) {
      images.forEach(img => {
        imagesArr.push(
          <div key={img}>
            <Img
              src={imgUrl("tours", img)}
              alt={img}
              className={classes.image}
            />
          </div>
        );
      });
    }
    setSlickImages(imagesArr);
  }, [images]);

  const play = () => slider.slickPlay();
  const pause = () => slider.slickPause();

  return (
    <div className={classes.Images}>
      <div className={classes.sliderContainer}>
        <Slider ref={sl => (slider = sl)} {...sliderSettings}>
          {slickImages && slickImages.length ? slickImages : <div></div>}
        </Slider>
        {/* <div style={{ textAlign: "center" }}>
        <button className="button" onClick={play}>
          Play
        </button>
        <button className="button" onClick={pause}>
          Pause
        </button>
      </div> */}

        <IconButton
          aria-label="pause or play"
          className="play-pause-btn"
          title={playing ? `Pause slide show` : `Play slide show`}
          onClick={() => {
            playing ? pause() : play();
            setPlaying(oldPlaying => !oldPlaying);
          }}
        >
          {playing ? (
            <PauseIcon fontSize="large" />
          ) : (
            <PlayIcon fontSize="large" />
          )}
        </IconButton>
      </div>
    </div>
  );
};

export default Images;
