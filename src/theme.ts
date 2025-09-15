import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1E293B", // Navy
      light: "#334155",
      dark: "#0f172a",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#0D9488", // Teal
      light: "#14b8a6",
      dark: "#0f766e",
      contrastText: "#ffffff",
    },
    background: {
      default: "#F8FAFC",
      paper: "#ffffff",
    },
  },
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "25px",
          fontWeight: 500,
          fontSize: "1rem",
          textTransform: "none",
          position: "relative",
          "&.nav-link::after": {
            content: '""',
            position: "absolute",
            width: "0%",
            height: "2px",
            bottom: 4,
            left: "50%",
            transform: "translateX(-50%)",
            backgroundColor: "#0D9488",
            transition: "width 0.3s ease",
          },
          "&.nav-link:hover::after": {
            width: "60%",
          },
          "&.active-nav": {
            color: "#0D9488",
            fontWeight: 600,
          },
          "&.active-nav::after": {
            width: "60%",
          },
          "&.pulse": {
            animation: "pulse 2s infinite",
          },
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: `
        @keyframes pulse {
          0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(13, 148, 136, 0.6); }
          70% { transform: scale(1.05); box-shadow: 0 0 0 12px rgba(13, 148, 136, 0); }
          100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(13, 148, 136, 0); }
        }
      `,
    },
  },
});

export default theme;
