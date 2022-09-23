import * as React from "react";
//MUI library
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
//MUI Icons
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
//Custom CSS
import {UserActionIcon} from '../Card/Cardstyles'

function Items({type, menuList }) {
    const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  return (
    <>
      {type === "Account settings" ? 
       <Tooltip title="Account settings">
            <IconButton onClick={(event) => setAnchorEl(event.currentTarget)} size="small">
               <Avatar sx={{ width: 30, height: 30 }}>M</Avatar>
            </IconButton>
        </Tooltip>
        : 
            <UserActionIcon
               onClick={(event) => setAnchorEl(event.currentTarget)}
               color="action"
            />
      }     
       <Menu
      anchorEl={anchorEl}
      id="account-menu"
      open={open}
      onClose={() => setAnchorEl(null)}
      onClick={() => setAnchorEl(null)}
      PaperProps={{
        elevation: 0,
        sx: {
          overflow: "visible",
          filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
          mt: 1.5,
          "& .MuiAvatar-root": {
            width: 32,
            height: 32,
            ml: -0.5,
            mr: 1,
          },
          "&:before": {
            content: '""',
            display: "block",
            position: "absolute",
            top: 0,
            right: 14,
            width: 10,
            height: 10,
            bgcolor: "background.paper",
            transform: "translateY(-50%) rotate(45deg)",
            zIndex: 0,
          },
        },
      }}
      transformOrigin={{ horizontal: "right", vertical: "top" }}
      anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
    >
      {menuList &&
        menuList.map((menuItem, index) => (
          <MenuItem key={index} onClick={menuItem.handleClick}>
            {menuItem.iconType && menuItem.iconType}
            {menuItem.name}
          </MenuItem>
        ))}
    </Menu>
    </>
   
  );
}
export default Items;
