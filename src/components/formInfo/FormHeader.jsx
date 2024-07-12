import "../componentStyles/FormHeader.css";

export default function FormHeader({ clearResume, loadExample }) {
	return (
		<div className="form-header">
			<div className="form-header-container">
				<div className="clear-resume">
					<button className="clear-resume-button" onClick={clearResume}>
						🗑️Clear Resume
					</button>
				</div>
				<div className="load-example">
					<button className="load-example-button" onClick={loadExample}>
						Load Example
					</button>
				</div>
			</div>
		</div>
	);
}
