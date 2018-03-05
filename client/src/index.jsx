import React from 'react';
import ReactDOM from 'react-dom';
import Top from './components/top.jsx';
import Bottom from './components/bottom.jsx';
import $ from 'jquery';

export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
      test: true
    }
  }

  goHome(){
    $.ajax({
      url: `http://127.0.0.1:3033/home`,
      type: 'GET',
      success: (data) => {
        console.log('home GET sucessful', data)
      },
      error: (data) => {
        console.log('home GET error', data)
      }
    })
  }

  goSignUp(){
    $.ajax({
      url: `http://127.0.0.1:3033/signup`,
      type: 'GET',
      success: (data) => {
        console.log('signup GET sucessful', data)
      },
      error: (data) => {
        console.log('signup GET error', data)
      }
    })
  }

  render(){
    return (
      <div>
        <Top goSignUp={this.goSignUp.bind(this)} goHome={this.goHome.bind(this)}/>
        <Bottom />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
