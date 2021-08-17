import SocialIcon from "../../components/social-icon";
const Footer = () => {
    return (
        <div className="section bg-dark">
            <div className="container">
                <div className="footer-copyright-social">
                    <div className="footer-copyright">
                        <p>
                            Made with{" "}
                            <i className="icofont-heart" aria-hidden="true"></i>{" "}
                            by{" "}
                            <a
                                href=""
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Huda Mukhtar
                            </a>
                        </p>
                    </div>
                    <div className="footer-social">
                        <SocialIcon
                            path="https://www.linkedin.com/in/hudamukhtar"
                            icon="fab fa-linkedin"
                        />
                        <SocialIcon
                            path="https://github.com/hudamukhtar1"
                            icon="fab fa-github"
                        />
                        <SocialIcon
                            path="mailto:hudamukhtar1@gmail.com"
                            icon="fas fa-envelope"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
