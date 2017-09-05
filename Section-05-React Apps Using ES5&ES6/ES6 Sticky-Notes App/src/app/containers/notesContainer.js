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
 }
  onNoteChecked(note, i) {
    this.state.notes.splice(i, 1);
    this.setState({notes: this.state.notes});
  }

  onCreateNote(note) {
    this.state.notes.push(note);
    this.setState({notes: this.state.notes});
  }

  render() {
    return (
      <div className="row center-xs notes">
        <div className="col-xs-6 creator">
          <NotesCreator></NotesCreator>
        </div>
        <div className="notes col-xs-8">
          <div className="row cards between-xs">
            <NoteCard note={this.state.notes[0]} className="col-xs-4">
            </NoteCard>
          </div>
        </div>
      </div>
    );
  }
}
export default NotesContainer;
