import * as Yup from "yup";

export const appointmentValidationSchema = Yup.object().shape({
  address: Yup.string().required("Address is required"),
  tel: Yup.string()
    .required("Phone number is required")
    .matches(/^\+380\d{9}$/, "Phone number must be in format +380XXXXXXXXX"),
  child_age: Yup.number()
    .transform((value, originalValue) => {
      return originalValue.trim() === "" ? undefined : value;
    })
    .required("Child's age is required")
    .typeError("Child's age must be a number")
    .min(0, "Age must be a positive number")
    .max(18, "Age must be less than or equal to 18"),
  time: Yup.string().required("Time is required"),
  email: Yup.string()
    .email("Invalid email format")
    .test(
      "email-format",
      "Email should contain '@' and a valid domain",
      (value) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      }
    )
    .required("Email is required"),
  parent_name: Yup.string()
    .required("Parent's name is required")
    .min(2, "Parent's name must be at least 2 characters"),
  comment: Yup.string().max(300, "Comment can't exceed 300 characters"),
});
