import Joi from "@hapi/joi";

export const updateProfile = Joi.object().keys({
  firstname: Joi.string().min(5).max(15),
  lastname: Joi.string().min(5).max(15),
  email: Joi.string().email(),
  dateofbirth: Joi.string().min(5).max(15),
  gender: Joi.string().min(3).max(15),
  address: Joi.string().min(5).max(15),
  role: Joi.string().min(3).max(15),
});

export const validation = (req, res, next) => {
  const { error } = updateProfile.validate(req.body);
  console.log(`this is ereq ${JSON.stringify(req.body)}`);
  if (error) {
    return res.status(400).json({
      status: 400,
      message: error.details[0].message.replace(/"/g, ""),
    });
  }
  next();
};
