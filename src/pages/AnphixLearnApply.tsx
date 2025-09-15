import React from "react";
import { Box, Container, Typography } from "@mui/material";

export default function Apply(): React.JSX.Element {
  return (
    <Box
      id="apply"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: "background.default",
      }}
    >
      <Container maxWidth="md">
        {/* Page Header */}
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography variant="h3" fontWeight="bold" color="primary" gutterBottom>
            Apply for Anphix Learn Courses
          </Typography>
          <Typography variant="h6" sx={{ opacity: 0.75 }}>
            Fill out the application form below to enroll in your preferred track.
          </Typography>
        </Box>

        {/* Embedded Google Form */}
        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: { xs: "900px", md: "750px" }, // Adjust for responsiveness
            borderRadius: 3,
            overflow: "hidden",
            boxShadow: 3,
          }}
        >
          <iframe
            src="https://forms.gle/92aTXMQdyoxGvoMz5"
            width="100%"
            height="100%"
            style={{ border: "none" }}
          >
            Loading…
          </iframe>
        </Box>
        
      </Container>
    </Box>
  );
}
