import React from "react";
import { Box } from "@mui/material";

import Card from "../../components/Controls/card";
import {
  TargetArrowIcon,
  ColourBacketIcon,
  CashBankNoteIcon,
} from "../../assets/images/Icons";

import "./styles.scss";

const RightSideBar = () => {
  return (
    <Box className="right-side-bar">
      <Card
        Icon={<TargetArrowIcon width="70px" height="70px" />}
        Title="New Comments"
        Number="127"
      ></Card>
      <Card
        Icon={<ColourBacketIcon width="70px" height="70px" />}
        Title="Daily Sales"
        Number="127"
      ></Card>
      <Card
        Icon={<CashBankNoteIcon width="70px" height="70px" />}
        Title="New Users"
        Number="127"
      ></Card>
    </Box>
  );
};

export default RightSideBar;
