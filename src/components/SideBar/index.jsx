import * as React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import {
  Box,
  Drawer,
  CssBaseline,
  Toolbar,
  List,
  IconButton,
  ListItem,
} from "@mui/material";

import {
  AppIcon,
  UsersIcon,
  ArrorIcon,
  UserBoltIcon,
  WalletIcon,
  BacketIcon,
  LifebuoytIcon,
  UserCodeIcon,
  BellIcon,
  AdvertisementIcon,
  ChatPieIcon,
  AdjustmentIcon,
  LogOutIcon,
} from "../../assets/images/Icons";

import "./styles.scss";

const drawerWidth = 60;

export default function PersistentDrawerLeft({ open, setOpen }) {
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [width, setWidth] = React.useState(window.innerWidth);
  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };
  React.useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  React.useEffect(() => {
    width <= 1200 ? setOpen(false) : setOpen(true);
  }, [width, setOpen]);

  return (
    <Box sx={{ display: "flex" }} className="side-bar">
      <CssBaseline />
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          className="side-bar-open"
          sx={{ mr: 2, ...(open && { display: "none" }) }}
        >
          <MenuIcon sx={{ color: "white" }} />
        </IconButton>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerClose}
          edge="start"
          className="side-bar-close"
          sx={{ mr: 2, ...(!open && { display: "none" }) }}
        >
          <ChevronLeftIcon sx={{ color: "white" }} />
        </IconButton>
      </Toolbar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: "#0D2A53",
            marginTop: "90px",
            marginLeft: "10px",
            height: "650px",
            borderRadius: "5px",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <List>
          <ListItem key="app" className="display-flex">
            <IconButton aria-label="App">
              <AppIcon />
            </IconButton>
          </ListItem>
          <ListItem key="users" className="display-flex">
            <IconButton aria-label="Users">
              <UsersIcon />
            </IconButton>
          </ListItem>
          <ListItem key="arror" className="display-flex">
            <IconButton aria-label="Arror">
              <ArrorIcon />
            </IconButton>
          </ListItem>
          <ListItem key="userbolt" className="display-flex">
            <IconButton aria-label="UserBolt">
              <UserBoltIcon />
            </IconButton>
          </ListItem>
          <ListItem key="wallet" className="display-flex">
            <IconButton aria-label="Wallet">
              <WalletIcon />
            </IconButton>
          </ListItem>
          <ListItem key="backet" className="display-flex">
            <IconButton aria-label="Backet">
              <BacketIcon />
            </IconButton>
          </ListItem>
          <ListItem key="lifebuoy" className="display-flex">
            <IconButton aria-label="Lifebuoy">
              <LifebuoytIcon />
            </IconButton>
          </ListItem>
          <ListItem key="usercode" className="display-flex">
            <IconButton aria-label="usercode">
              <UserCodeIcon />
            </IconButton>
          </ListItem>
          <ListItem key="bell" className="display-flex">
            <IconButton aria-label="Bell">
              <BellIcon />
            </IconButton>
          </ListItem>
          <ListItem key="advertismement" className="display-flex">
            <IconButton aria-label="Advertisement">
              <AdvertisementIcon />
            </IconButton>
          </ListItem>
          <ListItem key="chatpie" className="display-flex">
            <IconButton aria-label="Chatpie">
              <ChatPieIcon />
            </IconButton>
          </ListItem>
          <ListItem key="adjustment" className="display-flex">
            <IconButton aria-label="Adjustment">
              <AdjustmentIcon />
            </IconButton>
          </ListItem>
          <ListItem
            key="logout"
            className="display-flex"
            sx={{ marginTop: "30px" }}
          >
            <IconButton aria-label="Logout">
              <LogOutIcon />
            </IconButton>
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
}
