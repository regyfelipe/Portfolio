import React from "react";
import imagePaths from '../config/imagePaths';

import './Main.css';

export class MainContent extends React.Component {
    render() {
        return (
            <>
                <main className="container">
                    <div className="banner">
                        <img src={imagePaths.banner} alt="Banner" className="banner-pic" />
                        <div className="profile-info">
                            <img className="profile-pic" src={imagePaths.profilePic} alt="Profile" />
                            <div className="infor">
                                <h2>Regy Robson</h2>
                                <p>Fortaleza - Ce</p>
                            </div>
                            <div className="social-icons">
                                <a href={imagePaths.socialLinks.github} target="_blank" rel="noopener noreferrer">
                                    <img src={imagePaths.socialIcons.github} alt="GitHub" />
                                </a>
                                <a href={imagePaths.socialLinks.instagram} target="_blank" rel="noopener noreferrer">
                                    <img src={imagePaths.socialIcons.instagram} alt="Instagram" />
                                </a>
                                <a href={imagePaths.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                                    <img src={imagePaths.socialIcons.linkedin} alt="LinkedIn" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="buttons">
                        <a href={imagePaths.socialLinks.curriculo} download>
                            <button className="btn" id="customBtn">Currículo</button>
                        </a>
                        
                        <a href={imagePaths.socialLinks.concurseiro} target="_blank" rel="noopener noreferrer">
                            <button className="btn" id="customBtn">Concurseiro</button>
                        </a>

                        <a href={imagePaths.socialLinks.repositorioGithub} target="_blank" rel="noopener noreferrer">
                            <button className="btn" id="customBtn">Repositorio Github</button>
                        </a>
                        <a href={imagePaths.socialLinks.alura} target="_blank" rel="noopener noreferrer">
                            <button className="btn" id="customBtn">Desconto 15% Alura</button>
                        </a>

                    </div>
                </main>
            </>
        );
    }
}
