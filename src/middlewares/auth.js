import {decode} from '../utilities/jwebs';

const auth = (req, res, next) => {
    var token = req.cookies.auths;


  if (!token) {
    return res.status(401).json({
      status: 401,
      error: 'you are not logged in',
      message:'Please! sign in first'
    });
  }

  try {
    
    const decoded = decode(token);
    req.user = decoded;
   
    next();
  }
   catch (error) {
    return res.status(500).json({ error });
  }
  return token;
};
export default {
  auth,
};
