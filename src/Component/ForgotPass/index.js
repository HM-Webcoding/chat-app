import React, { useState } from 'react'
import "./style.css"
import { Button } from "@mui/material";
import { getAuth, sendPasswordResetEmail } from "firebase/auth"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from 'react-router-dom';

const ForgotPass = () => {
    const auth = getAuth();
    const [email, setEmail] = useState("")
    const navigate = useNavigate()

    const handleForgotPass = () => {
        sendPasswordResetEmail(auth, email)
  .then(() => {
    toast.success("Check your mail to reset password", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      navigate("/login")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
    if (error.message.includes("auth/user-not-found")) {
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
      } else if(error.message.includes("auth/missing-email")){
        toast.error("Enter exsiting mail id", {
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
    }
  return (
    <div className='forgotPass'>
        <ToastContainer />
      <div className='forgotPassWrapper'>
        <h2>Reset your password</h2>
        <p>Enter your user account's verified email address and we will send you a password reset link.</p>
        <input onChange={(e)=>setEmail(e.target.value)} placeholder='Enter your email address'/>
        <Button
            onClick={handleForgotPass}
            type="submit"
            variant="contained"
            sx={{
              width: "100%",
              borderRadius: "10px",
              background: "rgba(35,134,54)",
              fontFamily: "var(--heading-font)",
              fontSize: "18px",
              textTransform: "capitalize"
            }}
          >
            Send password reset email
          </Button>
      </div>
    </div>
  )
}

export default ForgotPass
