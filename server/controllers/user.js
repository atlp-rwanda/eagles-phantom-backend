/* eslint-disable linebreak-style */
const welcome = (req, res) => res.status(200).json({
  status: 200,
  message: 'Welcome to phantom, a platform to facilitate the transportation mode in town!.',
});

export default welcome;
