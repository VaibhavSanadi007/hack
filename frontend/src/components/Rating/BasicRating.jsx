import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

export default function BasicRating() {
  const [value, setValue] = React.useState(3);

  return (
    <Box className='flex justify-center items-center ' sx={{ '& > legend': { mt: 1} }}>
      <Rating
      size='small'
        name="simple-controlled"
        value={value}
        className='cursor-pointer '
        onChange={(event, newValue) => {
          setValue(newValue);
        }}

        sx={{
      '& .MuiRating-iconFilled': {
        color: 'darkcyan',     
      },
      '& .MuiRating-iconHover': {
        color: 'skyblue',      
      },
      '& .MuiRating-iconEmpty': {
        color: 'gray',  
      },
     
    }}

      />
    </Box>
  );
}
