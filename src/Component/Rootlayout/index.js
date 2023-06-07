import React from 'react'
import "./style.css"
import Grid from '@mui/material/Grid';
import Sidebar from '../Sidebar/idex';
import { Outlet } from 'react-router-dom';

const Rootlayout = () => {
  return (
    <>
      <Grid container >
        <Grid item xs={1}>
          <Sidebar/>
        </Grid>
        <Grid item xs={11}>
          <Outlet/>
        </Grid>
      </Grid>

    </>
  )
}

export default Rootlayout
