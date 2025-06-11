import x from "../../images/xsvg.svg"

function Footer() {
    return (
        <footer className="footer">
            <p className="footer__paragraph">© 2025 Bluff App.</p>
            <a
                href="https://x.com/deobluff"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__link"
            >
                <img src={x} alt="Twitter Logo" className="footer__link--img" />
            </a>
        </footer>
    );
}

export default Footer;
