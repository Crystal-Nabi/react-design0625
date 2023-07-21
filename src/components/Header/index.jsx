import React from "react";
//import Mui component
import { Paper, Box, Button, Avatar, IconButton } from "@mui/material";
//import custom component
import { ThemeIcon, AlarmIcon } from "../../assets/images/Icons";
import AvatarImg from "../../assets/images/avatar/1.jpg";
import SideBar from "../SideBar";
import "./styles.scss";

const Header = ({ open, setOpen }) => {
  return (
    <Paper variant="outlined" className="header bg-colour">
      <Box className="header-item">
        <SideBar open={open} setOpen={setOpen}></SideBar>
        <Box className="item">
          <Button
            variant="outlined"
            style={{
              fontSize: "10px",
              textTransform: "none",
            }}
            className="noti-button"
          >
            Send Notification
          </Button>
          <Box className="icon">
            <IconButton aria-label="theme">
              <ThemeIcon style={{ width: "30px", height: "30px" }} />
            </IconButton>
            <IconButton aria-label="alarm">
              <AlarmIcon style={{ width: "30px", height: "30px" }} />
            </IconButton>
          </Box>
          <Button
            variant="contained"
            style={{
              fontSize: "10px",
              textTransform: "none",
            }}
            className="panel-button"
          >
            Admin Panel
          </Button>
          <Avatar alt="User" src={AvatarImg}></Avatar>
        </Box>
      </Box>
    </Paper>
  );
};

export default Header;
