import React from 'react';
import Api from '../helpers/api';

class StoreUpload extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      age: 0
    };
  }

  onClick() {
    Api.get('/api/users')
      .then(users => {
        console.log("data", users);
      });
  }

  addUser(){
    Api.post(`/api/addUser/${this.state.name}/${this.state.age}`);
  }

  changeName(e) {
    const name = e.target.value;
    this.setState({name});
  }

  changeAge(e) {
    const age = parseInt(e.target.value, 10);
    this.setState({age});
  }

  render() {
    return (
      <div>
        <div style={{width: 10, height: 10, background: 'red'}} onClick={() => {this.onClick()}}/>
        <input type="text" onChange={(e) => {this.changeName(e)}}/>
        <input type="number" onChange={(e) => {this.changeAge(e)}}/>
        <div style={{width: 30, height: 10, background: 'grey'}} onClick={() => {this.addUser()}}/>
      </div>
    );
  }
}

export default StoreUpload;
