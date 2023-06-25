import Joi from "joi";
import InvariantError from "./exceptions/invariantError.js";

const schema = Joi.object({
  username: Joi.string().min(5).required(),
  password: Joi.string().min(5).required(),
});

const validateLogin = (payload) => {
  const { value, error } = schema.validate(payload);
  if (error) {
    throw new InvariantError(error.message);
  }

  return value;
};

export default validateLogin;
