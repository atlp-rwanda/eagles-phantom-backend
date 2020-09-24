<<<<<<< HEAD
/* eslint-disable linebreak-style */
/* eslint-disable arrow-body-style */
const welcome = (req, res) => {
  return res.status(200).json({
    status: 200,
    message: 'Welcome to phantom, a platform to facilitate the transportation mode in town!.',
  });
};
=======
const welcome = (req, res) => res.status(200).json({
  status: 200,
  message: 'Welcome to phantom, a platform to facilitate the transportation mode in town!.',
});
>>>>>>> ecafcd9a0060bb44c2a4e643191fb9605847111f

export default welcome;
