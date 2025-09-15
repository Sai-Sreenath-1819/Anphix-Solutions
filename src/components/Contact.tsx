// import { useState } from "react";
import {
  Box,
//   Button,
  Container,
  Grid,
//   TextField,
  Typography,
  IconButton,
  Paper,
} from "@mui/material";
import { Email, Phone, LocationOn } from "@mui/icons-material";
// import EmailJS from "emailjs-com";
import { COMPANY_INFO } from "../constants/companyInfo";
import { ICON_MAP, SOCIAL_LINKS } from "../constants/socialLinks";
// import { EMAIL_INFO } from "../constants/emailInfo";

export default function Contact() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });
//   const [status, setStatus] = useState("");

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     setStatus("Sending...");

//     EmailJS.send(
//       EMAIL_INFO.serviceId,
//       EMAIL_INFO.templateId,
//       formData,
//       EMAIL_INFO.publicKey
//     )
//       .then(() => {
//         setStatus("✅ Message sent successfully!");
//         setFormData({ name: "", email: "", message: "" });
//       })
//       .catch(() => setStatus("❌ Failed to send. Try again."));
//   };

  return (
    <Box id="contact" sx={{ py: 10, bgcolor: "grey.100" }}>
      <Container maxWidth="lg">
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
                  const Icon = ICON_MAP[link.icon]; // ✅ Icon is a component type
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

          {/* Right - Contact Form */}
          {/* <Grid size={{ xs: 12, md: 7 }}>
            <Paper
              elevation={3}
              sx={{ p: 4, borderRadius: 3, bgcolor: "white" }}
            >
              <Typography variant="h6" gutterBottom>
                Send us a message
              </Typography>
              <Box component="form" onSubmit={handleSubmit}>
                <TextField
                  fullWidth
                  label="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  margin="normal"
                  required
                />
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  margin="normal"
                  required
                />
                <TextField
                  fullWidth
                  label="Message"
                  name="message"
                  multiline
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
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

              {status && (
                <Typography
                  sx={{ mt: 2, color: status.includes("✅") ? "green" : "red" }}
                >
                  {status}
                </Typography>
              )}
            </Paper>
          </Grid> */}
        </Grid>
      </Container>
    </Box>
  );
}
