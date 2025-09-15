import {
  Box,
  Container,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { motion } from "framer-motion";
import { ABOUT_CONTENT } from "../constants/homePageContent";
import type { JSX } from "react/jsx-runtime";

export default function About(): JSX.Element {
  return (
    <Box
      id="about"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: "grey.50",
      }}
    >
      <Container maxWidth="md">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h3"
            fontWeight="bold"
            gutterBottom
            color="primary"
            textAlign="center"
          >
            {ABOUT_CONTENT.title}
          </Typography>

          <Typography
            variant="body1"
            sx={{ mb: 4, opacity: 0.9, textAlign: "center" }}
          >
            {ABOUT_CONTENT.description}
          </Typography>

          <List>
            {ABOUT_CONTENT.points.map((point, index) => (
              <ListItem key={index} disableGutters>
                <ListItemIcon>
                  <CheckCircleIcon color="secondary" />
                </ListItemIcon>
                <ListItemText primary={point} />
              </ListItem>
            ))}
          </List>
        </motion.div>
      </Container>
    </Box>
  );
}
