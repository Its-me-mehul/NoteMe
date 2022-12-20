import React, { useEffect, useState } from "react";
import NoteField from "./Components/NoteField";
import SideBar from "./Components/SideBar";
import './CSS/App.css'

const App = () =>{

    const [notes,setNotes] = useState(JSON.parse(localStorage.getItem('notesKeeper-app')) || []);

    const addNote = (color) => {

        const tempNotes = [...notes];

        tempNotes.unshift({
            id: Date.now() + ''+ Math.floor(Math.random()*78),
            text:"",
            time:Date.now(),
            color:color,
        })

        setNotes(tempNotes);
    }


    const removeNote = (id) =>{
        const tempNotes = [...notes];

        const ind = tempNotes.findIndex((el) => el.id === id)

        if(ind < 0) {
            console.log(id)}

        tempNotes.splice(ind,1);

        setNotes(tempNotes);
    }

    const saveText = (text,id) => {

        const tempNotes = [...notes];

        const ind = tempNotes.findIndex((el) => el.id === id);

        if(ind < 0) return;

        tempNotes[ind].text = text;

        setNotes(tempNotes);
    }

    useEffect(() =>{
        localStorage.setItem('notesKeeper-app',JSON.stringify(notes));
    },[notes])

    return(
        <div className="App">
            <SideBar addNote = {addNote}/>
            <NoteField notes={notes} removeNote = {removeNote} saveText={saveText}/>
        </div>
    )

}

export default App;