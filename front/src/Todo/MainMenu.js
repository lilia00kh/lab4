import React, {Component}  from "react";
import {Link} from "react-router-dom";

function MainMenu(props) {


    let linksMarcup = props.links.map((link,index)=>{
            return(
                <Link to={link.link}>
                    <li className="nav-item" key={index}>
                        <a className="nav-link active" >{link.label}</a>
                    </li>
                </Link>
            )

    })
    return(
        <nav className="navbar navbar-default">
            <ul className="nav">
                {linksMarcup}
            </ul>
        </nav>
    )
}

export default MainMenu