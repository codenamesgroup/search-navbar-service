import React from 'react';
import ReactDOM from 'react-dom';
import Top from './components/top.jsx'
import Bottom from './components/bottom.jsx'

export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
      test: true
    }
  }

  render(){
    return (
      <div>
        <Top />
        <Bottom />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
