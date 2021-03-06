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

    // see: https://www.npmjs.com/package/react-editor-js
    return (
      <div>
        <Hello name={this.state.name} />
        <p>
          Start editing to see some magic happen :)
        </p>
        <div class="preEditorjs">
            <EditorJs data={data} />
        
        </div>
       </div>
    );
  }
}

render(<App />, document.getElementById('root'));
