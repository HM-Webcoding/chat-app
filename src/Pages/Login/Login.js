import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import signin from "../../Validation/validationSiginIn";
import {
  signInWithEmailAndPassword,
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Google from "../../svg/google";
import Github from "../../svg/github";
import Facebook from "../../svg/facebook";
import { useDispatch } from "react-redux";
import { loginusers } from "../../Feature/Slice/LoginSlice";

const LoginForm = () => {
  const provider = new GoogleAuthProvider();
  const gitProvider = new GithubAuthProvider();
  const auth = getAuth();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let signinInputValue = {
    email: "",
    password: "",
  };

  const signinFormik = useFormik({
    initialValues: signinInputValue,
    validationSchema: signin,
    onSubmit: () => {
      signinUsers();
    },
  });

  let signinUsers = () => {
    signInWithEmailAndPassword(
      auth,
      signinFormik.values.email,
      signinFormik.values.password
    )
      .then(({ user }) => {
        if (user.emailVerified === true) {
          console.log(user);
          dispatch(loginusers(user));
          localStorage.setItem("users", JSON.stringify(user));
          navigate("/");
        } else {
          toast.error("please varify your mail", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        }
      })
      .catch((error) => {
        console.log(error);
        if (error.message.includes("auth/wrong-password")) {
          toast.error("Wrong Password", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        } else if (error.message.includes("auth/user-not-found")) {
          toast.error("User not found", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        }
      });
  };

  let handleGoogle = () => {
    signInWithPopup(auth, provider);
  };

  let handleGithub = () => {
    signInWithPopup(auth, gitProvider);
  };

  return (
    <>
      <div className="loginForm">
        <div className="login_heading">
          <h1>Login to your account!</h1>
          <p>Continue With</p>
          <div className="signinOption">
            <div className="google" onClick={handleGoogle}>
              <Google />
            </div>
            <div className="github" onClick={handleGithub}>
              <Github />
            </div>
            <div className="facebook" onClick={handleGoogle}>
              <Facebook />
            </div>
          </div>

          <p>OR</p>
        </div>
        <ToastContainer />
        <form onSubmit={signinFormik.handleSubmit}>
          <TextField
            id="standard-basic"
            label="Email Address"
            variant="standard"
            type="email"
            margin="normal"
            name="email"
            value={signinFormik.values.email}
            onChange={signinFormik.handleChange}
            sx={{
              width: "410px",
            }}
          />
          {signinFormik.errors.email && signinFormik.touched.email ? (
            <p className="errors">{signinFormik.errors.email}</p>
          ) : null}
          <TextField
            id="standard-basic"
            label="Password"
            variant="standard"
            type="password"
            margin="normal"
            name="password"
            value={signinFormik.values.password}
            onChange={signinFormik.handleChange}
            sx={{
              width: "410px",
            }}
          />
          {signinFormik.errors.password ? (
            <p className="errors">{signinFormik.errors.password}</p>
          ) : null}
          <div className="forgotPassPara">
            <Link to="/forgotPass">Are you forgot password?</Link>
          </div>
          <Button
            type="submit"
            variant="contained"
            sx={{
              width: "410px",
              borderRadius: "10px",
              background: "var(--primary-color)",
              padding: "15px 0 15px 0",
              fontFamily: "var(--heading-font)",
              fontWeight: 600,
              fontSize: "20.6406px",
              margin: "20px 0",
            }}
          >
            Login to continue
          </Button>
          <p className="paragraph">
            Don’t have an account ? <Link to="/signup">Sign up</Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
