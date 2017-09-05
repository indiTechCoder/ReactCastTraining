import React from 'react';
import { Component } from 'react';


class NoteCard extends Component {
  constructor(props){
    super(props);

      this.state = {
        showCheck  : false
      }
      this.toggleCheck = this.toggleCheck.bind(this);
  }
  toggleCheck() {
    this.showCheck = !this.showCheck;
  }
  onChecked() {
    this.checked.next(this.note);
  }
  render() {
    return (
      <div
        className="note-card row shadow-1"
        onMouseEnter={this.toggleCheck}
        onMouseLeave={this.toggleCheck}
      >
        <div className="icon">
          <i className="material-icons">check</i>
        </div>
        <div className="col-xs-12 title">
          { this.props.note.title }
        </div>
        <div className="col-xs-12 value">
          {this.props.note.value }
        </div>
      </div>
    );
  }
}

export default NoteCard;
