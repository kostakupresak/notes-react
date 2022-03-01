import {NavLink} from "react-router-dom";

function Header() {
    return (
        <header className="header header--orange">
            <NavLink to="/" className="header__logo">
                <img src="/images/logo-white.svg" alt="" className="header__logo-img"/>
                <span className="header__logo-text">Notes</span>
            </NavLink>
            <button className="header__hamburger js-header-hamburger">
                <span className="header__hamburger__bar"/>
                <span className="sr-only">Menu</span>
            </button>
            <div className="header__actions js-header-actions">
                <nav className="header__nav">
                    <NavLink to="/" className="header__nav-link header__nav-link--active">All notes</NavLink>
                    <NavLink to="/categories" className="header__nav-link header__nav-link--active">Categories</NavLink>
                </nav>
                <div className="header__buttons">
                    <a href="https://kostakuu.rs" target="_blank"
                       className="header__btn btn btn--white" rel="noreferrer">kostakuu</a>
                    <a href="https://www.vegait.rs/career/" target="_blank" className="header__btn btn btn--orange"
                       rel="noreferrer">
                        Career @ Vega IT
                    </a>
                </div>
            </div>
        </header>
    );
}

export default Header;