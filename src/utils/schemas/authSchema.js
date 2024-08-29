import * as Yup from "yup";

export const baseAuthValidationSchema = Yup.object().shape({
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
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
});

export const registrationValidationSchema = baseAuthValidationSchema.shape({
  name: Yup.string()
    .required("Name is required")
    .min(2, "Name must be at least 2 characters"),
});
