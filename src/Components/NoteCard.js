import React from "react";
import '../CSS/notecard.css';
// import TextareaAutosize from 'react-textarea-autosize';
import deleteIcon from '../Images/delete_icon.png';

const NoteCard = (props) => {

    let timeout;

    const formattedDate = (val) => {

        const date = new Date(val);
        console.log(date);

        const month = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sept','Oct','Nov','Dec'];
        const days =['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'];

        const hrs = date.getHours();

        const mins = date.getMinutes();
        const day = date.getDay();
        console.log(day);
        const mon = date.getMonth();
        console.log(mon);
        const year = date.getFullYear();

        return `${hrs}:${mins} ${days[day-1]} ${month[mon]} ${year}`;
    }

    const debounce = (func) => {
        clearTimeout(timeout);

        timeout = setTimeout(func, 1000);
    }

    const saveText = (text,id) =>{

        debounce(() => props.saveText(text,id));

    } 

    console.log(formattedDate(props.note.time));

    return(
        <div className="notes" style={{backgroundColor: props.note.color}}>
            <textarea className="notes_text" onChange={(e) =>saveText(e.target.value,props.note.id)}>
            {props.note.text}
            </textarea>
            <div className="notes_footer">
                <p>
                    {formattedDate(props.note.time)}
                </p>
                <img src = {deleteIcon} onClick = {() => props.removeNote(props.note.id)}/>
            </div>
        </div>
    );
};

export default NoteCard;