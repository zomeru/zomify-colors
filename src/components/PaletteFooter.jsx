import React from 'react';
import useStyles from '../styles/PaletteFooterStyles';

const PaletteFooter = ({ paletteName, emoji }) => {
  const classes = useStyles();

  return (
    <footer className={classes.PaletteFooter}>
      {paletteName}
      <span className={classes.emoji}>{emoji}</span>
    </footer>
  );
};

export default PaletteFooter;
