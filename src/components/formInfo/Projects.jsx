import React, { useState, useRef } from "react";
import "../componentStyles/Projects.css";

export default function Projects({
	projectName,
	projectLink,
	projectLanguage,
	projectDescription,
	handleChange,
}) {
	const [isFormVisible, setIsFormVisible] = useState(false);
	const formRef = useRef(null);

	const toggleFormVisibility = () => {
		setIsFormVisible(!isFormVisible);
	};

	return (
		<div className="projects">
			<div className="projects-header" onClick={toggleFormVisibility}>
				<h1 className="projects-header-form-text">
					<span role="img" aria-label="projects-icon">
						📁
					</span>{" "}
					Projects
				</h1>
				<button
					type="button"
					className={`toggle-button ${isFormVisible ? "rotate" : ""}`}
				>
					▼
				</button>
			</div>
			<div
				className={`projects-form-container ${
					isFormVisible ? "visible" : "hidden"
				}`}
				style={{
					maxHeight: isFormVisible
						? `${formRef.current.scrollHeight}px`
						: "0px",
				}}
			>
				<form ref={formRef} className="projects-form">
					<label htmlFor="projectName">Project Name</label>
					<input
						type="text"
						id="projectName"
						name="projectName"
						value={projectName}
						onChange={handleChange}
						placeholder="Enter project name"
						required
					/>

					<label htmlFor="projectLink">Project Link</label>
					<input
						type="text"
						id="projectLink"
						name="projectLink"
						value={projectLink}
						onChange={handleChange}
						placeholder="Enter project Link (web address, Github, etc.)"
					/>

					<label htmlFor="projectLanguage">Project Language</label>
					<input
						type="text"
						id="projectLanguage"
						name="projectLanguage"
						value={projectLanguage}
						onChange={handleChange}
						placeholder="Enter project language"
					/>

					<label htmlFor="projectDescription">Project Description</label>
					<textarea
						id="projectDescription"
						name="projectDescription"
						value={projectDescription}
						onChange={handleChange}
						placeholder="Enter project description"
					/>
				</form>
			</div>
		</div>
	);
}
