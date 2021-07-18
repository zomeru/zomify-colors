import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import 'emoji-mart/css/emoji-mart.css';
import { Picker } from 'emoji-mart';

const PaletteMetaForm = ({ handleSubmit, hideForm }) => {
  const [stage, setStage] = useState('form');
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

  const newPaletteNameChangeHandler = event => {
    setNewPaletteName(event.target.value);
  };

  const showEmojiPicker = () => {
    setStage('emoji');
    console.log('ZOmer');
  };

  const savePalette = emoji => {
    console.log(emoji.native);
    const newPalette = { paletteName: newPaletteName, emoji: emoji.native };
    setStage('');
    handleSubmit(newPalette);
    setStage('');
  };

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  // const handleClose = () => {
  //   setOpen(false);
  // };

  return (
    <div>
      <Dialog open={stage === 'emoji'} onClose={hideForm}>
        <DialogTitle id='form-dialog-title'>Pick a Palette Emoji</DialogTitle>
        <Picker onSelect={savePalette} title='Pick a Palette Emoji' />
      </Dialog>
      <Dialog
        open={stage === 'form'}
        onClose={hideForm}
        aria-labelledby='form-dialog-title'
      >
        <DialogTitle id='form-dialog-title'>Choose a Palette Name</DialogTitle>
        <ValidatorForm onSubmit={showEmojiPicker}>
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
              // validators={['isPaletteNameUnique', 'required']}
              // errorMessages={[
              //   'Please enter a unique Palette name',
              //   'Enter a palette name',
              // ]}
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
    </div>
  );
};

export default PaletteMetaForm;
