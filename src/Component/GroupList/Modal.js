import React from 'react'
import Box from '@mui/material/Box';
import { IoAddCircleOutline } from "react-icons/io5";
import Modal from '@mui/material/Modal';
import CustomButton from '../CustomButton';
import "./style.css";
import TextField from '@mui/material/TextField';

const GroupModal = ({setGroupName, setGroupTag, handleCreate, setOpen, handleOpen, open}) => {
    const handleClose = () => setOpen(false);
  return (
    <>
    <CustomButton variant="contained" onClick={handleOpen} ><IoAddCircleOutline /> Create </CustomButton>
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className="modal">
        <h2>Create new group</h2>
        <TextField 
        id="outlined-basic" 
        label="Group Name" 
        variant="outlined" 
        fullWidth 
        margin='normal'
        onChange={(e)=> setGroupName(e.target.value)}/>

        <TextField 
        id="outlined-basic" 
        label="Group Tag" 
        variant="outlined" 
        fullWidth margin='normal' 
        onChange={(e)=> setGroupTag(e.target.value)}/>
        <CustomButton variant="contained" onClick={handleCreate} >Create </CustomButton>
      </Box>
    </Modal>
  </>
  )
}

export default GroupModal