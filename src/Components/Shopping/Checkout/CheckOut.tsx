import { useState } from 'react';
import { Modal, Box, Typography, Button, Stack } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import { useNavigate } from "react-router-dom";

import {
  BUTTON_TEXT,
  modalStyle,
  generateOrderId,
} from '../../Utility/Utility';

const CheckOut = () => {
  const [open, setOpen] = useState(false);
  const [orderId, setOrderId] = useState('');

  const handleOpen = () => {
    const newOrderId = generateOrderId();
    setOrderId(newOrderId);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  return (
    <div className="flex justify-center mt-10">
      <Button
        variant="contained"
        sx={{
          backgroundColor: 'white',
          color: 'black',
          '&:hover': {
            backgroundColor: '#dcf245',
          },
        }}
        onClick={handleOpen}
      >
        {BUTTON_TEXT.viewCheckout}
      </Button>

      <Modal open={open} onClose={handleClose}>
        <Box sx={modalStyle}>
          <IconButton
            sx={{ position: 'absolute', top: 8, right: 8 }}
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>

          <Typography variant="h5" fontWeight="bold" gutterBottom>
            {BUTTON_TEXT.checkoutSummary}
          </Typography>

          <Typography variant="body1" sx={{ mt: 1 }}>
            <strong>{BUTTON_TEXT.orderIdLabel}:</strong> {orderId}
          </Typography>
          <Typography>{BUTTON_TEXT.orderConfirmed}</Typography>

          <Stack direction="row" spacing={2} mt={3} justifyContent="center">
            <Button
              variant="contained"
              onClick={handleClose}
              sx={{
                backgroundColor: '#dcf245',
                color: '#121212',
                '&:hover': { backgroundColor: '#c8e434' },
              }}
            >
              {BUTTON_TEXT.returnHome}
            </Button>

            <Button
              variant="contained"
              sx={{
                backgroundColor: '#dcf245',
                color: '#121212',
                '&:hover': { backgroundColor: '#c8e434' },
              }}
            >
              {BUTTON_TEXT.goShopping}
            </Button>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
};

export default CheckOut;
