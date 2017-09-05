import React from 'react';
import { Component } from 'react';

class AppBar extends Component {
    render() {
      return(
      <header className="app-bar row middle-xs">
        <span className="logo col-xs-10">
          react-app
        </span>
        <nav className="col-xs-2">
          <div className="row middle-xs between-xs">
            <span className="link">react app</span>
          </div>
        </nav>
      </header>
    );
  }

};

export default AppBar;
