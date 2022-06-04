import React from "react";
import { Audio } from 'react-loader-spinner';
import "./loader.css";

export default function Loader() {
    return (
        <div className="loader">
            <Audio
                height="100"
                width="100"
                color='#f83600'
                ariaLabel='loading'
            />
        </div>

    )
}