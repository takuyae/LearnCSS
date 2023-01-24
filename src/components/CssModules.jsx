import classes from "./CssModules.module.scss";

export const CssModules = () => {
  return (
    <div className={classes.container}>
      <p className={classes.title}> - CSS Style - </p>
      <button className={classes.buttonStyle}> Fight! </button>
    </div>
  );
};
