import React from 'react';
import { Component } from 'react';

 class NoteCreator extends Component {
  constructor(props){
    super(props)
      this.state = {
          title: '',
          value: '',
          color: 'white'
        };
        this.onCreateNote = this.onCreateNote.bind(this);
  }
  onCreateNote() {
    const { title, value, color } = this.state;

    if (title && value) {
      this.createNote.next({ title, value, color });
    }

    this.reset();
    this.fullForm = false;
  }

  reset() {
    this.setState ({
      title: '',
      value: '',
      color: 'white'
    });
  }

  toggle(value) {
    this.fullForm = value;
  }

  onColorSelect(color) {
    this.newNote.color = color;
  }

  render() {
    return (
      <div className="note-creator shadow-2">
        <form className="row" onSubmit={this.onCreateNote}>
          <input
            type="text"
            onFocus={this.toggle(true)}
            name="newNoteTitle"
            placeholder="Create Sticky Notes"
            className="col-xs-10 title"
          />
          <input
            type="text"
            onFocus={this.toggle(true)}
            name="newNoteValue"
            placeholder="sticky Header"
            className="col-xs-10"
          />
          <div className="actions col-xs-12 row between-xs">
            <div className="col-xs-3">
            </div>
            <button
              type="submit"
              className="btn-light"
             >
              Done
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default NoteCreator;
