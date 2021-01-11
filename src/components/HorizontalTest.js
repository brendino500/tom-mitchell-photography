import React, { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core/";
import Fade from "react-reveal/Fade";

import ImageLayout from "./ImageLayout";
import Title from "./Title";
import Hero from "./Hero";
import ColorTitle from "./ColorTitle";
import Antonio from "../assets/TM_Antonio.png";
import Isabelle from "../assets/TM_Isabelle.jpg";
import Cami from "../assets/TM_Cami.png";
import Constanze1 from "../assets/TM_Constanze1.jpg";
import Cindy from "../assets/TM_Cindy.png";
import Luna from "../assets/TM_Luna.jpg";
import Mame from "../assets/TM_Mame.png";
import Lea from "../assets/TM_Lea.png";
import Ravanshi from "../assets/TM_Ravanshi.png";
import Constanze2 from "../assets/TM_Constanze2.jpg";
import Seb1 from "../assets/TM_Seb1.jpg";

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
      <Title />
      <div data-scroll-container ref={scrollRef}>
        <div className="gallery">
          <Fade right>
            <Hero />
          </Fade>

          <ImageLayout
            name="Constanze"
            imgClassName={classes.image}
            number="01"
            imgSrc={Constanze1}
          />
          <ImageLayout
            name="Cindy"
            imgClassName={classes.image}
            number="02"
            imgSrc={Cindy}
          />

          <ImageLayout
            name="Antonio"
            imgClassName={classes.image}
            number="03"
            imgSrc={Antonio}
          />
          <ImageLayout
            name="Cami"
            imgClassName={classes.image}
            number="04"
            imgSrc={Cami}
          />
          <ImageLayout
            name="Luna"
            imgClassName={classes.image}
            number="05"
            imgSrc={Luna}
          />

          <ImageLayout
            name="Lea"
            imgClassName={classes.image}
            number="06"
            imgSrc={Lea}
          />
          <ImageLayout
            name="Seb"
            imgClassName={classes.image}
            number="07"
            imgSrc={Seb1}
          />
          <ColorTitle />
          <ImageLayout
            name="Isabelle"
            imgClassName={classes.image}
            number="08"
            imgSrc={Isabelle}
          />
          <ImageLayout
            name="Mame"
            imgClassName={classes.image}
            number="09"
            imgSrc={Mame}
          />
          <ImageLayout
            name="Ravanshi"
            imgClassName={classes.image}
            number="10"
            imgSrc={Ravanshi}
          />
          <ImageLayout
            name="Constanze"
            imgClassName={classes.image}
            number="11"
            imgSrc={Constanze2}
          />
        </div>
      </div>
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  image: {
    width: 300,
  },
}));
