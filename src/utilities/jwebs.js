import jwt from 'jsonwebtoken';
import login from '../controllers/controller'
import dotenv from 'dotenv'
dotenv.config();

const token = login.accessToken
export const decode = (token) =>{
  const payload = jwt.verify(token,process.env.ACCESS_TOKEN_SECRET)
    return payload
}  