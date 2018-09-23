import React from 'react';
import {Component} from 'react';

class NoteCreator extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: null,
      value: null
    };
    this.onCreateNote = this
      .onCreateNote
      .bind(this);
    this.titleChange = this
      .titleChange
      .bind(this);
    this.headerChange = this
      .headerChange
      .bind(this);
  }
  onCreateNote() {
    const {title, value} = this.state;

    if (title && value) {
      this
        .createNote
        .next({title, value});
    }

    this.reset();
    this.fullForm = false;
  }

  reset() {
    this.setState({title: null, value: null});
  }
  toggle(value) {
    this.fullForm = value;
  }
  titleChange(e) {
    this.setState({title: e.target.value});
  }
  headerChange(e) {
    this.setState({value: e.target.value});
  }
  onCreateNote() {
    console.log(this.state.title);
    console.log(this.state.value);
    if (this.state.title && this.state.value) {
      this
        .props
        .onCreateNote({title: this.state.title, value: this.state.value});
      this.reset();
    }

  }

  render() {
    return (
      <div className="note-creator shadow-2">
        <div className="row">
          <input
            type="text"

            onChange={this.titleChange}
            onFocus={this.toggle(true)}
            name="newNoteTitle"
            placeholder="Create Sticky Notes"
            className="col-xs-10 title"/>
          <input

            type="text"
            onChange={this.headerChange}
            onFocus={this.toggle(true)}
            name="newNoteValue"
            placeholder="sticky Header"
            className="col-xs-10"/>
          <div className="actions col-xs-12 row between-xs">
            <div className="col-xs-3"></div>
          </div>
          <button
            type="submit"
            onClick={this.onCreateNote}
            value="submit"
            className="btn-light">Submit</button>
        </div>
      </div>
    );
  }
}

export default NoteCreator;
