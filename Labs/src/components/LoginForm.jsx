// import { useState } from "react";
// import { useUserContext } from "../context/UserContext";

import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// function LoginForm() {
//   const [userEmail, setUserEmail] = useState('')
//   const [userPassword, setUserPassword] = useState('')
//   const [submitResult, setSubmitResult] = useState('')

//   const {currentUser, handleUpdateUser} = useUserContext()

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     if (userPassword.length < 5) {
//       setSubmitResult('Password must be at least 5 chars long')
//     } else if (userPassword === userEmail) {
//       setSubmitResult('NO')
//     } else {
//       setSubmitResult('Successful login')
//       handleUpdateUser({ email: userEmail})
//     }
//   }

//   if (currentUser.email) return (
//     <>
//       <p>Welcome {currentUser.email}!</p>
//       <button onClick={()=> handleUpdateUser({})}>Log Out</button>
//     </>
//   )
//   return (
//     <div className="LoginForm">
//       <form onSubmit={handleSubmit}>
//         <div className='formRow'>
//           <label>Email Address:
//             {/* Use a controlled form input - value AND onChange */}
//             <input type="email" value={userEmail} name='userEmail'
//               onChange={(e) => setUserEmail(e.target.value)} />
//           </label>
//         </div>
//         <div className="formRow">
//           <label>Password:
//             <input type='password' value={userPassword} name='userPassword'
//               onChange={(e) => setUserPassword(e.target.value)} />
//           </label>
//         </div>

//         {
//           // conditional rendering with ternary
//           // comparison (expression)
//           // ? true block
//           // : false block
//         }
//         {
//           // showButton ? <button disabled={!showButton}>Log In</button> : null
//         }
//         <button >Log In</button>
//         <p>{submitResult}</p>
//       </form>
//     </div>
//   )
// }

// Update app to use mui
function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Randy's Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function LoginForm() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    // <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    // </ThemeProvider>
  );
}