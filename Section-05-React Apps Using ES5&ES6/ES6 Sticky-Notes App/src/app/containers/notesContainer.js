import React from 'react';
import { Component } from 'react';

import NoteCard from '../ui/note-card';
import NotesCreator from '../ui/note-creator';

 class NotesContainer extends Component {

  constructor(props){
    super(props);
    this.state = {
      notes : [
      {title: 'Chores', value: 'Don\'t forget to clean up', color: 'white'},
      {title: 'Food', value: 'meal prep tonight please!', color: 'white'},
      {title: 'Shipping Number', value: '#234654hhd88', color: 'white'}
     ]
   }
   this.onCreateNote = this.onCreateNote.bind(this);
 }
  onNoteChecked(note, i) {
    this.state.notes.splice(i, 1);
    this.setState({notes: this.state.notes});
  }

  onCreateNote(note) {
    this.state.notes.push(note);
    this.setState({notes: this.state.notes});
  }
  renderCards(){
    return this.state.notes.map(function(_card){
      return (<NoteCard note={_card} className="col-xs-4" />
      );
    });
  }

  render() {
    return (
      <div className="row center-xs notes">
        <div className="col-xs-6 creator">
          <NotesCreator onCreateNote={this.onCreateNote}></NotesCreator>
        </div>
        <div className="notes col-xs-8">
          <div className="row cards">
          {this.renderCards()}
          </div>
        </div>
      </div>
    );
  }
}
export default NotesContainer;
