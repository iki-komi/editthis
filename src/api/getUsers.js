let users = [];

export default {
  isApi: true,
  path: '/api/users',
  handler: (req, res) => {
    res.send(users);
  }
};
