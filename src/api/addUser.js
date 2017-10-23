export default {
  isApi: true,
  path: '/api/addUser/:name/:age',
  handler: (req, res) => {
    //console.log('Adding', req.params, 'to', users);
    //users.push({
    // name: req.params.name,
    //  age: parseInt(req.params.age, 10)
    //});
    res.end();
  }
};
