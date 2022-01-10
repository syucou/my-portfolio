import * as React from 'react';
import { pink } from '@mui/material/colors';
import Radio from '@mui/material/Radio';

//今のところ使ってない
export default function ColorRadioButtons() {
  const [selectedValue, setSelectedValue] = React.useState('a');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const controlProps = (item) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: 'color-radio-button-demo',
    inputProps: { 'aria-label': item },
  });

  return (
    <div className="colorRadioButtons">
      <Radio
        {...controlProps('a')}
        sx={{
          color: '#2196f3',
          '&.Mui-checked': {
            color: '#2196f3',
          },
        }}
        />
        <Radio
        {...controlProps('b')}
        sx={{
          color: '#00bfa5',
          '&.Mui-checked': {
            color: '#00bfa5',
          },
        }}
        />
      <Radio
        {...controlProps('c')}
        sx={{
          color: pink[800],
          '&.Mui-checked': {
            color: pink[600],
          },
        }}
      />
    </div>
  );
}
