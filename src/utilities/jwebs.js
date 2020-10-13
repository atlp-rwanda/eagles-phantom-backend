import jwt from 'jsonwebtoken';
import dotenv from 'dotenv'
dotenv.config();
export const userloginToken = (params) =>{
    const token = jwt.sign(params,process.env.ACCESS_TOKEN_SECRET,{algorithm: 'HS256',
        expiresIn:'120d'})
    return token
}

export const decode = (token) =>{
  const payload = jwt.verify(token,process.env.ACCESS_TOKEN_SECRET)
    return payload
}  