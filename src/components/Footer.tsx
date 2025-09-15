import {
  Box,
  Container,
  Grid,
  Typography,
  IconButton,
  Stack,
} from "@mui/material";
import Logo from "../assets/Anphix_Logo.png";
import { COMPANY_INFO } from "../constants/companyInfo";
import { NAV_ITEMS } from "../constants/navigation";
import { SERVICES_CONTENT } from "../constants/homePageContent";
import { SOCIAL_LINKS, ICON_MAP } from "../constants/socialLinks";
import { useLocation, useNavigate } from "react-router-dom";

export default function Footer() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (to: string, type: string) => {
    if (type === "link") {
      navigate(to);
    } else {
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          const el = document.getElementById(to);
          if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 300);
      } else {
        const el = document.getElementById(to);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <Box
      component="footer"
      sx={{
        background: "linear-gradient(135deg, #0A192F, #172A45)",
        color: "white",
        pt: 8,
        pb: 4,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          {/* Column 1: Logo */}
          <Grid size={{ xs: 12, md: 3 }}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <img
                src={Logo}
                alt="Anphix Logo"
                style={{ height: 40, marginRight: 10 }}
              />
              <Typography variant="h6" fontWeight="bold">
                {COMPANY_INFO.name}
              </Typography>
            </Box>
            <Stack direction="row" spacing={1}>
              {SOCIAL_LINKS.map((social) => {
                const Icon = ICON_MAP[social.icon];
                return (
                  <IconButton
                    key={social.label}
                    sx={{
                      bgcolor: "rgba(255,255,255,0.08)",
                      "&:hover": { bgcolor: "secondary.main" },
                      color: "white",
                    }}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon />
                  </IconButton>
                );
              })}
            </Stack>
          </Grid>

          {/* Column 2: Quick Links */}
          <Grid size={{ xs: 12, md: 3 }}>
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                borderBottom: "2px solid",
                borderColor: "secondary.main",
                display: "inline-block",
                mb: 2,
              }}
            >
              Quick Links
            </Typography>
            {NAV_ITEMS.map((item) => (
              <Typography
                key={item.label}
                variant="body2"
                sx={{
                  cursor: "pointer",
                  mb: 1,
                  "&:hover": {
                    color: "secondary.main",
                    pl: 0.5,
                    transition: "all 0.2s ease",
                  },
                }}
                onClick={() => handleNavClick(item.to, item.type)}
              >
                {item.label}
              </Typography>
            ))}
          </Grid>

          {/* Column 3: Services */}
          <Grid size={{ xs: 12, md: 3 }}>
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                borderBottom: "2px solid",
                borderColor: "secondary.main",
                display: "inline-block",
                mb: 2,
              }}
            >
              Services
            </Typography>
            {SERVICES_CONTENT.items.slice(0, 4).map((service) => (
              <Typography
                key={service.title}
                variant="body2"
                sx={{ mb: 1, "&:hover": { color: "secondary.main" } }}
              >
                <Box
                  key={service.title}
                  display="flex"
                  alignItems="center"
                  gap={1.5}
                >
                  <service.icon sx={{ color: "secondary.main" }} />
                  <Typography variant="body1">{service.title}</Typography>
                </Box>
              </Typography>
            ))}
          </Grid>

          {/* Column 4: Contact */}
          <Grid size={{ xs: 12, md: 3 }}>
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                borderBottom: "2px solid",
                borderColor: "secondary.main",
                display: "inline-block",
                mb: 2,
              }}
            >
              Contact
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              {COMPANY_INFO.address}
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              {COMPANY_INFO.phone}
            </Typography>
            <Typography variant="body2">{COMPANY_INFO.email}</Typography>
          </Grid>
        </Grid>

        {/* Divider + Bottom Bar */}
        <Box
          sx={{
            borderTop: "1px solid rgba(255,255,255,0.2)",
            mt: 6,
            pt: 2,
            textAlign: "center",
            opacity: 0.7,
          }}
        >
          <Typography variant="body2">
            © {new Date().getFullYear()} {COMPANY_INFO.name}. All rights
            reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
