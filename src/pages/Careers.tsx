import {
  Box,
  Container,
  Typography,
  TextField,
  MenuItem,
  List,
  ListItem,
  ListItemText,
  Button,
  useMediaQuery,
} from "@mui/material";
import { debounce, type DebouncedFunc } from "lodash";
import { useEffect, useMemo, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { JOBS } from "../constants/jobs";
import { useTheme } from "@mui/material/styles";
import Fuse from "fuse.js";

export default function Careers() {
  const [searchQuery, setSearchQuery] = useState("");
    const [debouncedQuery, setDebouncedQuery] = useState("");
  const [filterDept, setFilterDept] = useState("");

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const debouncedSearch: DebouncedFunc<(value: string) => void> = useMemo(
    () =>
      debounce((value: string) => {
        setDebouncedQuery(value);
      }, 400),
    []
  );

  useEffect(() => {
    debouncedSearch(searchQuery);
    return debouncedSearch.cancel; // cleanup
  }, [searchQuery, debouncedSearch]);

  // 🔍 Fuse search setup
  const fuse = new Fuse(JOBS, {
  keys: [
    { name: "title", weight: 0.5 },
    { name: "description", weight: 0.3 },
    { name: "department", weight: 0.1 },
    { name: "location", weight: 0.05 },
    { name: "type", weight: 0.05 },
  ],
  threshold: 0.3,         // 🔥 lower tolerance for fuzzy matches
  distance: 50,           // 🔥 tighter match window
  ignoreLocation: true,
  includeScore: true,
  minMatchCharLength: 3,  // 🔥 don’t match tiny substrings
});



  // ✅ Apply filters
  let filteredJobs = JOBS;

if (debouncedQuery.trim() !== "") {
  filteredJobs = fuse
    .search(debouncedQuery.toLowerCase())
    .sort((a, b) => a.score! - b.score!) // best matches first
    .map((res) => res.item);
}

if (filterDept) {
  filteredJobs = filteredJobs.filter(
    (job) => job.department === filterDept
  );
}

  return (
    <Box sx={{ pt: 12, pb: 8 }}>
      <Container maxWidth="md">
        {/* Header */}
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          Careers at Anphix Solutions
        </Typography>
        <Typography variant="h6" sx={{ mb: 4, opacity: 0.8 }}>
          Explore open positions and join our growing team.
        </Typography>

        {/* Filters */}
        <Box sx={{ display: "flex", gap: 2, mb: 4, flexWrap: "wrap" }}>
          <TextField
            fullWidth
            placeholder="Search jobs by title, location, or keywords..."
            variant="outlined"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            sx={{ mb: 4 }}
          />
          <TextField
            select
            label="Department"
            variant="outlined"
            value={filterDept}
            onChange={(e) => setFilterDept(e.target.value)}
            sx={{ minWidth: 200 }}
          >
            <MenuItem value="">All</MenuItem>
            <MenuItem value="Engineering">Engineering</MenuItem>
            <MenuItem value="Design">Design</MenuItem>
          </TextField>
        </Box>

        {/* Job Listings */}
        {filteredJobs.length === 0 ? (
          <Typography variant="body1" sx={{ textAlign: "center", mt: 4 }}>
            ❌ No jobs found. Try adjusting your filters.
          </Typography>
        ) : isMobile ? (
          <List>
            {filteredJobs.map((job) => (
              <ListItem
                key={job.id}
                divider
                secondaryAction={
                  <Button
                    variant="contained"
                    size="small"
                    component={RouterLink}
                    to={`/careers/${job.id}`}
                  >
                    View
                  </Button>
                }
              >
                <ListItemText
                  primary={job.title}
                  secondary={`${job.location} • ${job.type}`}
                />
              </ListItem>
            ))}
          </List>
        ) : (
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 3,
            }}
          >
            {filteredJobs.map((job) => (
              <Box
                key={job.id}
                sx={{
                  p: 3,
                  border: "1px solid #e0e0e0",
                  borderRadius: 2,
                  boxShadow: "0px 2px 8px rgba(0,0,0,0.05)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Box>
                  <Typography variant="h6" fontWeight="bold">
                    {job.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {job.location} • {job.department} • {job.type}
                  </Typography>
                  <Typography variant="caption" color="text.disabled">
                    Posted {job.posted}
                  </Typography>
                </Box>
                <Button
                  variant="contained"
                  color="secondary"
                  component={RouterLink}
                  to={`/careers/${job.id}`}
                  sx={{ mt: 2 }}
                >
                  View Details
                </Button>
              </Box>
            ))}
          </Box>
        )}
      </Container>
    </Box>
  );
}
