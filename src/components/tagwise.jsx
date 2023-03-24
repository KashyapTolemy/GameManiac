import React from "react";
import { useState, useEffect } from "react";

export default function Tagwise({ slides }) {
    const [filteredSlidesAction, setFilteredSlidesAction] = useState([])
    
    
    return (

        <div className="tagcontainer">
            <h2 className="tagwisetitle">BROWSE BY TAG</h2>
            <div className="tagwiseicons">
                <div className="tagtitle">Co-op</div>
                <div className="tagtitle">Comedy</div>
                <div className="tagtitle">Crime</div>
                <div className="tagtitle">Fantasy</div>
                <div className="tagtitle">First-Person</div>
                <div className="tagtitle">Great Soundtrack</div>
                <div className="tagtitle">Magic</div>
                <div className="tagtitle">Mature</div>
                <div className="tagtitle">Medieval</div>
                <div className="tagtitle">Multiplayer</div>
                <div className="tagtitle">Open World</div>
                <div className="tagtitle">Singleplayer</div>
                <div className="tagtitle">Story Rich</div>
                <div className="tagtitle">Third Person</div>
            </div>
        </div>
    )
}