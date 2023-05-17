import * as React from "react";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import {
  Link,
  LinkButton,
  Logo,
  NavlinkArrow,
  ParentLink,
  SidebarContainer,
} from "./style";
import { sidebar } from "../../utils/sidebar";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";

import AccordionSummary from "@mui/material/AccordionSummary";
import { Accordion, AccordionDetails, Button, Tooltip } from "@mui/material";
import { useLocation } from "react-router-dom";

const drawerWidth = 280;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  // alignItems: "center",
  // justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer)(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const location = useLocation();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <CssBaseline />
        <Toolbar>
          <Logo onClick={handleDrawerOpen} open={open}>
            CRM
          </Logo>
          <Typography variant="h6" noWrap component="div">
            Mini variant drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <Logo title="true" onClick={handleDrawerClose}>
            Webbrain CRM
          </Logo>
        </DrawerHeader>
        <Divider />

        <SidebarContainer>
          {sidebar.map(({ id, path, title, icon, hidden, children }) => {
            console.log(location.pathname.includes(path), "test");

            return (
              !hidden &&
              (children?.length ? (
                <Accordion
                  disabled={!open}
                  key={path}
                  expanded={expanded === path}
                  onChange={handleChange(path)}
                >
                  <AccordionSummary
                    expandIcon={open && <NavlinkArrow />}
                    id={path}
                  >
                    <ParentLink
                      className={location.pathname.includes(path) && "active"}
                    >
                      {icon}{" "}
                      {open ? (
                        title
                      ) : (
                        <Tooltip
                          arrow
                          title={
                            <React.Fragment>
                              {children.map((child) => {
                                return (
                                  <Typography key={child.path}>
                                    <LinkButton key={child.id || child.path}>
                                      <Link to={`${path}${child.path}`}>
                                        {child.title}
                                      </Link>
                                    </LinkButton>
                                  </Typography>
                                );
                              })}
                            </React.Fragment>
                          }
                          placement="right"
                        >
                          <Button>{title}</Button>
                        </Tooltip>
                      )}
                    </ParentLink>
                  </AccordionSummary>

                  <AccordionDetails>
                    {children.map((child) => {
                      return (
                        <Typography key={child.path}>
                          <LinkButton key={child.id || child.path}>
                            <Link to={`${path}${child.path}`}>
                              {child.title}
                            </Link>
                          </LinkButton>
                        </Typography>
                      );
                    })}
                  </AccordionDetails>
                </Accordion>
              ) : (
                <LinkButton key={id || path}>
                  <Link to={path}>
                    {icon} {title}
                    {children?.length ? <NavlinkArrow /> : null}
                  </Link>
                </LinkButton>
              ))
            );
          })}
        </SidebarContainer>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Typography paragraph>Body Contnt</Typography>
      </Box>
    </Box>
  );
}
