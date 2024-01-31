import React, { useState } from 'react';
import Button from '@mui/material/Button';
import EditBusinessDetails from './EditBusinessDetails';

function OpenDialogButton() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  
  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        לעריכה
      </Button>
      {open && <EditBusinessDetails setOpen={setOpen}/>}
    </div>
  );
}

export default OpenDialogButton;
