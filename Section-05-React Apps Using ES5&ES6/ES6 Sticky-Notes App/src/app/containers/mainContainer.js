import { React } from 'react';
import NotesContainer from './notesContainer';
import AppBar from '../ui/app.bar';

export default class mainContainer extends Component {
  render() {
    return (
      <div className="main-container">
        <AppBar></AppBar>
        <main className="main">
          <NotesContainer></NotesContainer>
        </main>
      </div>
    );
  }
}
