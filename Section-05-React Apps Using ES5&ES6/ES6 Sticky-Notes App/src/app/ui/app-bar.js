import { React } from 'react';

const AppBar  = (props) => {
    return (
      <header className="app-bar row middle-xs">
        <span className="logo col-xs-10">
          ng-2-app
        </span>
        <nav className="col-xs-2">
          <div className="row middle-xs between-xs">
            <span className="link">Angular 2</span>
          </div>
        </nav>
      </header>
    );
}
