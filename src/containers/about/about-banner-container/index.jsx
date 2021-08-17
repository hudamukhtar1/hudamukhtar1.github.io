import React from "react";
import AboutBannerContent from "../../../components/about-banner-content";
import SocialIcon from "../../../components/social-icon";
import AboutData from "../../../data/about.json";

const AboutBannerContainer = () => {
    return (
        <div className="section about-banner-section overflow-hidden">
            <div className="about-banner d-flex align-items-center">
                <div className="container">
                    <AboutBannerContent data={AboutData[1]} />
                </div>

                <div className="about-banner-image">
                    <img src="/images/huda.png" alt="andle" />
                </div>
            </div>

            <ul className="social">
                <li>
                    <SocialIcon
                        path="https://www.linkedin.com/in/hudamukhtar"
                        icon="fab fa-linkedin"
                    />
                </li>
                <li>
                    <SocialIcon
                        path="https://github.com/hudamukhtar1"
                        icon="fab fa-github"
                    />
                </li>
                <li>
                    <SocialIcon
                        path="mailto:hudamukhtar1@gmail.com"
                        icon="fas fa-envelope"
                    />
                </li>
            </ul>
        </div>
    );
};

export default AboutBannerContainer;
