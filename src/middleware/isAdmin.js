import models from '../database/models';

const { Users } = models;

// eslint-disable-next-line consistent-return
const isAdmin = async (req, res, next) => {
  const { email, role } = req.user;

  const user = await Users.findOne({ where: { email } });
  if (!user) {
    return res.status(403).json({
      status: 403,
      message: 'User with that email is not found',
    });
  }

  if (role !== 'admin') {
    return res
      .status(403)
      .json({ status: 403, message: 'Please sign as the admin' });
  }

  next();
};

export default isAdmin;
