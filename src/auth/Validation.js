
export const Validation = (values) => {
  let errors = {};
  if (!values.firstName.trim()) {
    errors.firstName = "First name is required";
  }
  if (!values.lastName.trim()) {
    errors.lastName = "Last name is required";
  }
  if (!values.email.trim()) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  }
  if (!values.password.trim()) {
    errors.password = "Password is required";
  } else if (values.password.trim().length < 10) {
    errors.password = "Password must be at least 10 characters long";
  }
  if (!values.confirmPassword.trim()) {
        errors.confirmPassword = "Kindly Confirm your Password";
      } else if (values.confirmPassword !== values.password) {
        errors.confirmPassword = "Passwords do not match";
      }
  return errors;
};











