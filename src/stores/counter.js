import {connect} from 'react-redux';

const increment = (state = 0, action) => {
  if (action.value) {
    return state + action.value;
  }
  return state;
};

export default increment;

//const mapStateToProps = state => {
//  return {
//    incValue: increment(state.value, 1)
//  };
//};
//
//const mapDispatchToProps = dispatch => {
//  return {
//    onIncvalue: value => {
//      dispatch(value);
//    }
//  };
//};
//
//const Incrementer = connect(
//  mapStateToProps,
//  mapDispatchToProps
//)
