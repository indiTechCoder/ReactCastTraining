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
      <div class="note-creator shadow-2" [ngStyle]="{'background-color': newNote.color}">
        <form class="row" (ngSubmit)="onCreateNote()">
          <input
            type="text"
            (focus)="toggle(true)"
            [(ngModel)]="newNote.title"
            name="newNoteTitle"
            placeholder="Create Sticky Notes"
            class="col-xs-10 title"
            *ngIf="fullForm"
          >
          <input
            type="text"
            (focus)="toggle(true)"
            [(ngModel)]="newNote.value"
            name="newNoteValue"
            placeholder="sticky Header"
            class="col-xs-10"
          >
          <input *ngIf="fullForm"
            type="text"
            (focus)="toggle(true)"
            [(ngModel)]="newNote.description"
            name="newNoteDescription"
            placeholder="sticky text"
            class="col-xs-10"
          >
          <div class="actions col-xs-12 row between-xs" *ngIf="fullForm">
            <div class="col-xs-3">
            </div>
            <button
              type="submit"
              class="btn-light"
             >
              Done
            </button>
          </div>
        </form>
      </div>
    );
  }
}
