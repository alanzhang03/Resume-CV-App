import "../componentStyles/Skills.css";
import React, { useState, useRef } from "react";

export default function Skills({
	programmingLanguages,
	webTech,
	softwareTool,
	concepts,
	handleChange,
}) {
	const [isFormVisible, setIsFormVisible] = useState(false);
	const formRef = useRef(null);

	const toggleFormVisibility = () => {
		setIsFormVisible(!isFormVisible);
	};

	return (
		<div className="skills">
			<div className="skills-header" onClick={toggleFormVisibility}>
				<h1 className="skills-header-form-text">
					<span role="img" aria-label="skills-icon">
						💻
					</span>{" "}
					Skills
				</h1>
				<button
					type="button"
					className={`toggle-button ${isFormVisible ? "rotate" : ""}`}
				>
					▼
				</button>
			</div>
			<div
				className={`skills-details-form-container ${
					isFormVisible ? "visible" : "hidden"
				}`}
				style={{
					maxHeight: isFormVisible
						? `${formRef.current.scrollHeight}px`
						: "0px",
				}}
			>
				<form ref={formRef} className="skills-details-form">
					<label htmlFor="programmingLanguages">Programming Languages</label>
					<input
						type="text"
						id="programmingLanguages"
						name="programmingLanguages"
						value={programmingLanguages}
						onChange={handleChange}
						placeholder="Enter Programming Languages"
					/>

					<label htmlFor="webTech">Web Technologies</label>
					<input
						type="text"
						id="webTech"
						name="webTech"
						value={webTech}
						onChange={handleChange}
						placeholder="Enter Web Technologies"
					/>

					<label htmlFor="softwareTools">Software and Tools</label>
					<input
						type="text"
						id="softwareTools"
						name="softwareTool"
						value={softwareTool}
						onChange={handleChange}
						placeholder="Enter Software and Tools"
					/>

					<label htmlFor="concepts">Concepts</label>
					<input
						type="text"
						id="concepts"
						name="concepts"
						value={concepts}
						onChange={handleChange}
						placeholder="Enter Concepts"
					/>
				</form>
			</div>
		</div>
	);
}
