const logout=(req, res) =>{
    res.clearCookie('auths');

    return res.status(200).json({ status: 200, message:'you are successfully logged out' });
  }
export default logout;