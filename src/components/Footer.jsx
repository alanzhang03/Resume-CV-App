import "../assets/styles/Footer.css";
import logo from "../assets/images/github-logo.png";

export default function Footer() {
	return (
		<>
			<div className="footer-container">
				<div className="footer-text">
					<div className="github-logo-container">
						My Github Account:
						<a href="https://github.com/alanzhang03" target="_blank">
							<img className="Logo" src={logo} alt="Logo" />
						</a>
					</div>
				</div>
			</div>
		</>
	);
}
