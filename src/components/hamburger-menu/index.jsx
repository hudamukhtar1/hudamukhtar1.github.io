import PropTypes from "prop-types";
import Logo from "../logo";
import { NavLink } from "react-router-dom";
import { getClosest, getSiblings, slideToggle, slideUp } from "../../utils";

const HamburgerMenu = ({ show, onClose }) => {
    const onClickHandler = (e) => {
        const target = e.currentTarget;
        const parentEl = target.parentElement;
        if (
            parentEl?.classList.contains("mobile-menu-expand") ||
            target.classList.contains("mobile-menu-expand")
        ) {
            const element = target.classList.contains("icon")
                ? parentEl
                : target;
            const parent = getClosest(element, "li");
            const childNodes = parent.childNodes;
            const parentSiblings = getSiblings(parent);
            parentSiblings.forEach((sibling) => {
                const sibChildNodes = sibling.childNodes;
                sibChildNodes.forEach((child) => {
                    if (child.nodeName === "UL") {
                        slideUp(child, 1000);
                    }
                });
            });
            childNodes.forEach((child) => {
                if (child.nodeName === "UL") {
                    slideToggle(child, 1000);
                }
            });
        }
    };
    return (
        <div className={`offcanvas-menu ${show ? "open" : ""}`}>
            <div className="offcanvas-wrapper">
                <div className="close-btn">
                    <button className="menu-close" onClick={onClose}>
                        <i className="icofont-close-line-circled"></i>
                    </button>
                </div>
                <div className="logo">
                    <Logo
                        image={`${process.env.PUBLIC_URL}/images/logo-2.png`}
                    />
                </div>
                <div className="primary-menu">
                    <ul>
                        <li>
                            <NavLink exact to="/">
                                Home
                            </NavLink>
                        </li>

                        {/* <li>
                            <NavLink to={process.env.PUBLIC_URL + "/project"}>
                                Project
                            </NavLink>
                        </li> */}
                        <li>
                            <NavLink to={process.env.PUBLIC_URL + "/contact"}>
                                Contact
                            </NavLink>
                        </li>
                        <li>
                            <a href={"https://drive.google.com/file/d/19V_Q3zG3ITKic8e1G8s8e6i-o7yKGfVP/view?usp=sharing"}>
                                Resume
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

HamburgerMenu.propTypes = {
    show: PropTypes.bool,
    onClose: PropTypes.func,
};

export default HamburgerMenu;
