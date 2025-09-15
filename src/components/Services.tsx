// src/components/Services.tsx
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  Collapse,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
} from "@mui/material";
import { motion } from "framer-motion";
import { useState } from "react";
import { SERVICES_CONTENT } from "../constants/homePageContent";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

export default function Services(): React.JSX.Element {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <Box
      id="services"
      sx={{
        position: "relative",
        py: { xs: 8, md: 12 },
        bgcolor: "background.paper",
      }}
    >
      <Container maxWidth="lg">
        {/* Section Title */}
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography
            variant="h3"
            fontWeight="bold"
            color="primary"
            gutterBottom
          >
            {SERVICES_CONTENT.title}
          </Typography>
          <Typography
            variant="h6"
            sx={{ opacity: 0.75, maxWidth: 700, mx: "auto" }}
          >
            {SERVICES_CONTENT.subtitle}
          </Typography>
        </Box>

        {/* Services Grid */}
        <Grid container spacing={4}>
          {SERVICES_CONTENT.items.map((service, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card
                  elevation={3}
                  sx={{
                    height: "100%",
                    borderRadius: 4,
                    textAlign: "center",
                    p: 2,
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: 6,
                    },
                  }}
                >
                  <CardContent>
                    <service.icon fontSize="large" color="primary" />
                    <Typography variant="h6" fontWeight="bold" gutterBottom>
                      {service.title}
                    </Typography>
                    <Typography variant="body2" sx={{ opacity: 0.8, mb: 2 }}>
                      {service.description}
                    </Typography>

                    {/* Toggle Button */}
                    {service.details && (
                      <Button
                        size="small"
                        endIcon={
                          expandedIndex === index ? (
                            <ExpandLessIcon />
                          ) : (
                            <ExpandMoreIcon />
                          )
                        }
                        onClick={() => toggleExpand(index)}
                        sx={{
                          textTransform: "none",
                          fontWeight: "bold",
                          p: 0,
                          "&:hover": {
                            background: "transparent",
                            color: "secondary.main",
                          },
                        }}
                      >
                        {expandedIndex === index
                          ? "Hide Details"
                          : "More Details"}
                      </Button>
                    )}

                    {/* Details Section */}
                    <Collapse
                      in={expandedIndex === index}
                      timeout="auto"
                      unmountOnExit
                    >
                      <Box
                        sx={{
                          bgcolor: "grey.50",
                          borderRadius: 2,
                          p: 2,
                          mt: 2,
                          boxShadow: "inset 0px 1px 4px rgba(0,0,0,0.08)",
                          textAlign: "left",
                        }}
                      >
                        <List dense>
                          {service.details?.map((detail, i) => (
                            <ListItem
                              key={i}
                              sx={{ alignItems: "flex-start", py: 0.5 }}
                            >
                              <ListItemIcon sx={{ minWidth: 32 }}>
                                <ArrowRightIcon color="secondary" />
                              </ListItemIcon>
                              <ListItemText
                                primary={detail}
                                slotProps={{
                                  primary: {
                                    variant: "body2",
                                  },
                                }}
                              />
                            </ListItem>
                          ))}
                        </List>
                      </Box>
                    </Collapse>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
