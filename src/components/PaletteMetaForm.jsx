import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import 'emoji-mart/css/emoji-mart.css';
import { Picker } from 'emoji-mart';

const PaletteMetaForm = ({ handleSubmit, hideForm }) => {
  const [open, setOpen] = useState(true);
  const [newPaletteName, setNewPaletteName] = useState('');

  //TODO! Make the validaiton form to work
  // useEffect(() => {
  //   ValidatorForm.addValidationRule('isPaletteNameUnique', value =>
  //     palettes.every(
  //       ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
  //     )
  //   );
  // }, [palettes]);
  //TODO! Make the validaiton form to work

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const newPaletteNameChangeHandler = event => {
    setNewPaletteName(event.target.value);
  };

  return (
    <Dialog open={open} onClose={hideForm} aria-labelledby='form-dialog-title'>
      <DialogTitle id='form-dialog-title'>Choose a Palette Name</DialogTitle>
      <ValidatorForm onSubmit={() => handleSubmit(newPaletteName)}>
        <DialogContent>
          <DialogContentText>
            Please enter a name for your new Palette.
          </DialogContentText>
          <Picker />
          <TextValidator
            label='Palette Name'
            value={newPaletteName}
            name='newPaletteName'
            fullWidth
            //margin='normal'
            onChange={newPaletteNameChangeHandler}
            validators={['isPaletteNameUnique', 'required']}
            errorMessages={[
              'Please enter a unique Palette name',
              'Enter a palette name',
            ]}
          ></TextValidator>
        </DialogContent>
        <DialogActions>
          <Button onClick={hideForm} color='primary'>
            Cancel
          </Button>
          <Button variant='contained' color='primary' type='submit'>
            Save Palette
          </Button>
        </DialogActions>
      </ValidatorForm>
    </Dialog>
  );
};

export default PaletteMetaForm;
