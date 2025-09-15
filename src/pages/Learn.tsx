import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
} from "@mui/material";
import { LEARN_CONTENT } from "../constants/learnPageContent";
import { Link } from "react-router-dom"; // For CRA/Vite. If Next.js, use next/link

export default function Learn(): React.JSX.Element {
  return (
    <Box
      id="learn"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: "background.paper",
      }}
    >
      <Container maxWidth="lg">
        {/* Page Header */}
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography variant="h3" fontWeight="bold" color="primary" gutterBottom>
            {LEARN_CONTENT.title}
          </Typography>
          <Typography
            variant="h6"
            sx={{ opacity: 0.75, maxWidth: 800, mx: "auto", mb: 2 }}
          >
            {LEARN_CONTENT.subtitle}
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ fontStyle: "italic", color: "text.secondary" }}
          >
            {LEARN_CONTENT.motto}
          </Typography>
        </Box>

        {/* Why Choose Section */}
        <Box
          sx={{
            bgcolor: "primary.main",
            color: "white",
            borderRadius: 3,
            p: { xs: 4, md: 6 },
            mb: 8,
            textAlign: "center",
          }}
        >
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Why Choose Anphix Learn?
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            {LEARN_CONTENT.whyChoose.map((point, i) => (
              <Grid size={{xs:12, sm:12, md:12}} key={i}>
                <Typography
                  variant="body1"
                  sx={{ display: "flex", alignItems: "center", mb: 1 }}
                >
                  {point}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Courses Offered */}
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography variant="h4" fontWeight="bold" gutterBottom color="primary">
            Courses Offered
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {LEARN_CONTENT.sections.map((section, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
              <Card
                elevation={4}
                sx={{
                  height: "100%",
                  borderRadius: 3,
                  p: 2,
                  textAlign: "left",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": { transform: "translateY(-6px)", boxShadow: 6 },
                }}
              >
                <CardContent sx={{ flexGrow: 1 }}>
                  <section.icon fontSize="large" color="primary" />
                  <Typography
                    variant="h6"
                    fontWeight="bold"
                    gutterBottom
                    sx={{ mt: 1 }}
                  >
                    {section.title}
                  </Typography>
                  <ul style={{ paddingLeft: "20px", margin: 0 }}>
                    {section.items.map((item, i) => (
                      <li key={i}>
                        <Typography
                          variant="body2"
                          sx={{ opacity: 0.85, lineHeight: 1.6 }}
                        >
                          {item}
                        </Typography>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                {/* Apply Now Button */}
                <Box sx={{ textAlign: "center", mt: 2 }}>
                  <Button
                    component={Link}
                    to="/anphix-learn-apply"
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{
                      borderRadius: 2,
                      fontWeight: "bold",
                      textTransform: "none",
                      py: 1,
                    }}
                  >
                    Apply Now
                  </Button>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
