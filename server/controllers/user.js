const welcome = (res) => {
      return res.status(200).json({
          status: 200,
          message: 'Welcome to phantom'
      });
  };

  export default welcome;