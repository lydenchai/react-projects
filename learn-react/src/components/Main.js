/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */

import React from "react";

export default function Mani() {
    return (
        <main>
            <div className="my-content">
                <div className="my-photo">
                    <img src="https://ionicframework.com/docs/img/demos/avatar.svg" />
                </div>
                <div className="my-info">
                    <div className="about-me">
                        <h1 className="name">Lauar Smith</h1>
                        <h4 className="job-title">Frontend Developer</h4>
                        <h5 className="website">laurasmith.website</h5>
                    </div>
                    <div className="btns">
                        <button>Email</button>
                        <button className="linkendIn">LinkedIn</button>
                    </div>
                    <br />
                    <div className="text">
                        <h3>About me</h3>
                        <span>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</span>
                    </div>
                    <br />
                    <div className="text">
                        <h3>Interests</h3>
                        <span>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</span>
                    </div>
                </div>
                <footer>
                    <a><i class="fa fa-twitter"></i></a>
                    <a><i class="fa fa-facebook"></i></a>
                    <a><i class="fa fa-instagram"></i></a>
                    <a><i class="fa fa-github"></i></a>
                </footer>
            </div>
        </main>
    )
}