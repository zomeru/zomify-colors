import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

const PaletteFormNav = ({
  open,
  palettes,
  handleDrawerOpen,
  handleSubmit,
  classes,
}) => {
  const [newPaletteName, setNewPaletteName] = useState('');

  //TODO! Make the validaiton form to work
  useEffect(() => {
    ValidatorForm.addValidationRule('isPaletteNameUnique', value =>
      palettes.every(
        ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
      )
    );
  }, [palettes]);
  //TODO! Make the validaiton form to work

  const newPaletteNameChangeHandler = event => {
    setNewPaletteName(event.target.value);
  };

  return (
    <div>
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
          <ValidatorForm onSubmit={() => handleSubmit(newPaletteName)}>
            <TextValidator
              label='Palette Name'
              value={newPaletteName}
              name='newPaletteName'
              onChange={newPaletteNameChangeHandler}
              validators={['isPaletteNameUnique', 'required']}
              errorMessages={[
                'Please enter a unique Palette name',
                'Enter a palette name',
              ]}
            ></TextValidator>
            <Button variant='contained' color='primary' type='submit'>
              Save Palette
            </Button>
            <Link to='/'>
              <Button variant='contained' color='secondary'>
                Go back
              </Button>
            </Link>
          </ValidatorForm>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default PaletteFormNav;
