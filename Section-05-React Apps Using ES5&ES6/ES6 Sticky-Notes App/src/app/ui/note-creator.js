import React from 'react';
import { Component } from 'react';

 class NoteCreator extends Component {
  constructor(props){
    super(props)
      this.state = {
          title: '',
          value: ''
        };
        this.onCreateNote = this.onCreateNote.bind(this);
        this.titleChange = this.titleChange.bind(this);
        this.headerChange = this.headerChange.bind(this);
  }
  onCreateNote() {
    const { title, value } = this.state;

    if (title && value) {
      this.createNote.next({ title, value });
    }

    this.reset();
    this.fullForm = false;
  }

  reset() {
    this.setState ({
      title: '',
      value: ''
     });
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
    onCreateNote(){
      e.preventDefault();
      e.stopPropagation()
      console.log(this.state.title);
      console.log(this.state.value);

      this.props.onCreateNote({
        title: this.state.title,
        value: this.state.value
       })
    }

  render() {
    return (
      <div className="note-creator shadow-2">
        <form ref='user_form' className="row"
              onSubmit={this.onCreateNote}>
          <input
            type="text"
            onChange={this.titleChange}
            onFocus={this.toggle(true)}
            name="newNoteTitle"
            placeholder="Create Sticky Notes"
            className="col-xs-10 title"
          />
          <input
            type="text"
            onChange={this.headerChange}
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
              value="submit"
              className="btn-light"
             >Submit</button>

          </div>
        </form>
      </div>
    );
  }
}

export default NoteCreator;
