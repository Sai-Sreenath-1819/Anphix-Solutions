import { Box, Button, Container, Typography, Grid } from "@mui/material";
import { Link } from "react-scroll";
import Lottie from "lottie-react";
import Wave from "react-wavify";

import heroAnimation from "../assets/hero-animation.json";
import { HERO_CONTENT, HERO_STYLES } from "../constants/homePageContent";
import { WAVE_SETTINGS } from "../constants/effects";
import type { JSX } from "react";

export default function Hero(): JSX.Element {
  return (
    <Box
      id="home"
      sx={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        bgcolor: "background.default",
        overflow: "hidden",
      }}
    >
      {/* Background container to hold all background elements */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
        }}
      >
        {/* Blob Decoration */}
        <Box
          className="blob"
          sx={{
            position: "absolute",
            top: { xs: "-120px", md: "-180px" },
            left: { xs: "-80px", md: "-120px" },
            width: { xs: 300, md: 500 },
            height: { xs: 300, md: 500 },
            background: "linear-gradient(135deg, #a5d8ff 0%, #f5f7fa 100%)",
            borderRadius: "50%",
            mixBlendMode: "multiply",
            animation: "blobMove 25s infinite alternate ease-in-out",
            zIndex: 0,
            filter: "blur(0px)",
          }}
        />

        {/* Wave Divider */}
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            overflow: "hidden",
            lineHeight: 0,
            zIndex: 1,
          }}
        >
          <Wave
            fill={WAVE_SETTINGS.fill}
            options={{
              height: WAVE_SETTINGS.height,
              amplitude: WAVE_SETTINGS.amplitude,
              speed: WAVE_SETTINGS.speed,
              points: WAVE_SETTINGS.points,
            }}
            style={{ display: "block", width: "100%" }}
          />
        </Box>
      </Box>

      {/* Main Content */}
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1, pt: 8 }}>
        <Grid container spacing={6} alignItems="center">
          {/* Left side text */}
          <Grid size={{ xs: 12, md: 9 }}>
            <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
              <Typography
                variant="h3"
                fontWeight="bold"
                gutterBottom
                sx={{
                  mt: { xs: 8, md: 2 }, // ✅ adds more space on mobile, less on desktop
                  textShadow: HERO_STYLES.textShadow,
                  color: "primary.main",
                }}
              >
                {HERO_CONTENT.title}
              </Typography>

              <Typography
                variant="h6"
                sx={{
                  mb: 4,
                  opacity: 0.85,
                  textShadow: HERO_STYLES.subtitleShadow,
                }}
              >
                {HERO_CONTENT.subtitle}
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  justifyContent: { xs: "center", md: "flex-start" },
                }}
              >
                <Link to="services" smooth duration={600} offset={-70}>
                  <Button variant="contained" color="secondary" size="large">
                    {HERO_CONTENT.primaryCta}
                  </Button>
                </Link>
                <Link to="contact" smooth duration={600} offset={-70}>
                  <Button variant="outlined" color="secondary" size="large">
                    {HERO_CONTENT.secondaryCta}
                  </Button>
                </Link>
              </Box>
            </Box>
          </Grid>

          {/* Right side animation */}
          <Grid
            size={{ xs: 7, md: 3 }}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Lottie
              animationData={heroAnimation}
              loop
              autoplay
              style={{ maxWidth: 500, width: "100%" }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
