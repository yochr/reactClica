import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
// import NewForm from './newForm';

export default function FormAddService({setIsClicked}) {

    const handleClose = () => {
      setIsClicked(false);
  };

  return (
    <React.Fragment>
      <Dialog
        open={true}
        onClose={handleClose}
      >
        <DialogTitle>
            {/* <NewForm/> */}
            טופס
        </DialogTitle>

        <DialogActions>
          <Button onClick={handleClose}>סגור</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}