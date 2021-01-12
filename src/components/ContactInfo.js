import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid, IconButton } from "@material-ui/core";
import LanguageOutlinedIcon from "@material-ui/icons/LanguageOutlined";
import { AiOutlineInstagram } from "react-icons/ai";

const ContactInfo = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.iconTextLayout}>
        <IconButton
          href="http://www.tommitchellphoto.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LanguageOutlinedIcon className={classes.icon} />
        </IconButton>
        <Typography className={classes.text}>tommitchellphoto.com</Typography>
      </div>
      <div className={classes.iconTextLayout}>
        <IconButton
          href="https://www.instagram.com/tommitchellphoto/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiOutlineInstagram className={classes.icon} />
        </IconButton>
        <Typography className={classes.text}>@tommitchellphoto</Typography>
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: "25vh",
    width: 1200,
  },
  iconTextLayout: {
    display: "flex",
    alignItems: "center",
    marginTop: "5vh",
  },
  icon: {
    fontSize: 60,
    color: "#d2d2cf",
  },
  text: {
    fontFamily: "Gentium Book Basic",
    fontSize: 24,
  },
}));

export default ContactInfo;
