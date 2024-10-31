import React, { useState } from 'react';
import './App.css';

function App() {
  const [notes, setNotes] = useState([]);
  const [noteInput, setNoteInput] = useState("");

  const addNote = () => {
    if (noteInput.trim()) {
      setNotes([...notes, noteInput]);
      setNoteInput("");
    }
  };

  const deleteNote = (index) => {
    setNotes(notes.filter((_, i) => i !== index));
  };

  return (
    <div className="App">
      <h1>Notes App</h1>
      <div className="input-section">
        <input
          type="text"
          value={noteInput}
          onChange={(e) => setNoteInput(e.target.value)}
          placeholder="Write a note..."
        />
        <button onClick={addNote}>Add Note</button>
      </div>
      <div className="notes-section">
        {notes.map((note, index) => (
          <div key={index} className="note">
            <p>{note}</p>
            <button onClick={() => deleteNote(index)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
