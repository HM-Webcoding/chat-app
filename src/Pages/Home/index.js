import React from "react";
import Grid from '@mui/material/Grid';
import GroupList from "../../Component/GroupList";
import FrienRequest from "../../Component/FriendRequest";
import Friends from "../../Component/Friends";
import MyGroup from "../../Component/MyGroup";
import AllUser from "../../Component/AllUser";
import BlockUser from "../../Component/BlockUser";

const HomePage = () => {
  return (
    <>
    <Grid container spacing={2}>
        <Grid item xs={4}>
         <GroupList/>
         <FrienRequest/>
        </Grid>
        <Grid item xs={4}>
         <Friends/>
         <MyGroup/>
        </Grid>
        <Grid item xs={4}>
         <AllUser/>
         <BlockUser/>
        </Grid>
      </Grid>
    </>
  );
};

export default HomePage;
