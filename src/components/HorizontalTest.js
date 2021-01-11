import React, { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core/";

import Antonio from "../assets/TM_Antonio.png";
import Isabelle from "../assets/TM_Isabelle.jpg";
import Cami from "../assets/TM_Cami.png";
import Constanze1 from "../assets/TM_Constanze1.jpg";

export default function HorizontalTest() {
  const classes = useStyles();
  const scrollRef = React.createRef();

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      direction: "horizontal",
    });
  });

  return (
    <>
      <div className={classes.main}>
        <Typography className={classes.title}>Tom Mitchell</Typography>
      </div>
      <div data-scroll-container ref={scrollRef}>
        <div className="gallery">
          <figure className="gallery-item">
            <div className="gallery-item-img">
              <img src={Constanze1} alt="model" className={classes.image} />
              <figcaption className="gallery-item-caption">
                <h2
                  className="gallery__item-title"
                  data-scroll
                  data-scroll-speed="1"
                >
                  Constanze
                </h2>
                <span className="gallery__item-number">01</span>
              </figcaption>
            </div>
          </figure>
          <figure className="gallery-item">
            <div className="gallery-item-img">
              <img src={Constanze1} alt="model" className={classes.image} />
              <figcaption className="gallery-item-caption">
                <h2
                  className="gallery__item-title"
                  data-scroll
                  data-scroll-speed="1"
                >
                  Constanze
                </h2>
                <span className="gallery__item-number">01</span>
              </figcaption>
            </div>
          </figure>
          <figure className="gallery-item">
            <div className="gallery-item-img">
              <img src={Constanze1} alt="model" className={classes.image} />
              <figcaption className="gallery-item-caption">
                <h2
                  className="gallery__item-title"
                  data-scroll
                  data-scroll-speed="1"
                >
                  Constanze
                </h2>
                <span className="gallery__item-number">01</span>
              </figcaption>
            </div>
          </figure>
          <figure className="gallery-item">
            <div className="gallery-item-img">
              <img src={Constanze1} alt="model" className={classes.image} />
              <figcaption className="gallery-item-caption">
                <h2
                  className="gallery__item-title"
                  data-scroll
                  data-scroll-speed="1"
                >
                  Constanze
                </h2>
                <span className="gallery__item-number">01</span>
              </figcaption>
            </div>
          </figure>
          <div class="gallery__text">
            <span class="gallery__text-inner" data-scroll data-scroll-speed="3">
              Tom
            </span>
            <span data-scroll data-scroll-speed="1" class="gallery__text-inner">
              Mitchell
            </span>
          </div>
          <figure className="gallery-item">
            <div className="gallery-item-img">
              <img src={Constanze1} alt="model" className={classes.image} />
              <figcaption className="gallery-item-caption">
                <h2
                  className="gallery__item-title"
                  data-scroll
                  data-scroll-speed="1"
                >
                  Constanze
                </h2>
                <span className="gallery__item-number">01</span>
              </figcaption>
            </div>
          </figure>

          <figure className="gallery-item">
            <div className="gallery-item-img">
              <img src={Constanze1} alt="model" className={classes.image} />
              <figcaption className="gallery-item-caption">
                <h2
                  className="gallery__item-title"
                  data-scroll
                  data-scroll-speed="1"
                >
                  Constanze
                </h2>
                <span className="gallery__item-number">01</span>
              </figcaption>
            </div>
          </figure>
        </div>
      </div>
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  image: {
    width: 300,
  },
  title: {
    fontFamily: "Gentium Book Basic",
    fontSize: 45,
  },
  modelName: {
    fontFamily: "Gentium Book Basic",
    fontSize: 30,
  },
}));
