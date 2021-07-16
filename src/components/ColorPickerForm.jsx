import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { ChromePicker } from 'react-color';

const ColorPickerForm = ({ isPaletteFull, addNewColor }) => {
  const [currentColor, setCurrentColor] = useState('teal');
  const [newColorName, setNewColorName] = useState('');

  //TODO! Make the validaiton form to work
  // useEffect(() => {
  //   ValidatorForm.addValidationRule('isColorNameUnique', value => {
  //     colors.every(({ name }) => name.toLowerCase() === value.toLowerCase());
  //   });
  //   ValidatorForm.addValidationRule('isColorUnique', value => {
  //     colors.every(({ color }) => color !== currentColor);
  //   });
  // }, []);
  //TODO! Make the validaiton form to work

  const updateColorHandler = newColor => {
    setCurrentColor(newColor.hex);
  };

  const colorChangeNameHandler = event => {
    setNewColorName(event.target.value);
  };

  const handleSubmit = () => {
    const newColor = { color: currentColor, name: newColorName };
    addNewColor(newColor);
    setNewColorName('');
  };

  return (
    <div>
      <ChromePicker
        color={currentColor}
        onChangeComplete={updateColorHandler}
      />
      <ValidatorForm onSubmit={handleSubmit}>
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
    </div>
  );
};

export default ColorPickerForm;
