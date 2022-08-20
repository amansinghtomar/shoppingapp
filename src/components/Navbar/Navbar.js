import React from "react";
import { Link } from "react-router-dom";
import Typography from "../Typography/Typography";
import "./Navbar.css";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Items from "../MenuItem/Items";
import ListItemIcon from "@mui/material/ListItemIcon";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";

const menuList = [
  {
    name: "Profile",
    iconType: <Avatar />,
  },
  {
    name: "My Account",
    iconType: <Avatar />,
  },
  {
    name: "Add Another account",
    iconType: (
      <ListItemIcon>
        <PersonAdd fontSize="small" />
      </ListItemIcon>
    ),
  },
  {
    name: "Settings",
    iconType: (
      <ListItemIcon>
        <Settings fontSize="small" />
      </ListItemIcon>
    ),
  },
  {
    name: "Logout",
    iconType: (
      <ListItemIcon>
        <Logout fontSize="small" />
      </ListItemIcon>
    ),
  },
];

export default function Navbar({ isAuthenticated = true }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const checkAuthentication = () => {
    return isAuthenticated ? (
      <Tooltip title="Account settings">
        <IconButton
          onClick={(event) => setAnchorEl(event.currentTarget)}
          size="small"
        >
          <Avatar sx={{ width: 30, height: 30 }}>M</Avatar>
        </IconButton>
      </Tooltip>
    ) : (
      <Link to={"login"}>Login</Link>
    );
  };
  return (
    <div className="navbar">
      <Typography variant="h5">My Art Cart</Typography>
      <div className="nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/following">Following</Link>
          </li>
          <li>
            <Link to="cart">Cart</Link>
          </li>
          <li>{checkAuthentication()}</li>
          <Items
            anchorEl={anchorEl}
            open={open}
            handleClose={() => setAnchorEl(null)}
            menuList={menuList}
          />
        </ul>
      </div>
    </div>
  );
}
