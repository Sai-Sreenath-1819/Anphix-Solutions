import {
  AppBar,
  Toolbar,
  Button,
  Box,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Container,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useState, useEffect } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import Logo from "../assets/Anphix_Logo.png";

import { NAV_ITEMS } from "../constants/navigation";
import { useNavigation } from "../hooks/useNavigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { handleScrollNav, isActive, highlightContact } = useNavigation();
  const navigate = useNavigate();

  const FILTERED_NAV_ITEMS = NAV_ITEMS.slice(0, -1);

  // Background effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          top: 12,
          left: 0,
          right: 0,
          width: "95%",
          mx: "auto",
          borderRadius: "20px",
          bgcolor: scrolled ? "primary.main" : "primary.dark",
          color: "white",
          boxShadow: "0px 8px 24px rgba(0,0,0,0.25)",
          backdropFilter: "blur(8px)",
          transition: "all 0.4s ease",
        }}
      >
        <Container>
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            {/* Logo */}
            <Box
  onClick={() => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" }); // ✅ Smooth scroll to top
    } else {
      navigate("/");
    }
  }}
  sx={{
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
  }}
>
              <img
                src={Logo}
                alt="Anphix Logo"
                style={{ height: 60, marginRight: 10 }}
              />
              <Typography variant="h6" fontWeight="bold">
                Anphix Solutions
              </Typography>
            </Box>

            {/* Desktop Menu */}
            <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
              {FILTERED_NAV_ITEMS.map((item) =>
                item.type === "scroll" ? (
                  <Button
                    key={item.label}
                    color="inherit"
                    onClick={() => handleScrollNav(item.to)}
                    sx={{
                      color: isActive(item) ? "secondary.main" : "white",
                      "&:hover": { color: "secondary.light" },
                    }}
                  >
                    {item.label}
                  </Button>
                ) : (
                  <RouterLink
                    key={item.label}
                    to={item.to}
                    style={{ textDecoration: "none" }}
                  >
                    <Button
                      color="inherit"
                      sx={{
                        color: isActive(item) ? "secondary.main" : "white",
                        "&:hover": { color: "secondary.light" },
                      }}
                    >
                      {item.label}
                    </Button>
                  </RouterLink>
                )
              )}

              {/* Contact Button */}
              <Button
                variant="contained"
                color="secondary"
                onClick={() => handleScrollNav("contact")}
                className={highlightContact ? "pulse" : ""}
              >
                Contact Us
              </Button>
            </Box>

            {/* Mobile Menu */}
            <Box sx={{ display: { xs: "block", md: "none" } }}>
              <IconButton
                onClick={() => setMobileOpen(true)}
                sx={{ color: "white" }}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        PaperProps={{
          sx: { bgcolor: "primary.main", color: "white", width: "70%" },
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "flex-end", p: 2 }}>
          <IconButton
            onClick={() => setMobileOpen(false)}
            sx={{ color: "white" }}
          >
            <CloseIcon />
          </IconButton>
        </Box>

        <List>
          {FILTERED_NAV_ITEMS.map((item) => (
            <ListItem key={item.label} sx={{ textAlign: "center" }}>
              {item.type === "scroll" ? (
                <Button
                  color="inherit"
                  fullWidth
                  onClick={() => {
                    handleScrollNav(item.to);
                    setMobileOpen(false);
                  }}
                  sx={{
                    color: isActive(item) ? "secondary.main" : "white",
                    "&:hover": { color: "secondary.light" },
                  }}
                >
                  <ListItemText primary={item.label} />
                </Button>
              ) : (
                <RouterLink
                  to={item.to}
                  style={{ textDecoration: "none", width: "100%" }}
                  onClick={() => setMobileOpen(false)}
                >
                  <Button
                    color="inherit"
                    fullWidth
                    sx={{
                      color: isActive(item) ? "secondary.main" : "white",
                      "&:hover": { color: "secondary.light" },
                    }}
                  >
                    <ListItemText primary={item.label} />
                  </Button>
                </RouterLink>
              )}
            </ListItem>
          ))}
        </List>

        {/* Mobile Contact */}
        <Box textAlign="center" sx={{ my: 2 }}>
          <Button
            variant="contained"
            color="secondary"
            fullWidth
            onClick={() => {
              handleScrollNav("contact");
              setMobileOpen(false);
            }}
          >
            Contact Us
          </Button>
        </Box>
      </Drawer>
    </>
  );
}
