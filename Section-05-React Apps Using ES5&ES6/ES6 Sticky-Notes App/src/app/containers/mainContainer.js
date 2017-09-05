import React from 'react';
import { Component } from 'react';

import NotesContainer from './notesContainer';
import AppBar from '../ui/app-bar';

class MainContainer extends Component {
  render() {
    return (
      <div className="main-container">
        <AppBar></AppBar>
        <div className="main">
          <NotesContainer></NotesContainer>
        </div>
      </div>
    );
  }
}
export default  MainContainer ;
