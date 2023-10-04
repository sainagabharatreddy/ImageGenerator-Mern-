import React from "react";
import "../main.css"; 
import "./convert.css"
import FileUploader from "./dragdrop";


const convert=()=>{

    

    return(
        <>
       
                    <div className="navbar-container">
                <div className="navbar-content">
                    <div className="navbar-left">
                    </div>
                    <h1 className="navbar-logo" >Dream HOME</h1>
                    </div>

                    <div className="navbar-links">
                    <span className="nav-link">Home</span>
                    <span className="nav-link">Features</span>
                    <span className="nav-link">Services</span>
                    <span className="nav-link">Listed</span>
                    <span className="nav-link">Contact</span>
                    </div>
                </div>
                <div className="mainsec">
                    <div className="upload" >
                        <FileUploader/>
                    </div>
        </div>
        </>
    )
}

export default convert;