/*
Copyright 2019 Google LLC

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    https://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import {
  Drawer,
  AppBar,
  CssBaseline,
  Toolbar,
  List,
  Typography,
  ListItem,
  ListItemText,
  Box,
} from "@mui/material";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";

//Import Pages
import Home from "./pages/Home";
import Products from "./pages/Products";
import Orders from "./pages/Orders";
import OrderDetails from "./pages/OrderDetails";
import NotFound from "./pages/NotFound";

const drawerWidth = 200;

export default function App() {
  return (
    <Box sx={{ display: "flex" }}>
      <Router>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            zIndex: (theme) => theme.zIndex.drawer + 1,
          }}
        >
          <Toolbar>
            <Typography variant="h6" noWrap>
              Fancy Store
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
        >
          <Toolbar />
          <List>
            <ListItem
              component={NavLink}
              exact
              sx={{ color: "rgba(0, 0, 0, 0.54)" }}
              to="/"
            >
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem
              component={NavLink}
              exact
              sx={{ color: "rgba(0, 0, 0, 0.54)" }}
              to="/products"
            >
              <ListItemText primary="Products" />
            </ListItem>
            <ListItem
              component={NavLink}
              sx={{ color: "rgba(0, 0, 0, 0.54)" }}
              to="/orders"
            >
              <ListItemText primary="Orders" />
            </ListItem>
          </List>
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Toolbar />
          <Routes>
            <Route exact="true" path="/" element={<Home />} />
            <Route exact="true" path="/products" element={<Products />} />
            <Route path="/orders/:id" element={<OrderDetails />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Box>
      </Router>
    </Box>
  );
}
