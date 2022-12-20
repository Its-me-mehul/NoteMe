import React, {useState, useEffect} from "react";
import NoteCard from "./NoteCard";
import '../CSS/notefield.css'

const NoteField = ({notes, removeNote, saveText}) => {


    return(
        <div className="note-container">
            <h1 style={{marginBottom:"10px", fontWeight: "bold", color:"lightgrey"}}>Notes</h1>
            <div className="note-container-body custom-scroll">
                {
                 notes?.length > 0 ? (notes.map((item)=> <NoteCard key={item.id} note={item} removeNote = {removeNote} saveText = {saveText}/>)) : (<h3>No Notes Yet</h3>)
                }
            </div>
        </div>
    );
}

export default NoteField;