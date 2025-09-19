import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
  IconButton,
  Paper,
} from "@mui/material";
import { Email, Phone, LocationOn } from "@mui/icons-material";
import { COMPANY_INFO } from "../constants/companyInfo";
import { ICON_MAP, SOCIAL_LINKS } from "../constants/socialLinks";

export default function Contact() {
  return (
    <Box id="contact" sx={{ py: 10, bgcolor: "grey.100" }}>
      <Container maxWidth="lg">
        {/* Section Title */}
        <Typography variant="h3" fontWeight="bold" align="center" gutterBottom>
          Contact Us
        </Typography>
        <Typography align="center" color="text.secondary" sx={{ mb: 6 }}>
          We’d love to hear from you! Reach out via email, phone, or send us a
          quick message.
        </Typography>

        <Grid container spacing={6} justifyContent="center">
          {/* Left - Company Info */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Paper
              elevation={3}
              sx={{ p: 4, borderRadius: 3, bgcolor: "white" }}
            >
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                {COMPANY_INFO.name}
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <LocationOn sx={{ mr: 2, color: "primary.main" }} />
                <Typography>{COMPANY_INFO.address}</Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <Phone sx={{ mr: 2, color: "primary.main" }} />
                <Typography>{COMPANY_INFO.phone}</Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <Email sx={{ mr: 2, color: "primary.main" }} />
                <Typography>{COMPANY_INFO.email}</Typography>
              </Box>

              {/* Social Links */}
              <Box sx={{ mt: 3 }}>
                {SOCIAL_LINKS.map((link) => {
                  const Icon = ICON_MAP[link.icon];
                  return (
                    <IconButton
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      color="primary"
                      sx={{ mr: 1 }}
                    >
                      <Icon />
                    </IconButton>
                  );
                })}
              </Box>
            </Paper>
          </Grid>

          {/* Right - Netlify Contact Form */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Paper
              elevation={3}
              sx={{ p: 4, borderRadius: 3, bgcolor: "white" }}
            >
              <Typography variant="h6" gutterBottom>
                Send us a message
              </Typography>

              {/* ✅ Netlify Form */}
              <Box
                component="form"
                name="contact"
                method="POST"
                data-netlify="true"
                sx={{ mt: 2 }}
              >
                {/* Hidden input required by Netlify */}
                <input type="hidden" name="form-name" value="contact" />

                <TextField
                  fullWidth
                  label="Name"
                  name="name"
                  margin="normal"
                  required
                />
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  type="email"
                  margin="normal"
                  required
                />
                <TextField
                  fullWidth
                  label="Message"
                  name="message"
                  multiline
                  rows={4}
                  margin="normal"
                  required
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="secondary"
                  sx={{ mt: 3 }}
                  fullWidth
                >
                  Send Message
                </Button>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
