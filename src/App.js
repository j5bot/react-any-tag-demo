import React, { Component } from 'react';

import 'bulma/css/bulma.css';

import { AnyTag } from './AnyTag';

class App extends Component {
  render() {
    return (
      <div className="box">
        <div className="level">
          <div className="level-item title">
            <h1>Any Tag</h1>
          </div>
        </div>

        <AnyTag tagName="wackytag" className="notification" data-test="testing attribute passing">
          <p>This is a paragraph inside of a <code>wackytag</code></p>
        </AnyTag>

      </div>
    );
  }
}

export default App;
