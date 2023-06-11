import { Box, Paper } from "@mui/material";
import React from "react";

const HomePage = () => {
  return (
    <Box sx={{ display: "flex", flexWrap: "wrap" }}>
      <Paper elevation={24} sx={{ margin: "auto", marginTop: 20, padding: 5 }}>
        Hello
      </Paper>
    </Box>
  );
};

export default HomePage;
