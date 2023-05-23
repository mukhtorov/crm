import * as React from "react";
import { styled, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
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
import ClickAwayListener from "@mui/material/ClickAwayListener";

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
  padding: theme.spacing(0, 1),
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
  const [open, setOpen] = React.useState(false);
  const [tooltipOpen, setTooltipOpen] = React.useState("");
  const [expanded, setExpanded] = React.useState<string | false>(false);
  const location = useLocation();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setTooltipOpen("");
    setOpen(false);
  };

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  const handleTooltipClose = () => {
    setTooltipOpen("");
  };
  const handleTooltipOpen = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    title: any
  ) => {
    if (!open) {
      e.stopPropagation();
      setTooltipOpen(title);
    }
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
            return (
              !hidden &&
              (children?.length ? (
                <Accordion
                  key={path}
                  expanded={open && expanded === path}
                  onChange={handleChange(path)}
                >
                  <AccordionSummary
                    expandIcon={open && <NavlinkArrow />}
                    id={path}
                    style={{
                      minWidth: "fit-content",
                    }}
                  >
                    <ParentLink
                      className={location.pathname.includes(path) && "active"}
                    >
                      <ClickAwayListener onClickAway={handleTooltipClose}>
                        <div>
                          <Tooltip
                            arrow
                            onClose={handleTooltipClose}
                            open={tooltipOpen === title}
                            disableFocusListener
                            disableHoverListener
                            title={
                              <React.Fragment>
                                {children.map((child) => {
                                  return (
                                    <Typography key={child.path}>
                                      <LinkButton
                                        component={"span"}
                                        key={child.id || child.path}
                                      >
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
                            <div
                              onClick={(e) => handleTooltipOpen(e, title)}
                              style={{
                                display: "flex",
                                alignItems: "center",
                              }}
                            >
                              {icon} {title}
                            </div>
                          </Tooltip>
                        </div>
                      </ClickAwayListener>
                    </ParentLink>
                  </AccordionSummary>

                  <AccordionDetails>
                    {children.map((child) => {
                      return (
                        <LinkButton key={child.id || child.path}>
                          <Link to={`${path}${child.path}`}>{child.title}</Link>
                        </LinkButton>
                      );
                    })}
                  </AccordionDetails>
                </Accordion>
              ) : (
                <LinkButton key={id || path}>
                  <Link to={path}>
                    {icon} {title}
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
