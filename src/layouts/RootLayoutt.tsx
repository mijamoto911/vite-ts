import { AppBar, Button, Container, Toolbar, Typography } from "@mui/material";

import { Link, Outlet } from "react-router-dom";
import { Footer } from "../components/Footer/Footer";
import classnames from "./RootLayout.module.css";

const HEADER_SX = {
  flexGrow: 1,
};

const RootLayout = () => {
  return (
    <div className={classnames.layout}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={HEADER_SX}>
            React-Router + Material UI
          </Typography>
          <Button component={Link} to="/" color="inherit">
            Photos
          </Button>
          <Button component={Link} to="posts" color="inherit">
            Posts
          </Button>
          <Button component={Link} to="comments" color="inherit">
            Comments
          </Button>
          <Button component={Link} to="users" color="inherit">
            Users
          </Button>
        </Toolbar>
      </AppBar>
      <main className={classnames.main}>
        <Container>
          <Outlet />
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export { RootLayout };
