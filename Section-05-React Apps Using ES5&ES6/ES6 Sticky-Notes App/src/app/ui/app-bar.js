import { React } from 'react';

const AppBar  = (props) => {
    return (
      <header class="app-bar row middle-xs">
        <span class="logo col-xs-10">
          ng-2-app
        </span>
        <nav class="col-xs-2">
          <div class="row middle-xs between-xs">
            <span class="link">Angular 2</span>
          </div>
        </nav>
      </header>
    );
}
