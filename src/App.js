import React, { Component } from 'react';
import './App.css';
import './mentions/TextArea.scss';

import TextArea from './mentions/TextArea';

class App extends Component {
  render() {
    return (
      <div id="App" className="App">
        <TextArea
          suggestions={['NextActions', 'Someday_Actions', 'Costco', 'Alexa']}
        />

      </div>
    );
  }
}

export default App;
