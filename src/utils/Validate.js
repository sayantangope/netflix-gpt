import emailRegex from "email-regex";
import PasswordValidator from "password-validator";
const schema = new PasswordValidator()
  .is()
  .min(8)
  .is()
  .max(100)
  .has()
  .uppercase()
  .has()
  .lowercase()
  .has()
  .digits(1)
  .has()
  .not()
  .spaces();

export const checkValidData = (email, password) => {
  const isEmailValid = emailRegex().test(email);
  const isPasswordValid = schema.validate(password);

  let errorMessage = "";

  if (!isEmailValid) errorMessage += "Email is not valid \n";
  if (!isPasswordValid) errorMessage += "Password is not Valid";

  return errorMessage || null;
};
