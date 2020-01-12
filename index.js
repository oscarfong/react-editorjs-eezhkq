import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

import EditorJs from 'react-editor-js';

var data ;



class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>
          Start editing to see some magic happen :)
        </p>
        <div>
            <EditorJs data={data} />
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
