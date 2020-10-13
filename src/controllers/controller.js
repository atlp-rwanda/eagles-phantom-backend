import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import model from '../database/models';
import dotenv from 'dotenv'
dotenv.config();

const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(401).send({ message: res.__('Invalid email or password') });
  }
  const token = process.env.ACCESS_TOKEN_SECRET || 'jhbsdfjbio';
  try {
    const user = await model.User.findOne({
      where: { email },
    });
    if (!user || !bcrypt.compareSync(password, user.password)) {
      return res.status(400).json({
        message: res.__('Invalid email or password'),
      });
    }
  } catch (error) {
  }
  const payload = { email };
  const accessToken = jwt.sign(payload, token, {
    algorithm: 'HS256',
    expiresIn: '120h',
  });
  res.cookie('auths',accessToken);
  return res.status(200).json({
    message: res.__('logged In successfull'),
    token: accessToken,
  });
};
export default login;
