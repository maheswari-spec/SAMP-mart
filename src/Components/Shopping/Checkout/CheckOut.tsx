import React, { useState } from 'react';
import {Modal,Box,Typography,Button,Stack}from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';

const style={
  position:'absolute',
  top:'50%',
  left:'50%',
  transform:'translate(-50%,-50%)',
  width:400,
  bgcolor:'background.paper',
  borderRadius:4,
  boxShadow:24,
  p:4,
};
const generateOrderId=():string=>{
  return 'ORD-' + Math.floor(100000+Math.random()*900000).toString()
}


const CheckOut = () => {
  const[open,setOpen]=useState(false);
  const [orderId,setOrderId]=useState(' ')
  const handleOpen=()=>{
    const newOrderId=generateOrderId();
    setOrderId(newOrderId);
    setOpen(true)};
  const handleClose=()=>setOpen(false)
  return (
    <div className='flex justify-center mt-10'>
      <Button variant='contained' sx={{backgroundColor:'white',
        color:'black',
        '&:hover':{
          backgroundColor:'#dcf245'
        }
      }} onClick={handleOpen}>
        view CHECKOUT

      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <IconButton sx={{position:'absolute',top:8,right:8}} onClick={handleClose}>
            <CloseIcon/>
          </IconButton>
          <Typography variant='h5' fontWeight='bold' gutterBottom>
            Checkout Summary
          </Typography>
          <p><Typography variant='body1' sx={{mt:1}}> <strong>Order ID:</strong>:{orderId}</Typography>Your order has been confirmed</p>
          <Stack direction='row' spacing={2} mt={3} justifyContent='center'>
          <Button variant='contained' onClick={handleClose} sx={{backgroundColor:'#dcf245',color:'#121212','&:hover':{backgroundColor:'#c8e434'}}}>Return to Home</Button>
          <Button variant='contained' sx={{backgroundColor:'#dcf245',color:'#121212','&:hover':{backgroundColor:'#c8e434'}}}>Go to shopping</Button>
          </Stack>
        </Box>
      </Modal>
    </div>
  )
}

export default CheckOut