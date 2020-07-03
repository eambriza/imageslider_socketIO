import React from 'react';
import { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { makeStyles, Button, Typography, Paper } from '@material-ui/core';
import socketIOClient from 'socket.io-client';
const ENDPOINT = 'http://127.0.0.1:4002';

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
    margin: '30px',
  },
  legend: {
    textAlign: 'center',
  },
  description: {
    margin: '15px',
  },
  carousel: {
    textAlign: 'center',
    width: '40%',
    height: 'auto',
    display: 'inline-block',
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
      width: '70%',
    },
  },
  /* Make the image responsive */
  carouselImg: {
    width: '100%',
    height: 'auto',
  },

  /* Style the button and place it on the sides of the container/image and make them invisible*/
  carouselImgBtnN: {
    width: '50%',
    height: '100%',
    position: 'absolute',
    top: '0%',
    backgroundColor: 'transparent',
    border: 'none',
    backgroundRepeat: 'no-repeat',
    outline: 'none',
    left: '50%',
  },
  carouselImgBtnP: {
    width: '50%',
    height: '100%',
    position: 'absolute',
    top: '0%',
    backgroundColor: 'transparent',
    border: 'none',
    backgroundRepeat: 'no-repeat',
    outline: 'none',
    right: '50%',
  },
  /* Style the next and prev button*/
  button: {
    borderRadius: '10px',
    width: '150',
    height: '50',
    margin: '15px',
  },
}));

export default function CAROUSEL(props) {
  const classes = useStyles(props);
  const [slides, setSlides] = useState([]);
  const [slideNames, setSlideNames] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [tooltipP, setTooltipP] = useState('');
  const [tooltipN, setTooltipN] = useState('');

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.on('FromAPI', (response) => {
      const slideName = response.map((u) => u.description);
      const slide = response.map((u) => u.url);
      setSlideNames(slideName);
      setSlides(slide);
      setTooltipP(slideName[slideName.length - 1]);
      setTooltipN(slideName[0]);
      console.log(slideName);
    });
  }, []);
  //Next handler
  const next = () => {
    setCurrentSlide(currentSlide + 1);
  };

  //Prev handler
  const prev = () => {
    setCurrentSlide(currentSlide - 1);
  };

  //Update current slide and tooltip content
  const updateCurrentSlide = (index) => {
    if (index === slideNames.length - 1) {
      setTooltipP(`${slideNames[slideNames.length - 2]}`);
      setTooltipN(`${slideNames[0]}`);
    } else if (index === 0) {
      setTooltipP(`${slideNames[slideNames.length - 1]}`);
      setTooltipN(`${slideNames[1]}`);
    } else if (index === currentSlide) {
      setTooltipP(`${slideNames[index - 1]}`);
      setTooltipN(`${slideNames[index + 1]}`);
    }
    //Update current slide to make sure infinite cicle runs
    if (currentSlide !== index) {
      setCurrentSlide(index);
    }
  };

  return (
    <div className={classes.root}>
      <div className={classes.carousel}>
        <Paper elevation={9}>
          <Carousel
            infiniteLoop
            showThumbs={false}
            showStatus={false}
            showArrows={false}
            showIndicators={false}
            selectedItem={currentSlide}
            onChange={updateCurrentSlide}
            {...props}
          >
            {slides.map((index) => (
              <div key={index}>
                <img className={classes.carouselImg} src={index} alt=" " />
              </div>
            ))}
          </Carousel>
          <button
            className={classes.carouselImgBtnP}
            onClick={prev}
            data-toggle="tooltip"
            data-placement="top"
            title={tooltipP}
          ></button>
          <button
            className={classes.carouselImgBtnN}
            onClick={next}
            data-toggle="tooltip"
            data-placement="top"
            title={tooltipN}
          ></button>
        </Paper>
      </div>
      <div className={classes.legend}>
        <Typography className={classes.description} variant="h6">
          {slideNames[currentSlide]}
        </Typography>
        <Button className={classes.button} variant="outlined" onClick={prev}>
          Prev
        </Button>
        <Button className={classes.button} variant="outlined" onClick={next}>
          Next
        </Button>
      </div>
    </div>
  );
}
