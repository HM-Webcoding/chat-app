import * as Yup from "yup";

const signUp = Yup.object({
  fullname: Yup.string().min(3).max(15).required("Please enter your full name"),
  email: Yup.string()
    .matches(
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please enter a valid mail--"
    )
    .required("Please enter your email"),
  password: Yup.string()
    .min(8)
    .matches(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})",
      `at least 1 lowercase, uppercase, number, special charcter`
    )
    .required("Please enter your password"),
  confirmPassword: Yup.string()
    .required("Please retype your password.")
    .oneOf([Yup.ref("password")], "password must be match"),
});

export default signUp;
