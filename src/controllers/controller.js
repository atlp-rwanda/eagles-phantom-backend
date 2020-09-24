import bcrypt from 'bcryptjs';
//import jwt from 'jsonwebtoken';
import { userloginToken } from './../utilities/jwebs';
import model from '../database/models';

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).send({
      message: ('wrong email or password'),
    });
  }

  const user = await model.User.findOne({
    where: {
      email,
    },
  });

  if (!user || !bcrypt.compareSync(password, user.password)) {
    return res.status(400).send({
      message: ('Invalid email or password'),
    });
  }

  // const payload = {
  //   email,
  // };

  // const accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
  //   algorithm: 'HS256',
  //   expiresIn: 120,
  // });

  const accessToken = userloginToken(
    { email:email,role:user.role}
);
res.cookie('auths',accessToken);


  return res.status(200).json({
    message: ('logged In successfull'),
    token: accessToken,
  });
};
export default login;
