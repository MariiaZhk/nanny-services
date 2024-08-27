import * as Yup from "yup";

export const authValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .test(
      "email-format",
      "Email should contain '@' and a valid domain",
      (value) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      }
    )
    .required("Email is required"),
  password: Yup.string().required("Password is required").min(6),
});
