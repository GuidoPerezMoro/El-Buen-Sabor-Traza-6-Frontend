import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  useMediaQuery,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";

const Navbar: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const isMobile = useMediaQuery("(max-width:600px)");

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setDrawerOpen(open);
    };

  const drawer = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem button component={Link} to="/productos">
          <ListItemText primary="Productos" />
        </ListItem>
        <ListItem button component={Link} to="/promociones">
          <ListItemText primary="Promociones" />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <AppBar position="sticky" style={{ backgroundColor: "#E66200" }}>
      <Toolbar>
        <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
          <Link
            to="/productos"
            style={{
              textDecoration: "none",
              color: "inherit",
              display: "flex",
              alignItems: "center",
              gap: isMobile ? "0px" : "10px",
            }}
          >
            <FastfoodIcon style={{ width: "40px" }} />
            <Typography variant="h4" sx={{ whiteSpace: "nowrap" }}>
              Buen Sabor
            </Typography>
          </Link>
        </Box>
        {isMobile ? (
          <>
            <IconButton color="inherit" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={toggleDrawer(false)}
            >
              {drawer}
            </Drawer>
          </>
        ) : (
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Link
              to="/productos"
              style={{
                textDecoration: "none",
                color: "inherit",
                marginRight: "20px",
              }}
            >
              <Typography variant="h6">Productos</Typography>
            </Link>
            <Link
              to="/promociones"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Typography variant="h6">Promociones</Typography>
            </Link>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
