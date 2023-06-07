import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useFormik } from "formik";
import signUp from "../../Validation/validation";
import { FiEye, FiEyeOff } from "react-icons/fi";
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
import { ScaleLoader } from "react-spinners";

const Forms = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState("password");
  const [confrmShowPass, setConfrmShowPass] = useState("password");
  const [loading, setLoading] = useState(false);

  let inputValue = {
    email: "",
    fullname: "",
    password: "",
    confirmPassword: "",
  };
  const formValidation = useFormik({
    initialValues: inputValue,
    validationSchema: signUp,
    onSubmit: () => {
      createUsers();
    },
  });

  const createUsers = () => {
    setLoading(true);
    createUserWithEmailAndPassword(
      auth,
      formValidation.values.email,
      formValidation.values.password
    )
      .then(() => {
        sendEmailVerification(auth.currentUser).then(() => {
          toast.success("Please Varify Your Mail", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        });
        navigate("/login");
        setLoading(false);
      })
      .catch((error) => {
        if (error.message.includes("auth/email-already-in-use")) {
          toast.error("Already have an account with this mail", {
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
        setLoading(false);
      });
  };

  const handlePassShow = () => {
    if (showPass === "password") {
      setShowPass("text");
    } else {
      setShowPass("password");
    }
  };

  const handleConfrmPassShow = () => {
    if (confrmShowPass === "password") {
      setConfrmShowPass("text");
    } else {
      setConfrmShowPass("password");
    }
  };

  return (
    <>
      <div className="registration_form">
        <ToastContainer />
        <div className="registration_heading">
          <h1>Get started with easily register</h1>
          <p className="sub_heading">Free register and you can enjoy it</p>
        </div>

        <form onSubmit={formValidation.handleSubmit}>
          <TextField
            id="outlined-basic"
            label="email"
            variant="outlined"
            type="email"
            name="email"
            margin="normal"
            value={formValidation.values.email}
            onChange={formValidation.handleChange}
            sx={{
              width: "410px",
            }}
          />

          {formValidation.touched.email && formValidation.errors.email ? (
            <p className="erros">{formValidation.errors.email}</p>
          ) : null}

          <TextField
            id="outlined-basic"
            label="Full Name"
            variant="outlined"
            type="text"
            margin="normal"
            name="fullname"
            value={formValidation.values.fullname}
            onChange={formValidation.handleChange}
            sx={{
              width: "410px",
            }}
          />

          {formValidation.touched.fullname && formValidation.errors.fullname ? (
            <p className="erros">{formValidation.errors.fullname}</p>
          ) : null}

          <div className="passwordField">
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
              type={showPass}
              margin="normal"
              name="password"
              value={formValidation.values.password}
              onChange={formValidation.handleChange}
              sx={{
                width: "410px",
              }}
            />

            <div className="passShow" onClick={handlePassShow}>
              {showPass == "password" ? <FiEyeOff /> : <FiEye />}
            </div>
            {formValidation.touched.password &&
            formValidation.errors.password ? (
              <p className="erros">{formValidation.errors.password}</p>
            ) : null}
          </div>

          <div className="passwordField">
            <TextField
              id="outlined-basic"
              label="Confirm Password"
              variant="outlined"
              type={confrmShowPass}
              margin="normal"
              name="confirmPassword"
              value={formValidation.values.confirmPassword}
              onChange={formValidation.handleChange}
              sx={{
                width: "410px",
              }}
            />
            {/* password hide show */}
            <div className="comfrmPassShow" onClick={handleConfrmPassShow}>
              {confrmShowPass == "password" ? <FiEyeOff /> : <FiEye />}
            </div>

            {formValidation.touched.confirmPassword &&
            formValidation.errors.confirmPassword ? (
              <p className="erros">{formValidation.errors.confirmPassword}</p>
            ) : null}
          </div>
          {loading ? (
            <Button
              type="submit"
              variant="contained"
              sx={{
                width: "410px",
                borderRadius: "50px",
                background: "var(--primary-color)",
                padding: "15px 0 15px 0",
                fontFamily: "var(--heading-font)",
                fontWeight: 600,
                fontSize: "20.6406px",
                margin: "40px 0 30px 0",
              }}
            >
              <ScaleLoader color="#fff" size={6} />
            </Button>
          ) : (
            <Button
              type="submit"
              variant="contained"
              sx={{
                width: "410px",
                borderRadius: "50px",
                background: "var(--primary-color)",
                padding: "15px 0 15px 0",
                fontFamily: "var(--heading-font)",
                fontWeight: 600,
                fontSize: "20.6406px",
                margin: "40px 0 30px 0",
              }}
            >
              Sign Up
            </Button>
          )}

          <p className="paragraph">
            Already have an account ?{" "}
            <Link to="/login" className="signin">
              Sign In
            </Link>{" "}
          </p>
        </form>
      </div>
    </>
  );
};

export default Forms;
