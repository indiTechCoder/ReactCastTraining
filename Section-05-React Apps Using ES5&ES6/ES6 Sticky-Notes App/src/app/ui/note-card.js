import { React } from 'react';

export default class NoteCard extends React.Component {
  constructor(){
      this.state = {
        showCheck  : false
      }
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
        [ngStyle]="{'background-color': note.color}"
        (mouseenter)="toggleCheck()"
        (mouseleave)="toggleCheck()"
      >
        <div className="icon" *ngIf="showCheck" (click)="onChecked()">
          <i className="material-icons">check</i>
        </div>
        <div className="col-xs-12 title">
          {{ note.title }}
        </div>
        <div className="col-xs-12 value">
          {{ note.value }}
        </div>
      </div>
    );
  }
}
