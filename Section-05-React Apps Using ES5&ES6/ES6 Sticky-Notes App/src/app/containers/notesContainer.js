import { React } from 'react';
import NoteCard from '../ui/note-card';
import NotesCreator from '../ui/note-creator';
export default class notesContainer extends Component {

  constructor(props){
    super(props);
    this.state = {
      notes : [
      {title: 'Chores', value: 'Don\'t forget to clean up', color: 'white'},
      {title: 'Food', value: 'meal prep tonight please!', color: 'white'},
      {title: 'Shipping Number', value: '#234654hhd88', color: 'white'}
    ];
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
      <div class="row center-xs notes">
        <div class="col-xs-6 creator">
          <NotesCreator (createNote)="onCreateNote($event)"></NotesCreator>
        </div>
        <div class="notes col-xs-8">
          <div class="row between-xs">
            <NoteCard
              class="col-xs-4"
              [note]="note"
              *ngFor="let note of notes; let i = index"
              (checked)="onNoteChecked($event, i)"
            >
            </NoteCard>
          </div>
        </div>
      </div>
    );
  }
}
