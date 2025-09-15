// src/components/LoadingScreen.tsx
import { Box, Typography } from "@mui/material";
import Logo from "../assets/Anphix_Logo.png";

export default function LoadingScreen() {
  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        bgcolor: "background.default",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 2000,
      }}
    >
      {/* 🔥 Blinking Logo */}
      <img
        src={Logo}
        alt="Loading..."
        style={{
          height: 80,
          marginBottom: 20,
          animation: "blink 1.2s infinite ease-in-out",
        }}
      />
      <Typography variant="h6" color="black" sx={{ animation: "blink 1.2s infinite ease-in-out" }}>
        Loading...
      </Typography>

      {/* 🔥 CSS for blink effect */}
      <style>
        {`
          @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.3; }
          }
        `}
      </style>
    </Box>
  );
}
