import React from "react";
//import Mui component
import { Box, Paper, Grid } from "@mui/material";
//import customize component
import Header from "../../components/Header";
import CardContainer from "../../components/CardContainer";
import UserContent from "../../components/UserContent";
import RightSideBar from "../../components/RightSideBar";

import "./styles.scss";

const MainPage = () => {
  const [open, setOpen] = React.useState(true);

  return (
    <Box>
      <Box className="main-container">
        <Grid md={{ flexGrow: 1 }} container spacing={2}>
          <Grid
            item
            xs={12}
            lg={12}
            md={12}
            sm={12}
            style={{
              position: "sticky",
              top: "-17px",
              zIndex: "1",
            }}
          >
            <Header open={open} setOpen={setOpen}></Header>
          </Grid>
          <Grid item xs={0} lg={0.6} md={0} sm={0} className="blank-grid" />
          <Grid item xs={12} lg={8.4} md={12} sm={12}>
            <Box className="content">
              <CardContainer />
              <Paper variant="outlined" className="user-container bg-colour">
                <UserContent></UserContent>
              </Paper>
            </Box>
          </Grid>
          <Grid item xs={12} lg={3} md={12} sm={12}>
            <RightSideBar></RightSideBar>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default MainPage;
