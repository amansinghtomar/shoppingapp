import React from "react";
//MUI Library
import Typography from "../Typography/Typography";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Items from "../MenuItem/Items";
import ListItemIcon from "@mui/material/ListItemIcon";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import "./Navbar.css";
//MUI Icons
import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LoginIcon from "@mui/icons-material/Login";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { NavbarContainer, NavLink, NavList, NavListConatiner, NavUl } from "./NavbarStyles";
import { useNavigate } from "react-router-dom";
//firebase
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";

export default function Navbar({ isAuthenticated }) {
   const router = useNavigate();

   const settingItemList = ["About Us", "Terms and Condition", "Privacy Policy", "Delete Account"];

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
         name: "My Wishlist",
         iconType: (
            <ListItemIcon>
               <FavoriteIcon fontSize="small" />
            </ListItemIcon>
         ),
         handleClick: () => {
            router("/wishlist");
         },
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
         handleClick: () => {
            router("/setting", { state: settingItemList });
         },
      },
      {
         name: "Logout",
         iconType: (
            <ListItemIcon>
               <Logout fontSize="small" />
            </ListItemIcon>
         ),
         handleClick: () => {
            signOut(auth);
         },
      },
   ];

   const [anchorEl, setAnchorEl] = React.useState(null);
   const open = Boolean(anchorEl);

   const checkAuthentication = () => {
      return isAuthenticated ? (
         <Tooltip title="Account settings">
            <IconButton onClick={(event) => setAnchorEl(event.currentTarget)} size="small">
               <Avatar sx={{ width: 30, height: 30 }}>M</Avatar>
            </IconButton>
         </Tooltip>
      ) : (
         <NavLink to={"login"}>
            <LoginIcon />
         </NavLink>
      );
   };
   return (
      <NavbarContainer>
         <Typography variant="h5">My Art Cart</Typography>
         <NavListConatiner className="nav">
            <NavUl>
               <NavList>
                  <NavLink to="/">
                     <HomeIcon />
                  </NavLink>
               </NavList>
               <NavList>
                  <NavLink to="/following">
                     <ExploreIcon />
                  </NavLink>
               </NavList>
               <NavList>
                  <NavLink to="cart">
                     <ShoppingCartIcon />
                  </NavLink>
               </NavList>
               <NavList>{checkAuthentication()}</NavList>
               <Items
                  anchorEl={anchorEl}
                  open={open}
                  handleClose={() => setAnchorEl(null)}
                  menuList={menuList}
               />
            </NavUl>
         </NavListConatiner>
      </NavbarContainer>
   );
}
