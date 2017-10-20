import {createStore} from 'redux';
import Counter from './counter';

export default {
  counter: createStore(Counter)
};
