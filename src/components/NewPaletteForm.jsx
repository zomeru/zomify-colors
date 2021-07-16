import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Button from '@material-ui/core/Button';
import DraggableColorList from './DraggableColorList';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { ChromePicker } from 'react-color';
import { arrayMove } from 'react-sortable-hoc';

const drawerWidth = 350;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    height: 'calc(100vh - 6vh)',
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

const NewPaletteForm = props => {
  const classes = useStyles();
  //const theme = useTheme();
  const [open, setOpen] = useState(true);
  const [currentColor, setCurrentColor] = useState('teal');
  const [newColorName, setNewColorName] = useState('');
  const [colors, setColors] = useState(props.palettes[0].colors);
  const [newPaletteName, setNewPaletteName] = useState('');

  //TODO! Make the validaiton form to work
  useEffect(() => {
    ValidatorForm.addValidationRule('isColorNameUnique', value => {
      colors.every(({ name }) => name.toLowerCase() === value.toLowerCase());
    });
    ValidatorForm.addValidationRule('isColorUnique', value => {
      colors.every(({ color }) => color !== currentColor);
    });
    ValidatorForm.addValidationRule('isPaletteNameUnique', value => {
      props.palettes.every(
        ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
      );
    });
  }, []);
  //TODO! Make the validaiton form to work

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const updateColorHandler = newColor => {
    setCurrentColor(newColor.hex);
  };

  const addNewColor = () => {
    const newColor = { color: currentColor, name: newColorName };
    setColors([...colors, newColor]);
    setNewColorName('');
  };

  const colorChangeNameHandler = event => {
    setNewColorName(event.target.value);
  };

  const newPaletteNameChangeHandler = event => {
    setNewPaletteName(event.target.value);
  };

  const clearColors = () => {
    setColors([]);
  };

  const addRandomColor = () => {
    //pick random color from existing palettes
    const allColors = props.palettes.map(p => p.colors).flat();
    console.log(allColors);
    let rand = Math.floor(Math.random() * allColors.length);
    const randomColor = allColors[rand];
    console.log(randomColor);
    setColors([...colors, randomColor]);
  };

  const handleSubmit = () => {
    let newName = newPaletteName;
    const newPalette = {
      paletteName: newName,
      id: newName.toLowerCase().replace(/ /g, '-'),
      colors: colors,
    };
    props.savePalette(newPalette);
    props.history.push('/');
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
      <CssBaseline />
      <AppBar
        color='default'
        position='fixed'
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            onClick={handleDrawerOpen}
            edge='start'
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' noWrap>
            Create A Palette
          </Typography>
          <ValidatorForm onSubmit={handleSubmit}>
            <TextValidator
              label='Palette Name'
              value={newPaletteName}
              name='newPaletteName'
              onChange={newPaletteNameChangeHandler}
              validators={['required']}
              errorMessages={['Enter a palette name']}
            />
            <Button variant='contained' color='primary' type='submit'>
              Save Palette
            </Button>
          </ValidatorForm>
        </Toolbar>
      </AppBar>
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
        <Typography variant='h4'>Design Your Palette</Typography>
        <div>
          <Button
            variant='contained'
            color='secondary'
            onClick={clearColors}
            disabled={isPaletteCleared}
          >
            {isPaletteCleared ? 'Palette Cleared' : 'Clear Palette'}
          </Button>
          <Button
            variant='contained'
            color='primary'
            onClick={addRandomColor}
            disabled={isPaletteFull}
          >
            {isPaletteFull ? 'Palette Full' : 'Random Color'}
          </Button>
        </div>
        <ChromePicker
          color={currentColor}
          onChangeComplete={updateColorHandler}
        />
        <ValidatorForm onSubmit={addNewColor}>
          <TextValidator
            value={newColorName}
            name='newColorName'
            onChange={colorChangeNameHandler}
            // validators={['required', 'isColorNameUnique', 'isColorUnique']}
            // errorMessages={[
            //   'field is required',
            //   'Color name already taken',
            //   'Color already taken',
            // ]}
          />
          <Button
            variant='contained'
            type='submit'
            color='primary'
            disabled={isPaletteFull}
            style={{
              backgroundColor: isPaletteFull
                ? 'rgba(0, 0, 0, 0.12)'
                : currentColor,
            }}
          >
            {isPaletteFull ? 'Palette Full' : 'Add Color'}
          </Button>
        </ValidatorForm>
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
        />
      </main>
    </div>
  );
};

export default NewPaletteForm;
