import React, { useState } from "react";
import { Card, Typography, Box, Button } from "@mui/material";

interface FlipCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  details: string[];
}

export default function FlipCard({
  icon: Icon,
  title,
  description,
  details,
}: FlipCardProps) {
  const [flipped, setFlipped] = useState(false);

  return (
    <Box sx={{ perspective: "1000px", height: 300 }}>
      <Box
        onClick={() => setFlipped(!flipped)}
        sx={{
          width: "100%",
          height: "100%",
          position: "relative",
          transformStyle: "preserve-3d",
          transition: "transform 0.8s",
          cursor: "pointer",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* Front Side */}
        <Card
          elevation={4}
          sx={{
            height: "100%",
            borderRadius: 3,
            p: 2,
            backfaceVisibility: "hidden",
            position: "absolute",
            width: "100%",
            top: 0,
            left: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            textAlign: "center",
            transition: "all 0.3s ease",
            "&:hover": {
              transform: "translateY(-6px) scale(1.02)",
              boxShadow: 8,
            },
          }}
        >
          <Box>
            <Icon fontSize="large" color="primary" />
            <Typography variant="h6" fontWeight="bold" mt={1} gutterBottom>
              {title}
            </Typography>
          </Box>

          <Typography
            variant="body2"
            sx={{ opacity: 0.8, flexGrow: 1, mt: 1, mb: 1 }}
          >
            {description}
          </Typography>

          <Button
            variant="text"
            color="primary"
            sx={{ fontWeight: "bold", textTransform: "none" }}
          >
            Click to see more →
          </Button>
        </Card>

        {/* Back Side */}
        <Card
          elevation={4}
          sx={{
            height: "100%",
            borderRadius: 3,
            p: 2,
            backfaceVisibility: "hidden",
            position: "absolute",
            width: "100%",
            top: 0,
            left: 0,
            transform: "rotateY(180deg)",
            bgcolor: "primary.main",
            color: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            {title}
          </Typography>
          <ul style={{ paddingLeft: "20px", margin: 0 }}>
            {details.map((d, i) => (
              <li key={i}>
                <Typography variant="body2" sx={{ lineHeight: 1.6 }}>
                  {d}
                </Typography>
              </li>
            ))}
          </ul>
        </Card>
      </Box>
    </Box>
  );
}
