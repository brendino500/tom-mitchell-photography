import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const Title = () => {
  const classes = useStyles();

  return (
    <div className={classes.main}>
      <Typography className={classes.title}>Tom Mitchell</Typography>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  title: {
    fontFamily: "Gentium Book Basic",
    fontSize: 45,
  },
}));

export default Title;
