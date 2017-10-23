import Store from '../stores/index';

export default {
  isApi: true,
  path: '/api/counter',
  handler: (req, res) => {
    Store.dispatch({
      type: 'increment',
      value: 1
    });
    res.end();
  }
};
