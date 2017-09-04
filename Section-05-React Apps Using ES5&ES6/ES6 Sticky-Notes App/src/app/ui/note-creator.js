import { React } from 'react';

export default class NoteCreator extends React.Component {
  constructor(){
      this.state = {
          title: '',
          value: '',
          color: 'white'
        };
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
      <div className="note-creator shadow-2" [ngStyle]="{'background-color': newNote.color}">
        <form className="row" (ngSubmit)="onCreateNote()">
          <input
            type="text"
            (focus)="toggle(true)"
            [(ngModel)]="newNote.title"
            name="newNoteTitle"
            placeholder="Create Sticky Notes"
            className="col-xs-10 title"
            *ngIf="fullForm"
          >
          <input
            type="text"
            (focus)="toggle(true)"
            [(ngModel)]="newNote.value"
            name="newNoteValue"
            placeholder="sticky Header"
            className="col-xs-10"
          >
          <input *ngIf="fullForm"
            type="text"
            (focus)="toggle(true)"
            [(ngModel)]="newNote.description"
            name="newNoteDescription"
            placeholder="sticky text"
            className="col-xs-10"
          >
          <div className="actions col-xs-12 row between-xs" *ngIf="fullForm">
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
