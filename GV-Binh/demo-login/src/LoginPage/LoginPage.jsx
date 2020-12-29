import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as useActions from "../redux/authentication/action";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Link } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import CircularProgress from "@material-ui/core/CircularProgress";
import FacebookIcon from '@material-ui/icons/Facebook';
import { userService } from "../services/user.service";

// export function LoginPage() {
//   const [user, setUser] = useState({
//     userName: "",
//     password: "",
//   });
//   const [submitted, setSubmitted] = useState(false);
//   const dispatch = useDispatch();
//   const loggingIn = useSelector((state) => state.loginReduce.loggingIn);
//   const location = useLocation();

//   function handleSubmit(e) {
//     e.preventDefault();

//     setSubmitted(true);
//     if (user.userName && user.password) {
//       const { from } = location.state || { from: { pathname: "/" } };
//       dispatch(useActions.login(user, from));
//     }
//   }

//   function handleChange(e) {
//     const { name, value } = e.target;
//     setUser((user) => ({ ...user, [name]: value }));
//   }

//   return (
//     <div className="col-lg-8 offset-lg-2">
//       <h2>Login</h2>
//       <form name="form" onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label>Username</label>
//           <input
//             type="text"
//             name="userName"
//             value={user.userName}
//             onChange={handleChange}
//             className={
//               "form-control" +
//               (submitted && !user.userName ? " is-invalid" : "")
//             }
//           />
//           {submitted && !user.userName && (
//             <div className="invalid-feedback">Username is required</div>
//           )}
//         </div>
//         <div className="form-group">
//           <label>Password</label>
//           <input
//             type="password"
//             name="password"
//             value={user.password}
//             onChange={handleChange}
//             className={
//               "form-control" +
//               (submitted && !user.password ? " is-invalid" : "")
//             }
//           />
//           {submitted && !user.password && (
//             <div className="invalid-feedback">Password is required</div>
//           )}
//         </div>
//         <div className="form-group">
//           <button className="btn btn-primary">
//             {loggingIn && (
//               <span className="spinner-border spinner-border-sm mr-1"></span>
//             )}
//             Login
//           </button>
//           <Link to="/register" className="btn btn-link">
//             Register
//           </Link>
//         </div>
//       </form>
//     </div>
//   );
// }

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  buttonProgress: {
    // color: green[500],
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
}));

export function LoginPage() {
  const classes = useStyles();
  const [user, setUser] = useState({
    userName: "",
    password: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const dispatch = useDispatch();
  const loggingIn = useSelector((state) => state.loginReduce.loggingIn);
  const location = useLocation();

  function handleSubmit(e) {
    e.preventDefault();

    setSubmitted(true);
    if (user.userName && user.password) {
      const { from } = location.state || { from: { pathname: "/" } };
      dispatch(useActions.request(user));
    }
  }

  // function loginFace() {
  //   dispatch(useActions.loginFace());
  // }

  function handleChange(e) {
    const { name, value } = e.target;
    setUser((user) => ({ ...user, [name]: value }));
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form
          className={classes.form}
          noValidate
          name="form"
          onSubmit={handleSubmit}
        >
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="User Name"
            name="userName"
            value={user.userName}
            onChange={handleChange}
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            value={user.password}
            onChange={handleChange}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <div className={classes.wrapper}>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              fullWidth
              className={classes.submit}
              disabled={loggingIn}
            >
              Sing In
            </Button>
            {loggingIn && (
              <CircularProgress size={24} className={classes.buttonProgress} />
            )}
          </div>
          <div className={classes.wrapper}>
            <Button
              variant="contained"
              color="primary"
              type="button"
              fullWidth
              onClick={userService.loginFB}
            >
              <FacebookIcon />
              Login with Facebook
            </Button>
            {loggingIn && (
              <CircularProgress size={24} className={classes.buttonProgress} />
            )}
          </div>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/register" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
