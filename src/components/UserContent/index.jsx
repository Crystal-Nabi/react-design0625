import React from "react";
import { Box } from "@mui/material";

import {
  GenderFemailIcon,
  ColourUsersIcon,
  GenderMaleIcon,
} from "../../assets/images/Icons";
import UserProfile from "../Controls/profile";

import "./styles.scss";

const UserContent = () => {
  return (
    <Box className="user-content">
      <ColourUsersIcon width="50px" height="50px" className="users-icon" />
      <UserProfile
        Icon={<GenderFemailIcon width="30px" height="30px" />}
        country="Ankara"
      ></UserProfile>
      <UserProfile
        Icon={<GenderMaleIcon width="30px" height="30px" />}
        country="istanbul"
      ></UserProfile>
      <UserProfile
        Icon={<GenderFemailIcon width="30px" height="30px" />}
        country="izmir"
      ></UserProfile>
      <UserProfile
        Icon={<GenderMaleIcon width="30px" height="30px" />}
        country="Bursa"
      ></UserProfile>
    </Box>
  );
};

export default UserContent;
