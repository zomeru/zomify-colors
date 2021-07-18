import React, { useState } from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';
import useStyles from '../styles/PaletteStyles';

const Palette = ({ palette }) => {
  const { colors, paletteName, emoji, id } = palette;
  const classes = useStyles();
  const [level, setLevel] = useState(500);
  const [format, setFormat] = useState('hex');

  const changeLevel = newLevel => {
    setLevel(newLevel);
  };

  const changeFormat = val => {
    setFormat(val);
  };

  const colorBoxes = colors[level].map(color => (
    <ColorBox
      background={color[format]}
      name={color.name}
      key={color.id}
      moreUrl={`/palette/${id}/${color.id}`}
      showingFullPalette
    />
  ));

  return (
    <div className={classes.Palette}>
      <Navbar
        level={level}
        changeLevel={changeLevel}
        handleChange={changeFormat}
        showingAllColors
      />
      <div className={classes.colors}>{colorBoxes}</div>
      <PaletteFooter paletteName={paletteName} emoji={emoji} />
    </div>
  );
};

export default Palette;
