import * as React from "react";
import { Card, Box, Typography } from "@mui/material";
import { ArrorUpIcon } from "../../assets/images/Icons";

import "./styles.scss";

const BasicCard = ({ Icon, Title, Number }) => {
  return (
    <Card sx={{ width: 300 }} className="bg-colour card d-flex">
      {Icon}
      <Typography color="white" fontSize="1.5rem">
        {Title}
      </Typography>
      <Typography color="white" fontSize="1.5rem">
        {Number}
      </Typography>
      <Box className="bottom-text">
        <Typography color="#5BDEAA" fontSize="1.5rem">
          %22
        </Typography>
        <ArrorUpIcon width="1.5em" />
        <Typography color="white">last day</Typography>
      </Box>
    </Card>
  );
};

export default BasicCard;
