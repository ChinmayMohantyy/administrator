import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Container, CssBaseline, Box, Avatar, Typography, TextField, Button, Paper, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const defaultTheme = createTheme();

function SignUp() {
    const [user, setUser] = useState({ username: '', password: '' });
    const [buttonDisabled, setButtonDisabled] = useState(false);

    const login = () => {
        // Your login logic here
    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <div
                style={{
                    width: '100vw',
                    height: '100vh',
                    background: 'linear-gradient(-45deg, #000000, #444444, #ee7752, #e73c7e, #23a6d5, #23d5ab, #444444, #000000)',
                    backgroundSize: '400% 400%',
                    animation: 'gradient 15s ease infinite',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <Paper elevation={6} sx={{ padding: 2 }}>
                        <Box
                            sx={{
                                marginTop: 8,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}
                        >
                            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                                <LockOutlinedIcon />
                            </Avatar>
                            <Typography component="h1" variant="h5">
                                Sign Up
                            </Typography>
                            <Box component="form" noValidate sx={{ mt: 1 }}>
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Name"
                                    name="name"
                                    autoComplete="name"
                                    autoFocus
                                    onChange={(e) => setUser({ ...user, username: e.target.value })}
                                />
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    autoFocus
                                    onChange={(e) => setUser({ ...user, username: e.target.value })}
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
                                    onChange={(e) => setUser({ ...user, password: e.target.value })}
                                />
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Confirm Password"
                                    type="c_password"
                                    id="c_password"
                                    autoComplete="c_password"
                                    onChange={(e) => setUser({ ...user, password: e.target.value })}
                                />
                                {buttonDisabled ? (
                                    <Button
                                        type="button"
                                        fullWidth
                                        variant="contained"
                                        sx={{ mt: 3, mb: 2 }}
                                        disabled
                                    >
                                        Sign In
                                    </Button>
                                ) : (
                                    <Button
                                        type="button"
                                        fullWidth
                                        variant="contained"
                                        sx={{ mt: 3, mb: 2 }}
                                        onClick={login}
                                    >
                                        Sign Up
                                    </Button>
                                )}
                                <Grid container>
                                    <Grid item>
                                        <Link to="/">
                                            {"Sign In"}
                                        </Link>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                    </Paper>
                </Container>
            </div>
        </ThemeProvider>
    );
}

export default SignUp;

// CSS for background animation
const styles = `
@keyframes gradient {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
`;

// Append the styles to the document head
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);
