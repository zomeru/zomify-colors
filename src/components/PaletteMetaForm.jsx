import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

const PaletteMetaForm = ({ handleSubmit }) => {
  const [open, setOpen] = useState(false);
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
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby='form-dialog-title'
    >
      <DialogTitle id='form-dialog-title'>Choose a Palette Name</DialogTitle>
      <ValidatorForm onSubmit={() => handleSubmit(newPaletteName)}>
        <DialogContent>
          <DialogContentText>
            Please enter a name for your new Palette.
          </DialogContentText>

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
          <Button onClick={handleClose} color='primary'>
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
