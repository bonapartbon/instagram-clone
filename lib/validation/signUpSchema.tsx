import * as Yup from "yup";

export const signUpSchema = Yup.object({
  name: Yup.string().min(2).max(25).required("*This field is required"),
  email: Yup.string().email().required("*This field is required"),
  username: Yup.string().min(2).max(25).required("*This field is required"),
  password: Yup.string().min(6).required("*This field is required"),
});
