import React from "react";
import imagePaths from '../config/imagePaths';

import './Main.css';

export class MainContent extends React.Component {

    state = {
        isDarkMode: false
    };

    toggleTheme = () => {
        this.setState((prevState) => ({ isDarkMode: !prevState.isDarkMode }));
        document.body.classList.toggle('dark-mode');
    };

    getFaviconUrl = (url) => {
        try {
            const domain = new URL(url).origin;
            return `${domain}/favicon.ico`;
        } catch {
            return '';  
        }
    };

    render() {
        const { isDarkMode } = this.state;

        return (
            <>
                <main className={`container ${isDarkMode ? 'dark' : ''}`}>
                    <div className="banner">
                        <img src={imagePaths.banner} alt="Banner" className="banner-pic" />
                        <div className="profile-info">
                            <img className="profile-pic" src={imagePaths.profilePic} alt="Profile" />
                            <div className="infor">
                                <h2>Regy Robson
                                <button className="theme-toggle" onClick={this.toggleTheme}>
                                        {isDarkMode ? '🌞' : '🌙'}
                                    </button>
                                </h2>
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
                            <button className="btn" id="customBtn">
                                <img
                                    src={this.getFaviconUrl(imagePaths.socialLinks.concurseiro)}
                                    alt="Favicon"
                                    className="favicon-icon"
                                />
                                <span>Concurseiro</span>
                            </button>
                        </a>

                        <a href={imagePaths.socialLinks.repositorioGithub} target="_blank" rel="noopener noreferrer">
                            <button className="btn" id="customBtn">
                                <img
                                    src={this.getFaviconUrl(imagePaths.socialLinks.repositorioGithub)}
                                    alt="Favicon"
                                    className="favicon-icon"
                                />
                                <span>Repositório Github</span>
                            </button>
                        </a>

                        <a href={imagePaths.socialLinks.alura} target="_blank" rel="noopener noreferrer">
                            <button className="btn" id="customBtn">
                                <img
                                    src={this.getFaviconUrl(imagePaths.socialLinks.alura)}
                                    alt="Favicon"
                                    className="favicon-icon"
                                />
                                <span>Desconto 15% Alura</span>
                            </button>
                        </a>
                    </div>
                </main>
            </>
        );
    }
}
