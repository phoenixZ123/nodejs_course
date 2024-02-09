import { body, validationResult } from "express-validator";

export class UserValidators {
  static signup() {
    return [
      body("name", "Name is required!").isString(),
      body("phone", "Phone number is required!").isString(),
      body("email", "Email is required!").isEmail(),
      body("password", "Password is required!")
        .isAlphanumeric()
        .isLength({ min: 8, max: 20 })
        .withMessage("Password must be between 8 to 20 characters."),
      body("type", "User role type is required!").isString(),
      body("status", "User status is required!").isString(),

      // .custom((value, { req }) => {
      //   if (req.body.email) return true;
      //   throw new Error("email is not available for validation");
      // }),
    ];
  }
}
