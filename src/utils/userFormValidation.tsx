export const validateUserInputs = (
  name: string,
  email: string,
  password: string,
) => {
  const isNameValid = /^[a-zA-Z]+(?:\s[a-zA-Z]+)+$/.test(name);
  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email,
  );
  //   const isPasswordValid = password.length >= 6;
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,16}$/.test(password);

  if (!isNameValid) {
    return "Please enter a valid full name.";
  }
  if (!isEmailValid) {
    return "Please enter a valid email address.";
  }
  if (!isPasswordValid) {
    return "Password must be 8-16 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character.";
  }
  return null; // No validation errors
};
