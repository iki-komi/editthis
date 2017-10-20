import Upload from './pages/upload';
import Home from './pages/home';

export default [
  {
    component: Home,
    exact: true,
    path: '/'
  },
  {
    component: Upload,
    path: '/upload'
  },
];
