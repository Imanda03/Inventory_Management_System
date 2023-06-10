import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [userData, setUserData] = React.useState({});

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleClick = () => {
    console.log(userData);
  };
  return (
    <div>
      <form>
        <Box
          display="flex"
          flexDirection={"column"}
          maxWidth={400}
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
          <Typography variant="h2" padding={3} textAlign="center">
            Login
          </Typography>
          <TextField
            name="fullName"
            margin="normal"
            type="text"
            variant="standard"
            label="Name"
            onChange={(e) => handleChange(e)}
          />
          <TextField
            name="email"
            margin="normal"
            type="email"
            variant="standard"
            label="Email"
            onChange={(e) => handleChange(e)}
          />
          <TextField
            name="password"
            margin="normal"
            type="password"
            variant="standard"
            label="Password"
            onChange={(e) => handleChange(e)}
          />
          <Button
            sx={{ marginTop: 3, borderRadius: 3 }}
            variant="contained"
            color="warning"
            onClick={handleClick}
          >
            Login
          </Button>
          <Link to="/register">
            <Button sx={{ marginTop: 3, borderRadius: 3 }}>
              Move to Register
            </Button>
          </Link>
        </Box>
      </form>
    </div>
  );
};

export default Login;
