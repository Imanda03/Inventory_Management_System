import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const FirstPage = () => {
  return (
    <div>
      <Box
        display="flex"
        flexDirection="column"
        maxWidth={400}
        height={"40vh"}
        alignItems="center"
        justifyContent="center"
        margin="auto"
        marginTop={20}
        padding={5}
        borderRadius={5}
        boxShadow={"5px 5px 10px #ccc"}
        sx={{
          ":hover": {
            boxShadow: "10px 10px 20px #ccc",
            backgroundColor: "#f5f3f0",
          },
        }}
      >
        <Link to="/StudentRegister">
          <Typography variant="h3" sx={{ textDecoration: "unset" }}>
            I am Student
          </Typography>
        </Link>
        <Link to="/TeacherRegister">
          <Typography mt={10} variant="h3">
            I am Teacher
          </Typography>
        </Link>
      </Box>
    </div>
  );
};

export default FirstPage;
