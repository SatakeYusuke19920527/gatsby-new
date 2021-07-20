import React from "react"

export default function Hero() {
    return (
        <div className="hero">
            <h1 className="hero-text">
                Welcome to my Site!<br />
                Enjoy Everything!<br />
            </h1>
            <div className="hero-author">
                <img src="https://api.adorable.io/avatars/30/image.png" className="hero-author-image" alt="avatar"></img>
                <p className="hero-author-text">
                    Written by SatYus.<br />
                    Front Engineer at ProAca.Inc. Love JavaScript.
                </p>
            </div>
        </div>
    )
}