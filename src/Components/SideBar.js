import React, { useState } from "react";
import plusIcon from '../Images/add_icon1.png';
import '../CSS/sidebar.css'

const SideBar = (props) => {

    // const plusIcon = '../Images/add_icon.png';

    const colors = ['#fe9b72','#fec971','#00d4fe','#b693fd','#e4ee91'];

    const [toggleSide, setToggleSide] = useState(false);

    return(

        <div className="sidebar">
            <img src={plusIcon} onClick={() => setToggleSide(!toggleSide)} alt='icon' style={{background:"transparent"}}/>
                <ul className={`sidebar-list ${toggleSide ? 'active':''}`} >
                    {colors.map((item, index) => (<li className="sidebar-list-items" style={{backgroundColor: item }} key={index} onClick={()=>props.addNote(item)
                    }/>))}
                </ul>
        </div>
    );

}

export default SideBar;