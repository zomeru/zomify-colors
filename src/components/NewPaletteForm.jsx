import React, { useState } from 'react';
import clsx from 'clsx';
import PaletteFormNav from './PaletteFormNav';
import ColorPickerForm from './ColorPickerForm';
import DraggableColorList from './DraggableColorList';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Button from '@material-ui/core/Button';
import { arrayMove } from 'react-sortable-hoc';
import seedColors from '../configs/seedColors';
import useStyles from '../styles/NewPaletteFormStyles';

const NewPaletteForm = ({ palettes, savePalette, history }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(true);
  const [colors, setColors] = useState(seedColors[0].colors);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const addNewColor = newColor => {
    setColors([...colors, newColor]);
  };

  const clearColors = () => {
    setColors([]);
  };

  const addRandomColor = () => {
    const allColors = palettes.map(p => p.colors).flat();
    console.log(allColors);
    let rand = Math.floor(Math.random() * allColors.length);
    const randomColor = allColors[rand];
    setColors([...colors, randomColor]);
  };

  const handleSubmit = newPalette => {
    newPalette.id = newPalette.paletteName.toLowerCase().replace(/ /g, '-');
    newPalette.colors = colors;
    savePalette(newPalette);
    history.push('/');
  };

  const removeColor = colorName => {
    setColors(colors.filter(color => color.name !== colorName));
  };

  const onSortEnd = ({ oldIndex, newIndex }) => {
    setColors(arrayMove(colors, oldIndex, newIndex));
  };

  const isPaletteFull = colors.length >= 20;
  const isPaletteCleared = colors.length <= 0;

  return (
    <div className={classes.root}>
      <PaletteFormNav
        open={open}
        palettes={palettes}
        handleSubmit={handleSubmit}
        handleDrawerOpen={handleDrawerOpen}
      />
      <Drawer
        className={classes.drawer}
        variant='persistent'
        anchor='left'
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <div className={classes.container}>
          <Typography
            variant='h4'
            className={classes.pickerHeader}
            gutterBottom
          >
            Design Your Palette
          </Typography>
          <div className={classes.buttons}>
            <Button
              variant='contained'
              color='secondary'
              onClick={clearColors}
              disabled={isPaletteCleared}
              className={classes.button}
            >
              {isPaletteCleared ? 'Palette Cleared' : 'Clear Palette'}
            </Button>
            <Button
              variant='contained'
              color='primary'
              onClick={addRandomColor}
              disabled={isPaletteFull}
              className={classes.button}
            >
              {isPaletteFull ? 'Palette Full' : 'Random Color'}
            </Button>
          </div>
          <ColorPickerForm
            isPaletteFull={isPaletteFull}
            addNewColor={addNewColor}
          />
        </div>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        <DraggableColorList
          colors={colors}
          removeColor={removeColor}
          axis='xy'
          onSortEnd={onSortEnd}
          distance={20}
        />
      </main>
    </div>
  );
};

export default NewPaletteForm;
