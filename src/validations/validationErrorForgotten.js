import Joi from '@hapi/joi';

export const forgot = Joi.object().keys({
  email: Joi.string().email().required(),
});

export const validationErrorForgotten = (req, res, next) => {
  const { error } = forgot.validate(req.body);
  if (error) {
    res.status(400).json({
      status: 400,
      message: error.details[0].message.replace(/"/g, ''),
    });
  }
  next();
};
