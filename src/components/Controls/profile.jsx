import React from "react";
import { Box, Typography, Avatar } from "@mui/material";
//import custom component
import { UserEditIcon, TrashIcon } from "../../assets/images/Icons";
import AvatarImg from "../../assets/images/avatar/1.jpg";
import "./styles.scss";

const UserProfile = ({ Icon, country }) => {
  return (
    <Box className="user-profile">
      <Box className="d-flex user-name">
        <Typography># 0001</Typography>
        <Avatar src={AvatarImg} className="profile-avatar"></Avatar>
        <Typography>&nbsp;John Doe</Typography>
      </Box>
      <Box className="d-flex user-detail">
        <Typography>&nbsp;johndoe</Typography>
        {Icon}
        <Typography>&nbsp;25 - 34</Typography>
        <Typography>&nbsp;{country}</Typography>
      </Box>
      <Box className="d-flex profile-setting">
        <Typography>15 - 06 - 2023 - 16 : 37</Typography>
        <UserEditIcon />
        <TrashIcon />
      </Box>
    </Box>
  );
};

export default UserProfile;
