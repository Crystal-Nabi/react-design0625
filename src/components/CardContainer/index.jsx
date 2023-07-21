import React from "react";
import { Box } from "@mui/material";

import Card from "../Controls/card";
import {
  UserPlusIcon,
  UserBoltIcon,
  UserCheckIcon,
} from "../../assets/images/Icons";

import "./styles.scss";

const CardContainer = () => {
  return (
    <Box className="card-container">
      <Card
        Icon={<UserPlusIcon width="70px" height="70px" />}
        Title="New Users"
        Number="127"
      ></Card>
      <Card
        Icon={<UserBoltIcon width="70px" height="70px" />}
        Title="New Editors"
        Number="127"
      ></Card>
      <Card
        Icon={<UserCheckIcon width="70px" height="70px" />}
        Title="New Subscribers"
        Number="127"
      ></Card>
    </Box>
  );
};

export default CardContainer;
