import { useParams } from "react-router-dom";
import { JOBS } from "../constants/jobs";
import { Box, Container, Typography, Button, Paper } from "@mui/material";
import { useRef } from "react";
import ReactMarkdown from "react-markdown";

export default function JobDetails() {
  const { jobId } = useParams<{ jobId: string }>();
  const job = JOBS.find((j) => j.id === Number(jobId));
  const formRef = useRef<HTMLDivElement | null>(null);

  if (!job) {
    return (
      <Container sx={{ mt: 12 }}>
        <Typography variant="h5" align="center">
          Job no longer available.
        </Typography>
      </Container>
    );
  }

  // 🔗 Replace with your actual Google Form link
  const formUrl = `https://forms.gle/92aTXMQdyoxGvoMz5`;

  const handleScrollToForm = () => {
    if (formRef.current) {
      const yOffset = -80; // adjust for navbar height
      const y =
        formRef.current.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <Container sx={{ mt: 12, mb: 8 }}>
      {/* Job Header */}
      <Typography variant="h3" gutterBottom fontWeight="bold">
        {job.title}
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" gutterBottom>
        {job.department} • {job.location} • {job.type}
      </Typography>
      <Typography variant="caption" color="text.secondary" gutterBottom>
        Posted on: {job.posted}
      </Typography>

      {/* Job Description */}
      <Box sx={{ mt: 4 }}>
        <ReactMarkdown
          components={{
            h1: ({ ...props }) => (
              <Typography
                variant="h4"
                fontWeight="bold"
                gutterBottom
                {...props}
              />
            ),
            h2: ({ ...props }) => (
              <Typography
                variant="h5"
                fontWeight="bold"
                gutterBottom
                {...props}
              />
            ),
            p: ({ ...props }) => (
              <Typography variant="body1" sx={{ mb: 2 }} {...props} />
            ),
            li: ({ ...props }) => (
              <li style={{ marginBottom: "8px" }} {...props} />
            ),
          }}
        >
          {job.description}
        </ReactMarkdown>
      </Box>

      {/* Apply Button */}
      <Box sx={{ textAlign: "center", mb: 6 }}>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          onClick={handleScrollToForm}
        >
          Apply Now
        </Button>
      </Box>

      {/* Application Section */}
      <div ref={formRef}>
        <Paper
          elevation={3}
          sx={{
            p: 3,
            borderRadius: 3,
            backgroundColor: "#fafafa",
          }}
        >
          <Typography variant="h5" gutterBottom>
            Application Form
          </Typography>

          <Box sx={{ mt: 2 }}>
            <iframe
              src={formUrl}
              width="100%"
              height="800"
              style={{
                minHeight: "500px",
                borderRadius: "12px",
                border: "1px solid #ddd",
              }}
            >
              Loading…
            </iframe>
          </Box>
        </Paper>
      </div>
    </Container>
  );
}
