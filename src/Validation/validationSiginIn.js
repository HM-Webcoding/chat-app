import * as Yup from "yup";

const signin = Yup.object({
  email: Yup.string().required("please enter your email"),
  password: Yup.string().min(8).required("please enter your password"),
});

export default signin;
