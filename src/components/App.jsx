import React, {useState} from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Note from "./Note.jsx";

import CreateArea from "./CreateArea.jsx";




function App(){

const [notes, setNotes] = useState([]);

  function addNote(newNote){

  setNotes(prevNotes=> {
    return [...prevNotes, newNote]
  });

  }

  function deleteNote(id){

    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) =>{
        return index !== id;
      });
    });

  }

  function createNotes(noteItem, index){
    return <Note key={index} id={index} title={noteItem.title} content={noteItem.content} onDelete={deleteNote}></Note>;
  }



  return (<div><Header></Header>
    <CreateArea onAdd={addNote}></CreateArea>
  {notes.map(createNotes)}
  <Footer></Footer></div>);
}


export default App;
